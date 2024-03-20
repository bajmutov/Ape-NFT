import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNav = styled.nav`
  display: flex;
  gap: 16px;
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  gap: 4px;

  color: var(-light-text-color);
  transition: var(--transition);

  &:hover,
  &:focus {
    color: var(--hover-color);
  }

  &.active {
    &::after {
      content: '';
      height: 2px;
      width: 100%;
      background-color: #fff;
      border-radius: 12px;
    }
  }
`;
