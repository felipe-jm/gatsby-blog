import styled from 'styled-components';

import Img from 'gatsby-image';

export const AvatarWrapper = styled(Img)`
  border-radius: 50%;
  margin: auto;
  min-height: 3.75rem;
  width: 3.75rem;

  @media (max-width: 1170px) {
    min-height: 1.875rem;
    width: 1.875rem;
  }
`;
