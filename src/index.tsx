
import { createTheme } from "@mui/material/styles";
import { ThemeProvider, Theme, StyledEngineProvider } from "@mui/material/styles";
import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";


declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme { }
}


const theme = createTheme({
  typography: {
    fontSize: 15
  }
});


const rootEl = document.getElementById("root");
ReactDOM.render(
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StyledEngineProvider>,
  rootEl);

