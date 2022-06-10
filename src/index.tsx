
import { createTheme } from "@mui/material/styles";
import { ThemeProvider, Theme, StyledEngineProvider } from "@mui/material/styles";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { store } from "./redux/store/store";

declare module '@mui/styles/defaultTheme' {
  interface DefaultTheme extends Theme { }
}


const theme = createTheme({
  typography: {
    fontSize: 13
  }
});


const rootEl = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Router>
          <App />
        </Router>
      </ThemeProvider>
    </StyledEngineProvider>
  </Provider>,
  rootEl);

