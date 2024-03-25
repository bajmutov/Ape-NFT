import styled from 'styled-components';

export const MenuList = styled.ul`
  pointer-events: auto;
  display: flex;

  flex-direction: column;
  gap: 8px;

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
      path {
        transition: fill var(--transition);
      }
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
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border-radius: 8px;
  background: transparent;
  border: none;
  color: inherit;
  list-style: none;

  font-family: var(--text-font-family);
  font-size: 12px;
  line-height: calc(14 / 12);
  cursor: pointer;
  transition: all var(--transition);
  &:hover,
  &:focus {
    color: inherit;
    text-decoration: underline;
  }

  @media screen and (min-width: 1280px) {
    font-size: 16px;
    line-height: calc(19 / 16);
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
    visibility: ${({ $isOpen }) => ($isOpen === 'open' ? 'visible' : 'hidden')};
  }
`;

export const BurgerItem = styled.li`
  pointer-events: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  backdrop-filter: blur(12px);
  cursor: pointer;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 48px;
    border-radius: 8px;
    background: transparent;
    border: none;
    color: inferit;
    font-family: var(--text-font-family);
    font-size: 12px;
    line-height: 1.17;
    cursor: pointer;
    transition: var(--transition);
    &:hover,
    &:focus {
      color: inherit;
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
      line-height: 1.19;
    }
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

    &:hover path,
    &:focus path {
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
      $scroll === 'true'
        ? 'var( --placeholder-color)'
        : 'rgba(30, 30, 30, 0.1)'};
  }
`;
