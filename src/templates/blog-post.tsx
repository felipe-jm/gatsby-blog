import React from 'react';
import { graphql } from 'gatsby';

import Layout from '@/components/Layout';

import * as S from '@/components/Post/styles';
import RecommendedPosts from '@/components/RecommendedPosts';
import SEO from '@/components/Seo';

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
        date(locale: "pt-BR", formatString: "DD [de] MMMM [de] YYYY")
        image
      }
      html
      timeToRead
    }
  }
`;

interface BlogPost {
  data: PostProps;
  pageContext: RecommendedPostsProps;
}

const BlogPost: React.FC<BlogPost> = ({ data, pageContext }) => {
  const post = data.markdownRemark;
  const previous = pageContext.previousPost;
  const next = pageContext.nextPost;

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        image={post.frontmatter.image}
      />
      <S.PostHeader>
        <S.PostDate>
          {post.frontmatter.date} • {post.timeToRead} min de leitura
        </S.PostDate>
        <S.PostTitle>{post.frontmatter.title}</S.PostTitle>
        <S.PostDescription>{post.frontmatter.description}</S.PostDescription>
      </S.PostHeader>
      <S.MainContent>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </S.MainContent>
      <RecommendedPosts previousPost={previous} nextPost={next} />
    </Layout>
  );
};
export default BlogPost;
