import styled from 'styled-components';

export const LayoutWrapper = styled.section`
  display: flex;

  @media (max-width: 1170px) {
    flex-direction: column;
  }
`;

export const LayoutMain = styled.main`
  background: var(--background);
  min-height: 100vh;
  padding: 0 3.75rem 0 20rem;
  transition: background, color 0.5s;
  width: 100%;

  body#grid & {
    grid-template-areas: 'posts' 'pagination';
  }

  @media (max-width: 1170px) {
    padding: 4.125rem 0 3rem 0;
  }
`;
