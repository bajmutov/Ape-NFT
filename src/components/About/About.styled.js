import styled from 'styled-components';

export const AboutSection = styled.section`
  padding-bottom: 112px;
  padding-top: 60px;
  /* margin: 0 auto; */

  @media screen and (min-width: 768px) {
    padding-bottom: 132px;
    padding-top: 80px;
  }

  @media screen and (min-width: 1280px) {
    padding-bottom: 206px;
    padding-top: 120px;
  }
`;

export const AboutWrapper = styled.div`
  /* width: 100%; */
  /* display: flex;
  flex-direction: column;
  align-items: center; */
  color: var(--main-font-color);
  position: relative;
  /* padding: 0px 64px 0px; */

  @media screen and (min-width: 768px) {
    /* padding: 0px 72px 0px; */
  }
  @media screen and (min-width: 1280px) {
    /* padding: 0px 84px 0px 78px; */
  }
`;

export const TitleWrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    gap: 48px;
    margin-bottom: 88px;
  }

  @media screen and (min-width: 1280px) {
    gap: 85px;
    margin-bottom: 56px;
  }
`;

export const AboutTitle = styled.h2`
  font-family: var(--heading-font-family);
  width: 221px;
  font-size: 40px;
  line-height: 1;
  text-align: left;
  text-transform: uppercase;
  margin-bottom: 16px;

  span {
    color: var(--accent-color);
  }

  @media screen and (min-width: 768px) {
    min-width: 269px;
    margin-bottom: 0;
    flex-direction: column;
    /* flex: 1; */
    font-size: 56px;
    line-height: 1;

    br {
      display: none;
    }
  }

  @media screen and (min-width: 1280px) {
    width: 538px;
    font-size: 115px;
    line-height: 1;
  }
`;

export const AboutText = styled.p`
  width: 216px;
  font-size: 16px;
  line-height: calc(19 / 16);
  text-align: right;
  text-transform: uppercase;
  margin-bottom: 36px;
  text-indent: 136px;
  br {
    display: none;
  }

  @media screen and (min-width: 768px) {
    min-width: 275px;
    text-indent: 0;
    margin-top: 11px;
    margin-bottom: 0;
    br {
      display: block;
    }
  }
  @media screen and (min-width: 1280px) {
    width: 409px;
    font-size: 24px;
    line-height: calc(29 / 24);
    margin-top: 24px;
  }
`;

export const DownWrapper = styled.div`
  /* margin-top: 36px; */
  @media screen and (min-width: 768px) {
    display: flex;
    /* position: relative; */
    gap: 10px;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;

  p {
    font-size: 12px;
    line-height: calc(14 / 12);
    text-align: center;
    text-transform: uppercase;
  }

  svg {
    width: 15px;
    height: 15px;
  }

  @media screen and (min-width: 768px) {
    width: 269px;
    gap: 24px;
    margin-bottom: 36px;
    p {
      font-size: 16px;
      line-height: calc(19 / 16);
    }
  }

  @media screen and (min-width: 1280px) {
    width: 427px;
    gap: 36px;
    margin-bottom: 40px;
    p {
      font-size: 24px;
      line-height: calc(29 / 24);
    }
    svg {
      width: 24px;
      height: 24px;
    }
  }
`;

export const AboutImage = styled.picture`
  img {
    display: block;
    margin: 0 auto;
  }

  @media screen and (min-width: 768px) {
    position: absolute;
    right: 0;
    bottom: 0;
    img {
      display: block;
      margin: 0 auto;
    }
  }
`;
