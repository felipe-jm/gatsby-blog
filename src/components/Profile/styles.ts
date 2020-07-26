import styled from 'styled-components';
import AnyLink from 'gatsby-plugin-transition-link/AniLink';

export const ProfileWrapper = styled.section`
  color: var(--texts);
  display: flex;
  flex-direction: column;
`;

export const ProfileLink = styled(AnyLink)`
  color: var(--texts);
  text-decoration: none;
  transition: color 0.5s;

  @media (max-width: 1170px) {
    display: flex;
    text-align: left;
  }

  &:hover {
    color: var(--highlight);
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
