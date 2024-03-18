import { StyledButton } from './Button.styled';

const Button = ({
  type = 'button',
  pady = 12,
  padx = 50,
  fill,
  onClick,
  disabled,
  children,
}) => {
  return (
    <StyledButton
      type={type}
      $pady={pady}
      $padx={padx}
      disabled={disabled}
      onClick={onClick}
      fill={fill}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
