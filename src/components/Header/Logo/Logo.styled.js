import styled from 'styled-components';
import { ReactComponent as Ape } from '../../../img/logo.svg';

export const LogoApe = styled(Ape)`
  height: 32px;
  width: 48px;
  fill: var(--dark-text-color);
  transition: var(--transition);

  &:hover,
  &:focus {
    fill: var(--accent-color);
  }
`;
