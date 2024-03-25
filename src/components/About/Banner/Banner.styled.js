import styled, { keyframes } from 'styled-components';

const movingLineAnimation = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(-100%));
  }
`;

export const MovingLine = styled.ul`
  display: flex;
  flex-shrink: 0;
  gap: 24px;
  height: 52px;
  overflow: hidden;
  animation: ${movingLineAnimation} 25s linear infinite;

  li {
    font-family: var(--heading-font-family);
    color: var(--light-text-color);
    display: flex;
    gap: 24px;
    align-items: center;

    font-size: 36px;
    line-height: 1;
    text-align: left;
    text-transform: uppercase;

    svg {
      width: 22.5px;
      height: 22.5px;
    }
  }

  @media screen and (min-width: 1280px) {
    gap: 36px;
    height: 86px;

    li {
      gap: 36px;
      font-size: 64px;
    }
  }
`;

export const StyledBanContainer = styled.div`
  position: absolute;
  gap: 24px;
  left: 0;
  width: 100%;
  background-color: var(--accent-color);
  overflow: hidden;
  display: flex;
  user-select: none;

  @media screen and (min-width: 1280px) {
    gap: 36px;
  }
`;
