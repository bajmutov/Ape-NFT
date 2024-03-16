import {
  StyledFooter,
  StyledFooterContainer,
  StyledFooterList,
  StyledFooterLink,
  // Twitter,
} from './Footer.styled';

import Icon from 'components/UI/Icon';
import Logo from 'components/UI/Logo';

const Footer = () => {
  return (
    <StyledFooter>
      <StyledFooterContainer>
        <Logo />

        <StyledFooterLink
          href="https://github.com/bajmutov/Rent-Car/"
          target="_blank"
          referrerPolicy="no-referrer"
        >
          Privacy Policy
        </StyledFooterLink>

        <StyledFooterList>
          <li>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer">
              {/* <Twitter /> */}
            </a>
          </li>
          <li>
            <a
              href="https://web.telegram.org/"
              target="_blank"
              rel="noreferrer"
            >
              <Icon name={'telegram'} size={48} />
            </a>
          </li>
        </StyledFooterList>
      </StyledFooterContainer>
    </StyledFooter>
  );
};

export default Footer;
