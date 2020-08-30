import { useStaticQuery, graphql, PageProps, Link } from 'gatsby';
import { FixedObject, FluidObject } from 'gatsby-image';
import React from 'react';

import * as S from '@/components/NotFound/styles';
import SEO from '@/components/Seo';
import GlobalStyles from '@/styles/global';

interface NotFoundImage {
  notFoundImage: {
    childImageSharp: {
      fixed?: FixedObject;
      fluid?: FluidObject;
    };
  };
}

const NotFoundPage: React.FC<PageProps> = () => {
  const { notFoundImage } = useStaticQuery<NotFoundImage>(
    graphql`
      query {
        notFoundImage: file(relativePath: { eq: "not-found.png" }) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `,
  );

  return (
    <S.Container>
      <SEO title="404: Not found" />
      <GlobalStyles />

      <div>
        <S.ImageWrapper fluid={notFoundImage.childImageSharp.fluid} />

        <Link to="/">Voltar para o blog</Link>
      </div>
    </S.Container>
  );
};

export default NotFoundPage;
