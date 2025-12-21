import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { ChevronLeft } from 'lucide-react';
import './BottomSheet.css';

interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export const BottomSheet: React.FC<BottomSheetProps> = ({
  isOpen,
  onClose,
  title,
  children,
}) => {
  const [portalTarget, setPortalTarget] = useState<HTMLElement | null>(null);

  // Find the modal-root element inside app-layout
  useEffect(() => {
    const target = document.getElementById('modal-root');
    setPortalTarget(target);
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen || !portalTarget) return null;

  return createPortal(
    <div className="bottom-sheet-overlay" onClick={onClose}>
      <div className="bottom-sheet" onClick={(e) => e.stopPropagation()}>
        <div className="bottom-sheet-header">
          <button className="bottom-sheet-back" onClick={onClose}>
            <ChevronLeft size={24} />
          </button>
          <span className="bottom-sheet-title">{title}</span>
          <div className="bottom-sheet-spacer" />
        </div>
        <div className="bottom-sheet-content">
          {children}
        </div>
      </div>
    </div>,
    portalTarget
  );
};
