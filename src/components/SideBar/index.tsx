import React from 'react';

import { useMenu } from '@/hooks/menu';

import MenuLinks from '../MenuLinks';
import Profile from '../Profile';
import SocialLinks from '../SocialLinks';
import * as S from './styles';

const Sidebar: React.FC = () => {
  const { isMenuOpen } = useMenu();

  return (
    <S.SidebarWrapper isMenuOpen={isMenuOpen}>
      <Profile isMobileHeader={false} />
      <S.SidebarLinksContainer>
        <SocialLinks />
        <MenuLinks />
      </S.SidebarLinksContainer>
    </S.SidebarWrapper>
  );
};

export default Sidebar;
