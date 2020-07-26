import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { FixedObject, FluidObject } from 'gatsby-image';

import * as S from './styles';

interface AvatarImage {
  avatarImage: {
    childImageSharp: {
      fixed?: FixedObject;
      fluid?: FluidObject;
    };
  };
}

const Avatar: React.FC = () => {
  const { avatarImage } = useStaticQuery<AvatarImage>(
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "profile-pic.jpeg" }) {
          childImageSharp {
            fluid(maxWidth: 60) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `,
  );

  return (
    <S.AvatarWrapper
      title="Felipe Jung"
      fluid={avatarImage.childImageSharp.fluid}
    />
  );
};

export default Avatar;
