// prettier-ignore
import { Theme } from "@material-ui/core/styles";
import { createStyles, makeStyles } from "@material-ui/styles";
import * as React from "react";
import { Router } from "react-router-dom";
import { RouterSwitch } from 'react-typesafe-routes';
import { HomePage } from "./pages/HomePage";
import { router } from "./Router";

function App() {
	const classes = useStyles();

	return (
			<div className={classes.root}>
				<HomePage/>
			</div>
	);
}


const useStyles = makeStyles((theme: Theme) => createStyles({
	root: {
		display: 'flex',
		justifyContent: 'center',
		maxWidth: '1990px'
	}
}));

export default App;
