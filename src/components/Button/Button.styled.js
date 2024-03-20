import styled from 'styled-components';

export const StyledButton = styled.button`
  color: var(--light-text-color);
  min-width: 48px;
  height: 48px;
  font-size: 12px;
  line-height: calc(14 / 12);
  font-weight: 600;
  border: none;
  border-radius: 8px;
  padding: ${({ $pady, $padx }) => `${$pady}px ${$padx}px`};
  fill: ${({ fill }) => fill};
  background-color: var(--accent-color);
  transition: var(--transition);

  &:hover,
  &:focus {
    background-color: var(--hover-color);
    fill: var(--hover-color);
  }
`;
