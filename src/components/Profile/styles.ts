import styled from 'styled-components';
import AnyLink from 'gatsby-plugin-transition-link/AniLink';

interface ProfileWrapperProps {
  isMobileHeader: boolean;
}

export const ProfileWrapper = styled.section<ProfileWrapperProps>`
  display: ${({ isMobileHeader }) => (isMobileHeader ? 'none' : 'flex')};
  color: var(--texts);
  flex-direction: column;

  @media (max-width: 1170px) {
    flex-direction: row;
    justify-content: space-between;
    display: ${({ isMobileHeader }) => (isMobileHeader ? 'flex' : 'none')};
    background: var(--mediumBackground);
    border-bottom: 1px solid var(--borders);
    padding: 1rem;
    width: 100vw;
  }
`;

export const ProfileLink = styled(AnyLink)`
  color: var(--texts);
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: var(--highlight);
  }

  @media (max-width: 1170px) {
    display: flex;
    align-items: center;
  }
`;

export const ProfileAuthor = styled.section`
  font-size: 1.6rem;
  margin: 0.5rem auto 1.5rem;

  @media (max-width: 1170px) {
    font-size: 1.2rem;
    margin: 0 0 0 10px;
  }
`;

export const ProfilePosition = styled.section`
  display: block;
  font-size: 1.2rem;
  font-weight: 300;

  @media (max-width: 1170px) {
    font-size: 0.8rem;
    margin-top: 0.2rem;
  }
`;

export const ProfileDescription = styled.section`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.4;

  @media (max-width: 1170px) {
    display: none;
  }
`;

export const MobileNav = styled.div`
  display: none;

  @media (max-width: 1170px) {
    display: block;
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
