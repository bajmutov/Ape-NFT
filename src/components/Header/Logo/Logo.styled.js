import styled from 'styled-components';
import { ReactComponent as Ape } from '../../../img/logo.svg';
import { NavLink } from 'react-router-dom';

export const LogoApe = styled(Ape)`
  height: 32px;
  width: 48px;
  fill: var(--dark-text-color);
  transition: var(--transition);

  &:hover,
  &:focus {
    fill: var(--light-text-color);
  }

  @media screen and (min-width: 1280px) {
    width: 72px;
    height: 50px;
  }
`;

export const StyledLogoLink = styled(NavLink)`
  pointer-events: auto;
  padding: 8px 0;

  @media screen and (min-width: 1280px) {
    padding: 15px 0;
  }
`;
