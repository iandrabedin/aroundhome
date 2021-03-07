import React from "react";
import { Button as StyledButton } from "./button.style";

interface ButtonProps {
  variant: string;
}

type ButtonType = ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ ...props }: ButtonType) => {
  const { children } = props;

  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
