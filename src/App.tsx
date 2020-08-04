import React from "react";
import styled, { ThemeProvider } from "styled-components";

import theme from "./theme/theme";
import Demo from "./components/Demo";

const App: React.FunctionComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        Hello Rachael
        <Demo />
      </Container>
    </ThemeProvider>
  );
};

const Container = styled.div(
  ({ theme }) => `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.base};
  color: ${theme.colors.primary};
`
);

export default App;
