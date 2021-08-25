
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";

const theme = createMuiTheme();


const rootEl = document.getElementById("root");
ReactDOM.render(<ThemeProvider theme={theme}><App /></ThemeProvider>, rootEl);

