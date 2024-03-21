import styled from 'styled-components';

export const ArtsSection = styled.section`
  padding-bottom: 60px;

  @media screen and (min-width: 768px) {
    padding-bottom: 80px;
  }

  @media screen and (min-width: 1280px) {
    padding-bottom: 120px;
  }

  & img {
    &:hover,
    &:focus {
      transform: scale(1.007);
    }
  }
`;

export const SlideWrapper = styled.div`
  text-align: center;
`;

export const PaginationButton = styled.button`
  font-family: var(--cool-font-family);
  font-size: 24px;
  line-height: calc(30 / 24);
  color: var(--light-text-color);
  margin: 0 auto;
  margin-top: 24px;
  background-color: transparent;
  border: none;
  transition: var(--transition);

  &:hover,
  &:focus {
    transform: scale(1.05);
  }

  &:last-child {
    margin-left: 48px;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 48px;
  }
`;
