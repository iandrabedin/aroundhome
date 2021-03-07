import styled from "styled-components";
import theme from "styles/theme";

interface IButton {
  variant?: string;
}

const Button = styled.button<IButton>`
  padding: 1.25rem;
  border: 1px solid ${theme.colors.primary};
  border-radius: 4px;
  background-color: ${(props) =>
    props.variant === "primary" ? theme.colors.primary : theme.colors.white};
  color: ${(props) =>
    props.variant === "primary" ? theme.colors.white : theme.colors.primary};

  font-weight: bold;
  margin: 0.25rem 0;
  cursor: pointer;

  &:hover,
  &:active {
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
  }

  &:disabled {
    border: 1px solid ${theme.colors.grey};
    background-color: ${theme.colors.grey};
    color: ${theme.colors.white};
    cursor: default;
  }
`;

export { Button };
