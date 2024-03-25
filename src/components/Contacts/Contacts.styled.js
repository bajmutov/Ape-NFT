import styled from 'styled-components';

export const Section = styled.section`
  padding-bottom: 60px;

  @media screen and (min-width: 768px) {
    padding-bottom: 80px;
  }

  @media screen and (min-width: 1280px) {
    padding-bottom: 120px;
  }
`;

export const Wrapper = styled.div`
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    width: 397px;
  }

  @media screen and (min-width: 1280px) {
    width: 581px;
  }
`;

export const Heading = styled.h2`
  font-family: var(--heading-font-family);
  text-align: center;
  text-transform: uppercase;
  font-size: 44px;
  line-height: calc(40 / 44);
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    font-size: 80px;
    line-height: calc(80 / 80);
    margin-bottom: 40px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 160px;
    line-height: calc(160 / 160);
    margin-bottom: 80px;
  }
`;

export const Text = styled.p`
  text-align: center;
  text-transform: uppercase;
  font-size: 16px;
  line-height: calc(19 / 16);
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 24px;
    line-height: calc(29 / 24);
    margin-bottom: 40px;
  }
`;

export const SvgButton = styled.button`
  display: block;
  margin: 0 auto;
  margin-bottom: 16px;
  background-color: transparent;
  border: none;
  width: 36px;
  height: 36px;

  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 40px;
  }
`;
