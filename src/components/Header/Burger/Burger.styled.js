import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const NavMenu = styled.nav`
  display: flex;
  color: ${({ $scroll }) =>
    $scroll === 'true' ? 'var(--light-text-color)' : 'var(--dark-text-color)'};

  a {
    svg {
      fill: ${({ $scroll }) =>
        $scroll === 'true'
          ? 'var(--light-text-color)'
          : 'var(--dark-text-color)'};
    }

    &:hover svg,
    &:focus svg {
      fill: ${({ $scroll }) =>
        $scroll === 'true'
          ? 'var(--accent-color)'
          : 'var( --light-text-color)'};
    }
  }

  a,
  button {
    &:hover,
    &:focus {
      color: ${({ $scroll }) =>
        $scroll === 'true'
          ? 'var(--accent-color)'
          : 'var( --light-text-color)'};
    }
  }

  li {
    background-color: ${({ $scroll }) =>
      $scroll === 'true' ? 'var(--blur-color)' : 'var( --burger-color)'};
  }
`;

export const MenuList = styled.ul`
  pointer-events: auto;
  display: flex;
  flex-direction: column;
  gap: 8px;
  > li:first-child {
    border-top-left-radius: ${({ $isOpen }) =>
      $isOpen === 'open' ? '0' : '8px'};
    border-bottom-left-radius: ${({ $isOpen }) =>
      $isOpen === 'open' ? '0' : '8px'};
  }
  @media screen and (min-width: 1280px) {
    gap: 16px;
    > li:first-child {
      border-top-left-radius: ${({ $isOpen }) =>
        $isOpen === 'open' ? '0' : '12px'};
      border-bottom-left-radius: ${({ $isOpen }) =>
        $isOpen === 'open' ? '0' : '12px'};
    }
  }
`;

export const MenuItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border-radius: 8px;

  cursor: pointer;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px;
    svg {
      width: 16px;
      height: 16px;

      transition: fill var(--transition);
    }
  }
  @media screen and (min-width: 1280px) {
    width: 80px;
    height: 80px;
    border-radius: 12px;
    a {
      padding: 28px;
      svg {
        width: 24px;
        height: 24px;
      }
    }
  }
`;

export const MenuBtn = styled.button`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 48px;
    border-radius: 8px;
    background-color: transparent;
    border: none;
    color: inherit;
    font-family: var(--text-font-family);
    font-size: 12px;
    line-height: calc(14 / 12);
    backdrop-filter: blur(12px);
    cursor: pointer;
    transition: all var(--transition);
    &:hover,
    &:focus {
      color: inherit;
      text-decoration: underline;
    }
  }

  @media screen and (min-width: 1280px) {
    font-size: 16px;
    line-height: calc(19 / 16);
    border-radius: 12px;
  }
`;

export const BurgerList = styled.ul`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    transition: all var(--transition);
    li:first-child {
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
    }
    opacity: ${({ $isOpen }) => ($isOpen === 'open' ? '1' : '0')};
    animation: ${({ $isOpen }) => ($isOpen === 'open' ? fadeIn : fadeOut)} 0.5s
      ease forwards;
    visibility: ${({ $isOpen }) => ($isOpen === 'open' ? 'visible' : 'hidden')};
  }
`;

export const BurgerItem = styled.li`
  pointer-events: auto;
  width: 48px;
  height: 48px;
  backdrop-filter: blur(12px);
  cursor: pointer;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: var(--text-font-family);
    font-size: 12px;
    line-height: calc(14 / 12);
    transition: var(--transition);
    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
  @media screen and (min-width: 1280px) {
    width: 80px;
    height: 80px;
    a {
      width: 80px;
      height: 80px;
      font-size: 16px;
      line-height: calc(19 / 16);
    }
  }
`;
