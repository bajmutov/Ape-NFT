import styled from 'styled-components';

export const StyledHeader = styled.header`
  width: 100%;

  position: fixed;
  z-index: 99;
  top: 54px;
  left: 50%;
  transform: translateX(-50%);

  @media screen and (min-width: 1280px) {
    top: 16px;
  }
`;

export const StyledHeaderContainer = styled.div`
  display: flex;
  justify-content: ${({ $scroll }) =>
    $scroll === 'true' ? 'flex-end' : ' space-between'};
  align-items: flex-start;
  padding: 8px 16px 0;

  @media screen and (min-width: 768px) {
    padding: 12px 28px 0;
  }
  @media screen and (min-width: 1280px) {
    padding: 24px 112px 0;
  }
`;
