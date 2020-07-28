import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Menu } from '@styled-icons/boxicons-regular/Menu';

import Avatar from '@/components/Avatar';

import getThemeColor from '@/utils/getThemeColor';

import { useMenu } from '@/hooks/menu';
import * as S from './styles';

interface Profile {
  isMobileHeader: boolean;
}

const Profile: React.FC<Profile> = ({ isMobileHeader }) => {
  const { toggleMenu } = useMenu();

  const {
    site: {
      siteMetadata: { title, position, description },
    },
  } = useStaticQuery<SiteMetaData>(graphql`
    query MySiteMetadata {
      site {
        siteMetadata {
          title
          position
          description
          author
        }
      }
    }
  `);

  return (
    <S.ProfileWrapper isMobileHeader={isMobileHeader}>
      <S.ProfileLink
        to="/"
        cover
        direction="left"
        bg={getThemeColor()}
        duraction={0.6}
      >
        <Avatar />
        <S.ProfileAuthor>
          {title}
          <S.ProfilePosition>{position}</S.ProfilePosition>
        </S.ProfileAuthor>
      </S.ProfileLink>

      <S.ProfileDescription>{description}</S.ProfileDescription>

      <S.MobileNav>
        <S.MenuBarItem onClick={toggleMenu}>
          <Menu />
        </S.MenuBarItem>
      </S.MobileNav>
    </S.ProfileWrapper>
  );
};

export default Profile;
