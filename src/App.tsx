import React from "react";
import styled, { ThemeProvider } from "styled-components";

import theme from "./theme/theme";

const App: React.FunctionComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>Hello Rachael</Container>
    </ThemeProvider>
  );
};

const Container = styled.div(
  ({ theme }) => `
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.base};
  color: ${theme.colors.primary};
`
);

export default App;
