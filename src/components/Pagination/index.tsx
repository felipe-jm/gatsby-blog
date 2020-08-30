import AnyLink from 'gatsby-plugin-transition-link/AniLink';
import React from 'react';

import getThemeColor from '@/utils/getThemeColor';

import * as S from './styles';

interface PaginationProps {
  isFirst: boolean;
  isLast: boolean;
  currentPage: number;
  numPages: number;
  prevPage?: string;
  nextPage?: string;
}

const Pagination: React.FC<PaginationProps> = ({
  isFirst,
  isLast,
  currentPage,
  numPages,
  prevPage,
  nextPage,
}) => (
  <S.PaginationWrapper>
    {!isFirst && (
      <AnyLink
        to={prevPage}
        cover
        direction="left"
        bg={getThemeColor()}
        duraction={0.6}
      >
        ← página anterior
      </AnyLink>
    )}
    <p>
      {currentPage} de {numPages}
    </p>
    {!isLast && (
      <AnyLink
        to={nextPage}
        cover
        direction="right"
        bg={getThemeColor()}
        duraction={0.6}
      >
        próxima página →
      </AnyLink>
    )}
  </S.PaginationWrapper>
);

export default Pagination;
