import { TransitionPortal } from 'gatsby-plugin-transition-link';
import React from 'react';

import GlobalStyles from '@/styles/global';

import MenuBar from '../MenuBar';
import Profile from '../Profile';
import SideBar from '../SideBar';
import * as S from './styles';

const Layout: React.FC = ({ children }) => (
  <S.LayoutWrapper>
    <GlobalStyles />
    <TransitionPortal level="top">
      <Profile isMobileHeader />
      <SideBar />
    </TransitionPortal>
    <S.LayoutMain>{children}</S.LayoutMain>
    <TransitionPortal level="top">
      <MenuBar />
    </TransitionPortal>
  </S.LayoutWrapper>
);

export default Layout;
