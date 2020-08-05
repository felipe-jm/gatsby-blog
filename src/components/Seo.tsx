/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

interface SiteProps {
  site: {
    siteMetadata: {
      siteUrl: string;
      description: string;
      author: string;
      title: string;
    };
  };
}

interface Meta {
  name: string;
  content: string;
}

interface SEOProps {
  title: string;
  description?: string;
  lang?: string;
  meta?: Meta[];
  image?: string;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  lang,
  meta = [],
  image,
}) => {
  const { site } = useStaticQuery<SiteProps>(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `,
  );

  const metaDescription = description || site.siteMetadata.description;

  const url = site.siteMetadata.siteUrl;

  const ogImage = `${url}${image || '/assets/img/logo.svg'}`;

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:image',
          content: ogImage,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'twitter:image:src',
          content: ogImage,
        },
        {
          name: 'twitter:creator',
          content: site.siteMetadata.author,
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
      ].concat(meta)}
    />
  );
};

export default SEO;
