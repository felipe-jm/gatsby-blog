import styled from 'styled-components';
import Img from 'gatsby-image';

export const Container = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'San Francisco',
    'Helvetica Neue', Helvetica, Ubuntu, Roboto, Noto, 'Segoe UI', Arial,
    sans-serif;

  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #121212;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    a {
      color: #fff;
      text-decoration: none;
      transition: color 0.5s;

      &:hover {
        color: #45b786;
      }
    }
  }
`;

export const ImageWrapper = styled(Img)`
  min-height: 500px;
  width: 500px;

  @media (max-width: 1170px) {
    min-height: 300px;
    width: 300px;
  }
`;
