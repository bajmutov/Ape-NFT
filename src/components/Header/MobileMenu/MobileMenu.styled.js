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

export const MobileMenuBtn = styled.button`
  display: none;
  @media screen and (max-width: 767px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 48px;
    border-radius: 8px;
    background: transparent;
    border: none;
    color: var(--light-text-color);
    font-family: var(--text-font-family);
    font-size: 12px;
    line-height: calc(14 / 12);
    cursor: pointer;
    transition: all var(--transition);
    &:hover,
    &:focus {
      color: var(--accent-color);
      text-decoration: underline;
    }
  }
`;

export const Backdrop = styled.div`
  display: none;
  @media screen and (max-width: 767px) {
    overflow: auto;
    pointer-events: auto;
    display: block;
    position: fixed;
    z-index: 103;
    left: 0;
    top: -54px;
    width: 100vw;
    padding: 62px 16px 24px;
    background: var(--main-bg-color);
    transition: all var(--transition);
    opacity: ${({ $isOpen }) => ($isOpen === 'open' ? '1' : '0')};
    animation: ${({ $isOpen }) => ($isOpen === 'open' ? fadeIn : fadeOut)} 0.3s
      ease forwards;
    visibility: ${({ $isOpen }) => ($isOpen === 'open' ? 'visible' : 'hidden')};
  }
`;

export const ModalContent = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 328px;
  height: calc(100vh - 54px);
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  a {
    svg {
      transition: fill var(--transition);
      fill: var(--light-text-color);
    }
    &:hover path,
    &:focus {
      fill: var(--accent-color);
    }
  }
`;

export const ModalList = styled.ul`
  position: absolute;
  top: 130px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ModalItem = styled.li`
  color: var(--light-text-color);

  font-size: 24px;
  line-height: 1.2;
  text-align: center;
  transition: color var(--transition);
  &:hover,
  &:focus {
    color: var(--accent-color);
  }
`;

export const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const MenuItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border-radius: 8px;

  background: rgba(255, 255, 255, 0.1);
  cursor: pointer;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 48px;
    svg {
      width: 16px;
      height: 16px;

      &:hover,
      &:focus {
        fill: var(--accent-color);
      }
    }
  }
`;
