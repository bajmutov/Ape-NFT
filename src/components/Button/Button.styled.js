import styled from 'styled-components';

export const StyledButton = styled.button`
  color: var(--light-text-color);
  font-size: 16px;
  line-height: calc(19 / 16);
  font-weight: 600;
  border: none;
  border-radius: 12px;
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
