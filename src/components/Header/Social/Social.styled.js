import styled from 'styled-components';
import { ReactComponent as DiscordIcon } from '../../../img/discord.svg';
import { ReactComponent as ShipIcon } from '../../../img/ship.svg';
import { ReactComponent as TwitterIcon } from '../../../img/twitter.svg';

export const StyledLogoLink = styled.a`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Discord = styled(DiscordIcon)`
  height: 24px;
  width: 24px;
  fill: var(--dark-text-color);
  transition: var(--transition);

  &:hover,
  &:focus {
    fill: var(--hover-color);
  }
`;

export const Ship = styled(ShipIcon)`
  height: 24px;
  width: 24px;
  fill: var(--dark-text-color);
  transition: var(--transition);

  &:hover,
  &:focus {
    fill: var(--hover-color);
  }
`;
export const Twitter = styled(TwitterIcon)`
  height: 24px;
  width: 24px;
  fill: var(--dark-text-color);
  transition: var(--transition);

  &:hover,
  &:focus {
    fill: var(--hover-color);
  }
`;
