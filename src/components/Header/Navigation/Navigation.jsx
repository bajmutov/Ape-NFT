import { StyledNav, StyledNavLink } from './Navigation.styled';

const Navigation = () => {
  return (
    <ul>
      <li>
        <a href="#" uk-scroll="true">
          ABOUT
        </a>
      </li>
      <li>
        <a href="#" uk-scroll="true">
          M-MAP
        </a>
      </li>
      <li>
        <a href="#" uk-scroll="true">
          FAQ
        </a>
      </li>
      <li>
        <a href="#" uk-scroll="true">
          ARTS
        </a>
      </li>
      <li>
        <a href="#" uk-scroll="true">
          MINT
        </a>
      </li>
    </ul>
  );
};

export default Navigation;
