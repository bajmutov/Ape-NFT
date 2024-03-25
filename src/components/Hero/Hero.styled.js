import styled from 'styled-components';

export const HeroSection = styled.section`
  /* position: relative; */
  /* max-width: 1280px; */
  /* width: 100%; */
  /* min-height: 542px; */
  /* margin: 0 auto; */
  /* display: flex;
  flex-direction: column;
  align-items: center; */
  /* margin: 0 auto; */
  background-color: var(--accent-color);
  border-radius: 12px;
  padding: 36px 0px 19px;

  @media screen and (max-width: 480px) {
    /* width: 100%; */
  }

  @media screen and (min-width: 768px) {
    /* height: 736px; */
    padding: 124px 0px 35px;
  }

  @media screen and (min-width: 1280px) {
    /* margin-top: 16px; */
    /* height: 677px; */
    padding: 197px 0px 81px;
  }
`;

export const HeroContainer = styled.div`
  position: relative;
  /* width: 100%; */
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

export const HeroQuestion = styled.p`
  font-family: var(--cool-font-family);
  color: var(--dark-text-color);
  font-size: 16px;
  line-height: calc(27 / 16);
  margin-bottom: 6px;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: calc(33 / 20);
    text-align: left;
  }

  @media screen and (min-width: 1280px) {
    font-size: 24px;
    line-height: calc(40 / 24);
  }
`;

export const HeroTitle = styled.h1`
  font-family: var(--heading-font-family);
  color: var(--dark-text-color);
  font-size: 44px;
  line-height: calc(44 / 44);
  margin-bottom: 8px;
  text-align: center;
  /* text-wrap: nowrap;
  white-space: nowrap; */
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    font-size: 92px;
    margin-bottom: 16px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 164px;
    margin-bottom: 30px;
  }
`;

export const HeroPicture = styled.picture`
  margin-top: 6px;
  margin-bottom: -4px;
  img {
    margin: 0 auto;
    display: block;
  }

  @media screen and (min-width: 768px) {
    margin-top: 0px;
    margin-bottom: 0px;
    position: absolute;
    bottom: -35px;
    left: 206px;
    margin-bottom: 0;
  }

  @media screen and (min-width: 1280px) {
    left: 50%;
    transform: translateX(-55%);
    /* left: 445px; */
    bottom: -81px;
  }
`;

export const HeroButton = styled.a`
  font-family: var(--heading-font-family);
  /* width: 100%; */
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 10px 70px 12px;
  border-radius: 8px;
  backdrop-filter: blur(12px);
  background: rgba(30, 30, 30, 0.1);
  font-size: 16px;
  line-height: calc(19 / 16);
  margin-bottom: 12px;
  transition: all var(--transition);
  color: var(--light-text-color);

  &:hover,
  &:focus {
    color: var(--dark-text-color);
  }

  @media screen and (min-width: 768px) {
    /* width: 190px; */
    padding: 10px 61px 12px;
    margin-bottom: 0;
    color: var(--dark-text-color);

    &:hover,
    &:focus {
      color: var(--light-text-color);
    }
  }

  @media screen and (min-width: 1280px) {
    /* width: 338px; */
    font-size: 28px;
    line-height: calc(34 / 28);
    padding: 16px 109.5px 20px;
  }
`;

export const HeroDescription = styled.p`
  color: var(--dark-text-color);
  font-size: 12px;
  line-height: calc(14 / 12);
  text-align: center;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    text-align: justify;
    text-indent: 80px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 16px;
    line-height: calc(19 / 16);
    text-indent: 60px;
  }
`;

export const TextWrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
  @media screen and (min-width: 1280px) {
    margin-left: 120px;
  }
`;

export const DeckWrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    width: 190px;
    gap: 16px;
    flex-direction: column-reverse;
  }
  @media screen and (min-width: 1280px) {
    width: 338px;
    gap: 28px;
  }
`;
