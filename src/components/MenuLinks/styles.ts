import styled from 'styled-components';
import AnyLink from 'gatsby-plugin-transition-link/AniLink';

export const MenuLinksWrapper = styled.nav`
  @media (max-width: 1170px) {
    margin: auto;
  }
`;

export const MenuLinksList = styled.ul`
  font-size: 1.2rem;
  font-weight: 300;

  @media (max-width: 1170px) {
    font-size: 1.8rem;
  }
`;

export const MenuLinksItem = styled.li`
  padding: 0.5rem 0;

  .active {
    color: var(--highlight);
  }

  @media (max-width: 1170px) {
    padding: 1rem 0;
  }
`;

export const MenuLinksLink = styled(AnyLink)`
  color: var(--texts);
  text-decoration: none;
  transition: color 0.5s;

  a {
    color: var(--texts);
    text-decoration: none;
    transition: color 0.5s;

    &:hover {
      color: var(--highlight);
    }
  }
`;
