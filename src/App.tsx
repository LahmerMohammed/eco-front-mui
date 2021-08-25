// prettier-ignore
import { Theme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/styles";
import * as React from "react";
import { Router } from "react-router-dom";
import { RouterSwitch } from 'react-typesafe-routes';
import { router } from "./Router";



function App() {
	const classes = useStyles();

	return (
			<div >
					Hello!
			</div>
	);
}


const useStyles = makeStyles(() => {
	root: {}
})

export default App;
