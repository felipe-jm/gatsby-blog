import React from 'react';

import getThemeColor from '@/utils/getThemeColor';

import * as S from './styles';

const RecommendedPosts: React.FC<RecommendedPostsProps> = ({
  previousPost,
  nextPost,
}) => (
  <S.RecommendedWrapper>
    {previousPost ? (
      <S.RecommendedLink
        to={previousPost.fields.slug}
        className="previous"
        cover
        direction="left"
        bg={getThemeColor()}
        duraction={0.6}
      >
        {previousPost.frontmatter.title}
      </S.RecommendedLink>
    ) : (
      <div />
    )}

    {nextPost && (
      <S.RecommendedLink
        to={nextPost.fields.slug}
        className="next"
        cover
        direction="right"
        bg={getThemeColor()}
        duraction={0.6}
      >
        {nextPost.frontmatter.title}
      </S.RecommendedLink>
    )}
  </S.RecommendedWrapper>
);

export default RecommendedPosts;
