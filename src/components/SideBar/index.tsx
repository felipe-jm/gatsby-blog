import React from 'react';
import Profile from '../Profile';
import SocialLinks from '../SocialLinks';

import * as S from './styles';
import MenuLinks from '../MenuLinks';

const Sidebar: React.FC = () => (
  <S.SidebarWrapper>
    <Profile />
    <SocialLinks />
    <MenuLinks />
  </S.SidebarWrapper>
);

export default Sidebar;
