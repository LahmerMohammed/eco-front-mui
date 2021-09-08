import { Backdrop, Box, CircularProgress, Container, Divider, Link, Paper, Theme, Typography } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import * as React from 'react';
import { ActionButton, FacebookButton, GoogleButton } from '../components/form/FormButton';
import { Input } from '../components/form/Input';
import { InputPassword } from '../components/form/InputPassword';
import { ForgetPassword } from '../models/MRegister';
import { userService } from '../services/userService';

interface Props {

}

export function LoginPage(props: Props) {

  const { } = props;

  const classes = useStyles();


  const [form, setForm] = React.useState({
    email: "",
    password: "",
  });

  const [open, setOpen] = React.useState(false);

  const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {

    const { name, value } = evt.target;

    setForm({
      ...form,
      [name]: value
    })
  }

  const handleClose = async () => {

    const response = await userService.login(form);
    console.log(response);
    setOpen(false);

  }

  const handleLogin = () => {
    setOpen(true);
    console.log(" logging ...");
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
        <Box component="form">

          <Input
            name="Email"
            type={"email"}
            placeholder="example@gmail.com"
            label="Email"
            value={form.email}
            onChange={handleInputChange}
          />
          <InputPassword
            value={form.password}
            onChange={handleInputChange}
          />
          <ActionButton
            style={{ backgroundColor: '#d23f57' }}
            onClick={handleLogin}
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