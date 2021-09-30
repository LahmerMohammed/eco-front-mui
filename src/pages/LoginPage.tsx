import { Backdrop, Box, CircularProgress, Container, Divider, Link, Paper, Theme, Typography } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ActionButton, FacebookButton, GoogleButton } from '../components/form/FormButton';
import { Input } from '../components/form/Input';
import { InputPassword } from '../components/form/InputPassword';
import { ForgetPassword } from '../models/MRegister';
import { userService } from '../services/userService';
import { actionCreators } from '../redux/action-creators/login-actions'
import { bindActionCreators } from 'redux';
import { RootState } from '../redux/reducers';
import { IError } from '../types/index';
import { useHistory } from 'react-router-dom';
import { api } from '../services/base';

interface Props {

}

function ErrorMessage(props: IError) {
  if (!props.message)
    return null;

  return <Typography style={{ color: 'red' }}>{props.message}</Typography>
}

export function LoginPage(props: Props) {


  const error = useSelector((state: RootState) => state.login.error);
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();


  const clearPassword = () => {
    setForm({
      ...form,
      password: "",
    });
  }


  const { loginRequest, loginFailure, loginSuccess } = bindActionCreators(actionCreators, dispatch);


  const [form, setForm] = React.useState({
    username: "",
    password: "",
  });

  const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {

    const { name, value } = evt.target;

    setForm({
      ...form,
      [name]: value
    })
  }


  const handleSubmit = async (evt: React.FormEvent<HTMLInputElement>) => {

    evt.preventDefault();

    loginRequest();
    const res = await userService.login(form);


    if ('error' in res) {

      loginFailure(res);
      clearPassword();

    } else {
      loginSuccess(res.user);

      history.push({
        pathname: '/'
      });
    }

  }

  return (
    <Box className={classes.root} >
      <Paper className={classes.container}>
        <Box className={classes.title}>
          <Typography variant="h4" fontSize="2rem">
            Welcome to Ecommerce
          </Typography>
          <Typography style={{ paddingTop: '1rem', color: 'gray' }}>
            Login with email & password
          </Typography>
        </Box>
        <Box component="form" onSubmit={handleSubmit}>

          <Input
            id="username"
            name="username"
            placeholder="your username ..."
            label="Username"
            type="text"
            value={form.username}
            onChange={handleInputChange}
          />
          <InputPassword
            value={form.password}
            onChange={handleInputChange}
            name="password"
            label="Password"
          />
          <ErrorMessage {...error} />
          <ActionButton
            style={{ backgroundColor: '#d23f57' }}
            type="submit"
          >
            Login
          </ActionButton>
        </Box>
        <Divider
        >
          on
        </Divider>
        <FacebookButton onClick={() => { }} />
        <GoogleButton onClick={() => { }} />
        <Box component="div" className={classes.signup}>
          <p>Don't have an Account?{" "}</p>
          <Link color="#000" href="#">Signup</Link>
        </Box>
        <ForgetPassword />

      </Paper>
    </Box>
  );
}

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f6f9fc',
    width: '100vw',
    height: '100vh'
  },
  container: {
    padding: '2rem',
    borderRadius: '20px !important',
    boxShadow: '0px 8px 45px rgba(3, 0, 71, 0.09)'
  },
  signup: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    marginBottom: '3rem',
  }
}));