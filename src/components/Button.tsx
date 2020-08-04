import React from "react";
import styled from "styled-components";

type ButtonType = "primary" | "secondary";

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  buttonType: ButtonType;
}

const Button: React.FunctionComponent<Props> = ({
  buttonType,
  children,
  ...buttonProps
}) => {
  return (
    <StyledButton buttonType={buttonType} {...buttonProps}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button<{ buttonType: ButtonType }>(
  ({ theme, buttonType }) => `
  background-color: ${
    buttonType === "primary" ? theme.colors.primary : theme.colors.secondary
  };
  font-size: ${theme.fontSizes.body};
  color:${theme.colors.white};
  border: none;
  height: ${theme.spacings[5]};
  border-radius: 4px;

  &:hover {
    background-color: ${theme.colors.white};
    color: ${
      buttonType === "primary" ? theme.colors.primary : theme.colors.secondary
    };
    box-shadow: 0px 0px 0px 1px inset ${
      buttonType === "primary" ? theme.colors.primary : theme.colors.secondary
    }
  }

  &:focus {
    outline: none;
  }
`
);

export default Button;
