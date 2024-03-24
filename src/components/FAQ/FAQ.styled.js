import styled from 'styled-components';

export const FaqList = styled.ul`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;

  @media screen and (min-width: 768px) {
    gap: 18px;
  }

  @media screen and (min-width: 1280px) {
    gap: 24px;
  }
`;

export const FaqListItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  padding: 8px;
  border-radius: 12px;
  width: 100%;

  background-color: ${({ $active }) =>
    $active === 'active' ? 'var(--secondary-background-color)' : 'transparent'};

  &:hover h3,
  &:focus h3 {
    color: var(--accent-color);
  }
  &:hover button,
  &:focus button {
    color: var(--light-text-color);
  }

  h3 {
    color: ${({ $active }) =>
      $active === 'active'
        ? 'var(--accent-color)'
        : 'var( --light-text-color)'};
  }

  @media screen and (min-width: 768px) {
    position: relative;
    justify-content: flex-end;
    gap: 24px;
    padding: 24px;
  }
`;

export const FaqImg = styled.img`
  display: none;

  @media screen and (min-width: 768px) {
    position: absolute;
    left: 20px;
    top: -10px;
    display: ${({ $active }) => ($active === 'active' ? 'block' : 'none')};
    width: 148px;
    height: 183px;
    transform: rotate(-16deg);
  }

  @media screen and (min-width: 1280px) {
    width: 248px;
    height: 282px;
    transform: rotate(-8deg);
`;

export const FaqButton = styled.button`
  height: 20px;
  background: transparent;
  margin-top: 4px;

  color: ${({ $active }) =>
    $active === 'active' ? 'var(--light-text-color)' : 'var(--accent-color)'};

  font-family: var(--cool-font-family);
  font-size: 12px;
  line-height: calc(20 / 12);
  text-wrap: nowrap;
  border: none;

  @media screen and (min-width: 768px) {
    width: 30px;
    height: 27px;
    margin-top: 8px;
    font-size: 16px;
    line-height: calc(27 / 16);
  }

  @media screen and (min-width: 1280px) {
    width: 45px;
    height: 40px;
    margin-top: 12px;
    font-size: 24px;
    line-height: calc(40 / 24);
  }
`;

export const FaqQuestionWrapper = styled.div`
  min-width: 169px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media screen and (min-width: 768px) {
    width: 339px;
  }

  @media screen and (min-width: 1280px) {
    width: 635px;
    gap: 24px;
  }
`;

export const FaqQuestion = styled.h3`
  font-family: var(--heading-font-family);
  color: var(--light-text-color);
  font-size: 20px;
  font-weight: 900;
  line-height: calc(20 / 20);
  text-align: left;
  text-transform: uppercase;
  transition: var(--transition);

  cursor: pointer;
  @media screen and (min-width: 768px) {
    font-size: 32px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 64px;
  }
`;

export const FaqAnsver = styled.p`
  font-size: 12px;
  line-height: calc(14 / 12);
  text-align: left;
  text-transform: uppercase;

  @media screen and (min-width: 1280px) {
    font-size: 16px;
    line-height: calc(19 / 16);
  }
`;
