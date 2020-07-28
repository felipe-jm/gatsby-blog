import styled from 'styled-components';
import AnyLink from 'gatsby-plugin-transition-link/AniLink';

export const MenuBarWrapper = styled.aside`
  align-items: center;
  background: var(--mediumBackground);
  border-left: 1px solid var(--borders);
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
  padding: 0.8rem 0;
  position: fixed;
  right: 0;
  width: 3.75rem;
  transition: background 0.5s;

  @media (max-width: 1170px) {
    border: 0;
    border-top: 1px solid var(--borders);
    bottom: -3px;
    flex-direction: row;
    height: auto;
    padding: 0;
    padding-bottom: env(safe-area-inset-bottom);
    position: fixed;
    width: 100%;
  }
`;

export const MenuBarGroup = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1170px) {
    flex-direction: row;
  }
`;

export const MenuBarLink = styled(AnyLink)`
  display: block;

  &.active {
    span {
      color: var(--highlight);
    }
  }
`;

export const MenuBarItem = styled.span`
  color: var(--texts);
  cursor: pointer;
  display: block;
  height: 3.75rem;
  padding: 1.1rem;
  position: relative;
  width: 3.75rem;

  &.light {
    color: #000;
  }

  &.dark {
    color: #d4d400;
  }

  &:hover {
    color: var(--highlight);
  }

  &.display {
    @media (max-width: 1170px) {
      display: none;
    }
  }

  @media (max-width: 1170px) {
    height: 3.2rem;
    padding: 0.9rem;
    position: relative;
    width: 3.2rem;

    &:hover {
      color: var(--highlight);
    }
  }
`;
