import React from 'react';

import getThemeColor from '@/utils/getThemeColor';
import links from './content';

import * as S from './styles';

const MenuLinks: React.FC = () => (
  <S.MenuLinksWrapper>
    <S.MenuLinksList>
      {links.map((link) => (
        <S.MenuLinksItem key={link.label}>
          <S.MenuLinksLink
            cover
            direction="left"
            bg={getThemeColor()}
            duraction={0.6}
            to={link.url}
            activeClassName="active"
          >
            {link.label}
          </S.MenuLinksLink>
        </S.MenuLinksItem>
      ))}
    </S.MenuLinksList>
  </S.MenuLinksWrapper>
);

export default MenuLinks;
