import styled from 'styled-components';

interface SidebarWrapperProps {
  isMenuOpen: boolean;
}

export const SidebarWrapper = styled.aside<SidebarWrapperProps>`
  align-items: center;
  border-right: 1px solid var(--borders);
  background: var(--mediumBackground);
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: fixed;
  padding: 2rem;
  text-align: center;
  width: 20rem;
  transition: background 0.5s;

  @media (max-width: 1170px) {
    align-items: flex-start;
    border: 0;
    height: calc(100% - 50px);
    padding: 0;
    position: inherit;
    width: 100%;
    transform: ${({ isMenuOpen }) =>
      isMenuOpen ? 'translateX(0)' : 'translateX(-100vw)'};
  }
`;

export const SidebarLinksContainer = styled.section`
  width: 100%;
  height: calc(100% - 70px);
  display: flex;
  flex-direction: column;
`;
