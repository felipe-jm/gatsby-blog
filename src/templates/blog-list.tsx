import React from 'react';
import { graphql } from 'gatsby';

import Layout from '@/components/Layout';
import PostItem from '@/components/PostItem';

import Pagination from '@/components/Pagination';

import * as S from '@/components/ListWrapper/styles';

export const query = graphql`
  query PostsList($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            description
            background
            category
            date(locale: "pt-BR", formatString: "DD [de] MMMM [de] YYYY")
          }
          timeToRead
        }
      }
    }
  }
`;

interface BlogList {
  data: PostListProps;
  pageContext: {
    currentPage: number;
    numPages: number;
  };
}

const BlogList: React.FC<BlogList> = ({
  data,
  pageContext: { currentPage, numPages },
}) => {
  const postsList = data.allMarkdownRemark.edges;

  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? '/' : `/page/${currentPage - 1}`;
  const nextPage = `/page/${currentPage + 1}`;

  return (
    <Layout>
      <S.ListWrapper>
        {postsList.map(
          ({
            node: {
              frontmatter: { title, description, background, category, date },
              fields: { slug },
              timeToRead,
            },
          }) => (
            <PostItem
              key={slug}
              slug={slug}
              background={background}
              category={category}
              date={date}
              timeToRead={Number(timeToRead)}
              title={title}
              description={description}
            />
          ),
        )}
      </S.ListWrapper>

      <Pagination
        isFirst={isFirst}
        isLast={isLast}
        currentPage={currentPage}
        numPages={numPages}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </Layout>
  );
};

export default BlogList;
