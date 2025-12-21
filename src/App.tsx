import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { CartProvider } from './contexts/CartContext';
import { AuthProvider } from './contexts/AuthContext';
import { WishlistProvider } from './contexts/WishlistContext';
import { NotificationProvider } from './contexts/NotificationContext';
import { AppLayout } from './components/layout';
import { HomePage } from './pages/Home';
import { ShopPage, CollectionPage, ProductPage } from './pages/Shop';
import { ChatPage } from './pages/Chat';
import { CartPage } from './pages/Cart';
import {
  KnowledgePage,
  FAQPage,
  ArticlesPage,
  ArticleDetailPage,
  ShippingPolicyPage,
  ReturnPolicyPage,
  PartnershipPage,
  PartnershipDetailPage,
} from './pages/Knowledge';
import {
  AccountPage,
  LoginPage,
  RegisterPage,
  WishlistPage,
  SettingsPage,
} from './pages/Account';
import { NotificationsPage } from './pages/Notifications';

import './styles/variables.css';
import './styles/base.css';
import './styles/themes/minimal.css';
import './styles/themes/shopify.css';
import './styles/themes/classic.css';

function App() {
  return (
    <BrowserRouter basename="/4blanc-web">
      <ThemeProvider>
        <AuthProvider>
          <CartProvider>
            <WishlistProvider>
              <NotificationProvider>
                <Routes>
                  <Route element={<AppLayout />}>
                    {/* Main Tabs */}
                    <Route path="/" element={<HomePage />} />
                    <Route path="/shop" element={<ShopPage />} />
                    <Route path="/shop/:handle" element={<CollectionPage />} />
                    <Route path="/product/:handle" element={<ProductPage />} />
                    <Route path="/chat" element={<ChatPage />} />

                    {/* Knowledge Base */}
                    <Route path="/knowledge" element={<KnowledgePage />} />
                    <Route path="/knowledge/faq" element={<FAQPage />} />
                    <Route path="/knowledge/articles" element={<ArticlesPage />} />
                    <Route path="/knowledge/articles/:slug" element={<ArticleDetailPage />} />
                    <Route path="/knowledge/partnership" element={<PartnershipPage />} />
                    <Route path="/knowledge/partnership/:slug" element={<PartnershipDetailPage />} />
                    <Route path="/knowledge/shipping-policy" element={<ShippingPolicyPage />} />
                    <Route path="/knowledge/return-policy" element={<ReturnPolicyPage />} />

                    {/* Account */}
                    <Route path="/account" element={<AccountPage />} />
                    <Route path="/account/login" element={<LoginPage />} />
                    <Route path="/account/register" element={<RegisterPage />} />
                    <Route path="/account/wishlist" element={<WishlistPage />} />
                    <Route path="/account/settings" element={<SettingsPage />} />

                    {/* Notifications */}
                    <Route path="/notifications" element={<NotificationsPage />} />

                    {/* Cart */}
                    <Route path="/cart" element={<CartPage />} />
                  </Route>
                </Routes>
              </NotificationProvider>
            </WishlistProvider>
          </CartProvider>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
