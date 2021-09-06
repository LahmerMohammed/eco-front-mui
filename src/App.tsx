// prettier-ignore
import { Theme } from "@mui/material/styles";
import { createStyles, makeStyles } from "@mui/styles";
import * as React from "react";
import { Router } from "react-router-dom";
import { RouterSwitch } from 'react-typesafe-routes';
import { LoginPage } from "./pages";
import { HomePage } from "./pages/HomePage";
import { SignupPage } from "./pages/SignupPage";
import { UserPage } from "./pages/UserPage";
import { router } from "./Router";

function App() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<UserPage />
		</div>
	);
}


const useStyles = makeStyles((theme: Theme) => createStyles({
	root: {
		display: 'flex',
		justifyContent: 'center',
		maxWidth: '1990px',
		backgroundColor: '#f6f9fc',
	}
}));

export default App;
