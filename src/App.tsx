import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import { AuthProvider } from './contexts/AuthContext';
import { NotificationProvider } from './contexts/NotificationContext';
import { AppLayout } from './components/layout';
import { HomePage } from './pages/Home';
import { ShopPage, CollectionPage, ProductPage, MaestroProductPage } from './pages/Shop';
import { ChatPage } from './pages/Chat';
import { ContactPage } from './pages/Contact';
import { CartPage } from './pages/Cart';
import { CheckoutPage, OrderSuccessPage } from './pages/Checkout';
import {
  KnowledgePage,
  FAQPage,
  ManualPage,
  VideoGuidePage,
  ShippingPolicyPage,
  ReturnPolicyPage,
  PrivacyPolicyPage,
  PartnershipPage,
  PartnershipDetailPage,
  SetupGuidePage,
  MaestroSetupGuidePage,
  AlizeSetupGuidePage,
} from './pages/Knowledge';
import {
  AccountPage,
  LoginPage,
  RegisterPage,
  SettingsPage,
  OrdersPage,
  OrderDetailPage,
  WarrantyPage,
} from './pages/Account';
import { NotificationsPage } from './pages/Notifications';

import './styles/variables.css';
import './styles/base.css';
import './styles/themes/minimal.css';

function App() {
  return (
    <BrowserRouter basename="/4blanc-web">
      <AuthProvider>
        <CartProvider>
          <NotificationProvider>
            <Routes>
              <Route element={<AppLayout />}>
                {/* Main Tabs */}
                <Route path="/" element={<HomePage />} />
                <Route path="/shop" element={<ShopPage />} />
                <Route path="/shop/:handle" element={<CollectionPage />} />
                <Route path="/product/maestro-nail-station" element={<MaestroProductPage />} />
                <Route path="/product/:handle" element={<ProductPage />} />
                <Route path="/chat" element={<ChatPage />} />
                <Route path="/contact" element={<ContactPage />} />

                {/* Knowledge Base */}
                <Route path="/knowledge" element={<KnowledgePage />} />
                <Route path="/knowledge/faq" element={<FAQPage />} />
                <Route path="/knowledge/manual" element={<ManualPage />} />
                <Route path="/knowledge/video-guide" element={<VideoGuidePage />} />
                <Route path="/knowledge/setup-guide" element={<SetupGuidePage />} />
                <Route path="/knowledge/setup-guide/maestro" element={<MaestroSetupGuidePage />} />
                <Route path="/knowledge/setup-guide/alize" element={<AlizeSetupGuidePage />} />
                <Route path="/partnership" element={<PartnershipPage />} />
                <Route path="/partnership/:slug" element={<PartnershipDetailPage />} />
                <Route path="/knowledge/shipping-policy" element={<ShippingPolicyPage />} />
                <Route path="/knowledge/return-policy" element={<ReturnPolicyPage />} />
                <Route path="/knowledge/privacy-policy" element={<PrivacyPolicyPage />} />

                {/* Account */}
                <Route path="/account" element={<AccountPage />} />
                <Route path="/account/login" element={<LoginPage />} />
                <Route path="/account/register" element={<RegisterPage />} />
                <Route path="/account/settings" element={<SettingsPage />} />
                <Route path="/account/orders" element={<OrdersPage />} />
                <Route path="/account/orders/:id" element={<OrderDetailPage />} />
                <Route path="/account/warranty" element={<WarrantyPage />} />

                {/* Notifications */}
                <Route path="/notifications" element={<NotificationsPage />} />

                {/* Cart */}
                <Route path="/cart" element={<CartPage />} />

                {/* Checkout */}
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="/checkout/success" element={<OrderSuccessPage />} />
              </Route>
            </Routes>
          </NotificationProvider>
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
