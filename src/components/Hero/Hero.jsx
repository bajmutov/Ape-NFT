import ApeMobile from '../../img/hero-mobile.png';
import ApeTablet from '../../img/hero-ape-tablet.png';
import ApeDesk from '../../img/hero-ape-desk.png';

import {
  DeckWrapper,
  HeroButton,
  HeroContainer,
  HeroDescription,
  HeroPicture,
  HeroQuestion,
  HeroSection,
  HeroTitle,
  TextWrapper,
} from './Hero.styled';

const Hero = () => {
  return (
    <HeroSection id="hero">
      <HeroContainer>
        <HeroQuestion>diD yOu seE iT ?</HeroQuestion>
        <HeroTitle>
          <span>yacht</span> <span>apes</span>
        </HeroTitle>
        <TextWrapper>
          <HeroQuestion>Apes aRe eveRywhere</HeroQuestion>
          <HeroPicture>
            <source
              media="(min-width: 1280px)"
              srcSet={`
          ${ApeDesk} 1x
   
        `}
              width="463"
              height="612"
            />
            <source
              media="(min-width: 768px)"
              srcSet={`
          ${ApeTablet} 1x
        
        `}
              width="283"
              height="386"
            />
            <source
              media="(max-width: 767px)"
              srcSet={`
          ${ApeMobile} 1x
          `}
            />
            <img src={ApeDesk} alt="Cool Ape" />
          </HeroPicture>
          <DeckWrapper>
            <HeroButton href="#mint">MEET APES</HeroButton>
            <HeroDescription>
              Yacht Ape is a collection of unique digital apes that you can own
              in NFT format
            </HeroDescription>
          </DeckWrapper>
        </TextWrapper>
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero;
