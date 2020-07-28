import styled from 'styled-components';

export const SocialLinksWrapper = styled.nav`
  margin: 2rem auto;
  width: 100%;

  @media (max-width: 1170px) {
    order: 2;
    margin: 0 0 1rem;
  }
`;

export const SocialLinksList = styled.ul`
  align-items: center;
  display: flex;
  justify-content: center;
  list-style: none;

  margin-bottom: 1.5rem;

  @media (max-width: 1170px) {
    justify-content: space-around;
  }

  a {
    color: var(--texts);
    text-decoration: none;
    transition: color 0.5s;

    &:hover {
      color: var(--highlight);
    }
  }
`;

export const IconWrapper = styled.div`
  fill: #bbb;
  width: 30px;
  height: 30px;

  @media (max-width: 1170px) {
    width: 40px;
    height: 40px;
  }
`;
