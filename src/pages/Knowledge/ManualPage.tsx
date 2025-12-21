import React from 'react';
import { FileText, ExternalLink } from 'lucide-react';
import { H2, Body, BodySmall } from '../../components/common';
import './ManualPage.css';

// PDF base URL on Shopify CDN
const PDF_BASE = 'https://cdn.shopify.com/s/files/1/0726/0549/9680/files';

interface Manual {
  id: string;
  title: string;
  subtitle?: string;
  pdfUrl: string;
  pdfName: string;
}

const manuals: Manual[] = [
  {
    id: 'alize-dc',
    title: 'Alizé™ Nail Dust Collector',
    pdfUrl: `${PDF_BASE}/Alize-manual-final-output-web-Nov2025.pdf`,
    pdfName: '4BLANC_Alize_Manual_eng.pdf',
  },
  {
    id: 'alize-filter',
    title: 'Alizé™ HEPA-11 Filter',
    pdfUrl: `${PDF_BASE}/Alize-Filter-Manual-web-6Nov2025.pdf`,
    pdfName: '4BLANC_Alize_Filter_Manual_Eng.pdf',
  },
  {
    id: 'alize-stand',
    title: 'Alizé™ Floor Rolling Stand',
    pdfUrl: `${PDF_BASE}/Alize-Stand_Manual_final-web-nov2025.pdf`,
    pdfName: '4BLANC_Alize_Floor_Stand_Manual_Eng.pdf',
  },
  {
    id: 'maestro-dc',
    title: 'Maéstro™ Ultimate Protection Nail Station',
    pdfUrl: `${PDF_BASE}/Maestro-DC-manual-2024Dec.pdf`,
    pdfName: '4BLANC_Maestro_Manual_Eng.pdf',
  },
  {
    id: 'maestro-filter',
    title: 'Maéstro™ HEPA-12 Filter',
    pdfUrl: `${PDF_BASE}/Maestro-Filter-Manual-Dec2024.pdf`,
    pdfName: '4BLANC_Maestro_Filter_Manual_Eng.pdf',
  },
  {
    id: 'maestro-stand',
    title: 'Maéstro™ Heavy-Duty Rolling Stand',
    pdfUrl: `${PDF_BASE}/Maestro-Floor-Stand-Manual-Dec2024.pdf`,
    pdfName: '4BLANC_Maestro_Floor_Stand_Manual_Eng.pdf',
  },
  {
    id: 'shadowless-lamp',
    title: 'Shadowless Lamp',
    pdfUrl: `${PDF_BASE}/LED_lamp_Manual-nov2025-web.pdf`,
    pdfName: '4BLANC_Shadowless_LED_Lamp_Manual_Eng.pdf',
  },
  {
    id: 'uv-led-lamp',
    title: 'UV LED Nail Lamp',
    subtitle: 'Corded & Cordless versions',
    pdfUrl: `${PDF_BASE}/UV-LED-Nail-Lamp-Manual.pdf`,
    pdfName: '4BLANC_UV_LED_Nail_Lamp_Manual_Eng.pdf',
  },
];

export const ManualPage: React.FC = () => {
  const handleOpenPdf = (pdfUrl: string) => {
    window.open(pdfUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="manual-page">
      <div className="manual-header">
        <H2>User Manuals</H2>
        <BodySmall color="secondary">
          Product care and maintenance guides
        </BodySmall>
      </div>

      <div className="manual-list">
        {manuals.map((manual) => (
          <button
            key={manual.id}
            className="manual-item"
            onClick={() => handleOpenPdf(manual.pdfUrl)}
          >
            <span className="manual-icon">
              <FileText size={22} />
            </span>
            <div className="manual-info">
              <Body>{manual.title}</Body>
              {manual.subtitle && (
                <BodySmall color="tertiary">{manual.subtitle}</BodySmall>
              )}
            </div>
            <ExternalLink size={18} className="manual-external" />
          </button>
        ))}
      </div>

      <div className="manual-footer">
        <BodySmall color="tertiary">
          PDFs will open in a new browser tab
        </BodySmall>
      </div>
    </div>
  );
};
