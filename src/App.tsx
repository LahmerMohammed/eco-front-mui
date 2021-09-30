// prettier-ignore
import { Theme } from "@mui/material/styles";
import { createStyles, makeStyles } from "@mui/styles";
import * as React from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import { Header } from "./components/Header";
import { NavBar } from "./components/NavBar";
import { TopHeader } from "./components/TopHeader";
import { MRegister } from "./models/MRegister";
import { LoginPage } from "./pages/LoginPage";
import { ConfirmEmailPage } from "./pages/ConfirmEmailPage";
import { HomePage } from "./pages/HomePage";
import { SignupPage } from "./pages/SignupPage";
import { UserPage } from "./pages/UserPage";
import MainRoutes from "./routes/main/MainRoutes";
import { setToken } from "./services/base";

import { userService } from '../src/services/userService';
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./redux/action-creators/login-actions";




function App() {
	const classes = useStyles();

	const [open, setOpen] = React.useState(false);

	const dispatch = useDispatch();

	const { loadUser } = bindActionCreators(actionCreators, dispatch);

	const onEnter = async () => {

		const token = localStorage.getItem('token');
		const email = localStorage.getItem('email');

		if (token && email) {

			setToken(token);

			const user = await userService.getUserByEmail(email);

			if (user) {
				loadUser(user);
			}
		}
	}

	React.useLayoutEffect(() => {
		onEnter();
	}, []);

	return (
		<>
			<div className={classes.root}>
				<MainRoutes />
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
