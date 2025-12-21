import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { MobileContainer } from './MobileContainer';
import { Header } from './Header';
import { BottomTabBar } from './BottomTabBar';
import './AppLayout.css';

const hideTabBarRoutes = ['/cart', '/account/login', '/account/register'];

export const AppLayout: React.FC = () => {
  const location = useLocation();
  const showTabBar = !hideTabBarRoutes.some((route) => location.pathname.startsWith(route));
  const isHome = location.pathname === '/';

  return (
    <MobileContainer>
      <div className="app-layout">
        <Header />
        <main className={`app-content hide-scrollbar ${isHome ? 'app-content--home' : ''}`}>
          <Outlet />
        </main>
        {showTabBar && <BottomTabBar />}
        {/* Portal target for modals */}
        <div id="modal-root" />
      </div>
    </MobileContainer>
  );
};
