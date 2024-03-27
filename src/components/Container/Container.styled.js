import styled from 'styled-components';

export const StyledContainer = styled.div`
  pointer-events: auto;
  padding: 0 72px;
  margin: 0 auto;

  @media screen and (max-width: 360px) {
    padding: 0;
  }

  @media screen and (min-width: 480px) {
    width: 216px;
  }

  @media screen and (min-width: 768px) {
    width: 592px;
  }

  @media screen and (min-width: 1280px) {
    width: 1032px;
  }
`;
