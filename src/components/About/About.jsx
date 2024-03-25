import ApeMobile from 'img/AboutApe-mobile.png';
import ApeTable from 'img/AboutApe-tablet.png';
import ApeDesk from 'img/AboutApe-desk.png';
import { ReactComponent as Cross } from '../../img/cross.svg';
import Banner from './Banner';
import {
  AboutImage,
  AboutSection,
  AboutText,
  AboutTitle,
  AboutWrapper,
  DownWrapper,
  IconWrapper,
  TitleWrapper,
} from './About.styled';

const About = () => {
  return (
    <AboutSection id="about">
      <AboutWrapper>
        <TitleWrapper>
          <AboutTitle>
            a Story that started with
            <span>
              &nbsp; one simple <br />
              ape
            </span>
          </AboutTitle>
          <AboutText>
            WHO GOT FED UP WITH BORING AND HYPOCRITIC COMMONPLACE THIS IS HOW
            THE IDEA OF ESCAPING AND DYNAMIC JOURNEY ON THE <br />
            YACHT
          </AboutText>
        </TitleWrapper>

        <DownWrapper>
          <IconWrapper>
            <Cross />
            <p>
              EACH ARTWORK IN THE COLLECTION TELLS A STORY OF ONE JOURNEY. ARTS
              ARE RANDOMLY GENERATED BY USERS
            </p>
          </IconWrapper>

          <AboutImage>
            <source
              media="(min-width: 1280px)"
              srcSet={` ${ApeDesk} 1x     
        `}
              width="492"
              height="662"
            />
            <source
              media="(min-width: 768px)"
              srcSet={`
          ${ApeTable} 1x
        `}
              width="313"
              height="422"
            />
            <source
              media="(max-width: 767px)"
              srcSet={`
          ${ApeMobile} 1x      
        `}
            />
            <img src={ApeDesk} alt="Monkey in hat and glasses" loading="lazy" />
          </AboutImage>
        </DownWrapper>
      </AboutWrapper>
      <Banner />
    </AboutSection>
  );
};

export default About;
