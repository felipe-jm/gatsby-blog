import React from 'react';

import { TransitionPortal } from 'gatsby-plugin-transition-link';

import GlobalStyles from '@/styles/global';
import SideBar from '../SideBar';
import MenuBar from '../MenuBar';

import * as S from './styles';
import Profile from '../Profile';

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
