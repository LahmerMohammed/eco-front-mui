import { Box, Divider, Link, Paper, Theme, Typography } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ActionButton, FacebookButton, GoogleButton } from '../components/shared/FormButton';
import { Input } from '../components/shared/Input';
import { InputPassword } from '../components/shared/InputPassword';
import { ForgetPassword } from '../models/MRegister';
import { userService } from '../services/userService';
import { actionCreators } from '../redux/action-creators/login-actions'
import { bindActionCreators } from 'redux';
import { RootState } from '../redux/reducers';
import { useNavigate } from 'react-router-dom';
interface Props {

}

function ErrorMessage() {

  const error = useSelector((state: RootState) => {
    return state.login.error;
  })

  if (!error)
    return null;

  return <Typography style={{ color: 'red' }}>{error.message}</Typography>
}

export function LoginPage(props: Props) {


  const error = useSelector((state: RootState) => {
    console.log(state);
    return state.login.error.message;
  });


  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const clearPassword = () => {
    setForm({
      ...form,
      password: "",
    });
  }


  const { loginRequest,
    loginFailure,
    loginSuccess } = bindActionCreators(actionCreators, dispatch);


  const [form, setForm] = React.useState({
    username: "",
    password: "",
  });
  const [disabled, setDisabled] = React.useState(false);

  const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {

    const { name, value } = evt.target;

    setForm({
      ...form,
      [name]: value
    })
  }


  const handleSubmit = async (evt: React.FormEvent<HTMLInputElement>) => {

    evt.preventDefault();

    setDisabled(true);

    loginRequest();

    const res = await userService.login(form);

    setDisabled(false);

    console.log(res);

    if (res.status == 'error') {

      loginFailure(res);
      clearPassword();

    } else {
      loginSuccess(res.user);

      navigate("/");
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
            disabled={disabled}
          >
            Login
          </ActionButton>
        </Box>
        <Divider
        >
          on
        </Divider>
        <FacebookButton disabled={disabled} onClick={() => { }} />
        <GoogleButton disabled={disabled} onClick={() => { }} />
        <Box component="div" className={classes.signup}>
          <p>Don't have an Account?{" "}</p>
          <Link color="#000" href={`${window.location.origin}/signup`}>Signup</Link>
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

