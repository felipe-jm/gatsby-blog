import styled from 'styled-components';
import AnyLink from 'gatsby-plugin-transition-link/AniLink';

interface PostItemTagProps {
  background: string;
}

export const PostItemLink = styled(AnyLink)`
  color: var(--texts);
  display: flex;
  text-decoration: none;

  body#grid & {
    background-color: var(--background);
  }

  &:hover {
    color: var(--highlight);
  }
`;

export const PostItemWrapper = styled.section`
  align-items: center;
  border-bottom: 1px solid var(--borders);
  display: flex;
  padding: 2rem 3rem;
  width: 100%;

  body#grid & {
    border: none;
    padding: 2rem 1rem;
    flex-direction: column;
    justify-content: center;
  }

  @media (max-width: 1170px) {
    align-items: flex-start;
    flex-direction: column;
    padding: 2rem 1rem;
  }
`;

export const PostItemTag = styled.div<PostItemTagProps>`
  align-items: center;
  background: ${({ background }) => background || 'var(--highlight)'};
  border-radius: 50%;
  color: var(--postColor);
  display: flex;
  font-size: 1.3rem;
  font-weight: 700;
  justify-content: center;
  min-height: 90px;
  min-width: 90px;
  text-transform: uppercase;

  body#grid & {
    margin-bottom: 1.5rem;
  }

  @media (max-width: 1170px) {
    border-radius: 0;
    font-size: 1rem;
    min-height: auto;
    min-width: auto;
    padding: 0.2rem 0.5rem;
    margin-bottom: 0.7rem;
  }
`;

export const PostItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;

  body#grid & {
    line-height: 1.1;
    margin: 0.8rem 0;
  }

  @media (max-width: 1170px) {
    margin: 0;
  }
`;

export const PostItemDate = styled.time`
  font-size: 0.9rem;
`;

export const PostItemTitle = styled.h1`
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0.2rem 0 0.5rem;

  body#grid & {
    line-height: 1.1;
    margin: 0.8rem 0;
  }
`;

export const PostItemDescription = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.2;
`;
