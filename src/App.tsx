// prettier-ignore
import { Theme } from "@mui/material/styles";
import { createStyles, makeStyles } from "@mui/styles";
import * as React from "react";
import { Switch, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { NavBar } from "./components/NavBar";
import { TopHeader } from "./components/TopHeader";
import { MRegister } from "./models/MRegister";
import { LoginPage } from "./pages";
import { ConfirmEmailPage } from "./pages/ConfirmEmailPage";
import { HomePage } from "./pages/HomePage";
import { SignupPage } from "./pages/SignupPage";
import { UserPage } from "./pages/UserPage";

function App() {
	const classes = useStyles();

	const [open, setOpen] = React.useState(false);

	return (
		<>
			<div className={classes.root}>
				{/* <TopHeader />
			<Header setOpen={setOpen} />
			<NavBar />
			<MRegister open={open} setOpen={setOpen} /> */}
				<Switch>
					<Route exact path="/confirm-email" component={ConfirmEmailPage} />
					<Route exact path="/login" component={LoginPage} />
					<Route exact path="/signup" component={SignupPage} />
				</Switch>
			</div>
		</>
	);
}


const useStyles = makeStyles((theme: Theme) => createStyles({
	root: {
		maxWidth: '1990px',
		backgroundColor: '#f6f9fc',
	}
}));

export default App;
