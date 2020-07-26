import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Avatar from '@/components/Avatar';

import getThemeColor from '@/utils/getThemeColor';

import * as S from './styles';

const Profile: React.FC = () => {
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
    <S.ProfileWrapper>
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
    </S.ProfileWrapper>
  );
};

export default Profile;
