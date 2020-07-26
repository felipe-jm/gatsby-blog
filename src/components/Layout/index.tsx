import React from 'react';

import { TransitionPortal } from 'gatsby-plugin-transition-link';

import GlobalStyles from '@/styles/global';
import SideBar from '../SideBar';
import MenuBar from '../MenuBar';

import * as S from './styles';

const Layout: React.FC = ({ children }) => (
  <S.LayoutWrapper>
    <GlobalStyles />
    <TransitionPortal level="top">
      <SideBar />
    </TransitionPortal>
    <S.LayoutMain>{children}</S.LayoutMain>
    <MenuBar />
  </S.LayoutWrapper>
);

export default Layout;
