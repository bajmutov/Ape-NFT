import styled from 'styled-components';
import { SwiperSlide } from 'swiper/react';

export const CardWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* width: 216px; */
  height: 242px;
  background-color: inherit;
  padding: 24px 12px;
  border-radius: 12px;

  @media screen and (min-width: 768px) {
    padding: 24px;
    border-radius: 16px;
    width: 284px;
    height: 242px;
  }

  @media screen and (min-width: 1280px) {
    width: 504px;
    height: 480px;
  }
`;

//Slider
export const MindMapSliderDiv = styled.div`
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const StyledSwiperSlide = styled(SwiperSlide)`
  background-color: var(--dark-text-color);
  border-radius: 16px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: var(--main-font-color);
  height: 242px;

  @media screen and (min-width: 768px) {
    border-radius: 16px;
  }
  @media screen and (min-width: 1280px) {
    height: 480px;
  }
`;

export const Headline = styled.h3`
  font-family: var(--heading-font-family);
  text-align: left;
  text-transform: uppercase;
  font-weight: 900;
  font-size: 32px;
  line-height: calc(32 / 32);

  @media screen and (min-width: 1280px) {
    font-size: 64px;
    line-height: calc(64 / 64);
  }
`;

export const CardText = styled.p`
  text-align: left;
  text-transform: uppercase;
  font-size: 12px;
  line-height: calc(14 / 12);
  margin-left: auto;
  width: 192px;

  @media screen and (min-width: 768px) {
    width: 128px;
  }
  @media screen and (min-width: 1280px) {
    width: 228px;
    font-size: 24px;
    line-height: 1.2;
  }
`;

export const StyledSwiper = styled.a`
  background-color: var(--accent-color);
  border-radius: 16px;

  svg {
    position: absolute;
    top: 12px;
    right: 12px;
    margin-left: auto;
    width: 48px;
    height: 48px;
    transition: var(--transition);
  }

  &:hover svg,
  &:focus svg {
    top: 0;
    right: 0;
  }

  @media screen and (min-width: 1280px) {
    svg {
      margin-left: auto;
      width: 64px;
      height: 64px;
    }
  }
`;

//Grid
export const GridContainer = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 284px);
    gap: 24px;
  }

  @media screen and (min-width: 1280px) {
    grid-template-columns: repeat(2, 504px);
  }
`;
