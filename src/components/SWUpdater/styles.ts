import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  width: 320px;
  right: calc(50vw - 320px / 2);

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 20px 10px;

  color: var(--texts);
  border: 1px solid var(--borders);
  background: var(--mediumBackground);

  animation: moveUp 0.5s ease-in-out both;

  @keyframes moveUp {
    0% {
      bottom: -100vh;
    }
    100% {
      bottom: 60px;
    }
  }
`;

export const IconContainer = styled.div`
  width: 30px;
  height: 30px;
  cursor: pointer;
  color: var(--texts);
  margin-left: 10px;
`;
