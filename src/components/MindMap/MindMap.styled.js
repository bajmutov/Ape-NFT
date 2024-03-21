import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

export const CardWrapper = styled.div`
  box-sizing: border-box;
  width: 216px;
  height: 242px;
  /* background-color: var(--dark-text-color); */
  background-color: inherit;
  padding: 24px 12px;
  border-radius: 16px;

  @media screen and (min-width: 768px) {
    width: 284px;
    height: 242px;
  }

  @media screen and (min-width: 1280px) {
    width: 504px;
    height: 480px;
  }
`;

export const StyledSwiperSlide = styled(SwiperSlide)`
  background-color: var(--dark-text-color);
  border-radius: 16px;
`;

export const Headline = styled.h3`
  font-family: var(--heading-font-family);
  text-align: left;
  text-transform: uppercase;
  font-size: 32px;
  line-height: calc(32 / 32);
  /* margin-top: 24px; */

  @media screen and (min-width: 1280px) {
    font-size: 64px;
    line-height: calc(64 / 64);
    /* margin-top: 80px; */
  }
`;

export const CardText = styled.p`
  text-align: left;
  text-transform: uppercase;
  font-size: 12px;
  line-height: calc(14 / 12);
`;

export const StyledSwiper = styled.a`
  background-color: var(--accent-color);
`;
