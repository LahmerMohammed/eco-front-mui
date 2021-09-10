import { Box, Divider, Link, Paper, Theme, Typography } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import * as React from 'react';
import { ActionButton, FacebookButton, GoogleButton } from '../components/form/FormButton';
import { Input } from '../components/form/Input';
import { InputPassword } from '../components/form/InputPassword';
import { ForgetPassword } from '../models/MRegister';
import { userService } from '../services/userService';

interface Props {

}


function ErrorMessage(props: { message: string, show: boolean }) {
  if (props.show)
    return null;

  return <Typography style={{ color: 'red' }}>{props.message}</Typography>
}

export function SignupPage(props: Props) {

  const { } = props;
  const classes = useStyles();

  const [error, setError] = React.useState({
    show: false,
    message: '',
  });

  const [form, setForm] = React.useState({
    username: "",
    email: "",
    password: "",
    rePassword: "",
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

    const res = await userService.register(form);

    if ('error' in res) {

      /**
       * job: 
update error state
       */

      console.log(error);
    }

    console.log(res);

  }


  return (
    <Box className={classes.root} >
      <Paper className={classes.container}>
        <Box className={classes.title}>
          <Typography variant="h4" fontSize="2rem">
            Create you account
          </Typography>
          <Typography style={{ paddingTop: '1rem', color: 'gray' }}>
            Please fill all the fields to continue
          </Typography>
        </Box>
        <Box component="form" onSubmit={handleSubmit}>

          <Input
            name="email"
            type="email"
            placeholder="example@gmail.com"
            label="Email"
            value={form.email}
            onChange={handleInputChange}

          />

          <Input
            name="username"
            type="text"
            placeholder="moha014"
            label="Username"
            value={form.username}
            onChange={handleInputChange}

          />

          <InputPassword
            id="password"
            label="password"
            name="password"
            value={form.password}
            onChange={handleInputChange}
          />
          <InputPassword
            id="re-password"
            name="rePassword"
            label="Retype Password"
            value={form.rePassword}
            onChange={handleInputChange}
          />

          <ErrorMessage {...error} />
          <ActionButton
            style={{ backgroundColor: '#d23f57' }}
            type="submit"
          >
            Signup
          </ActionButton>
        </Box>
        <Divider
        >
          on
        </Divider>
        <FacebookButton onClick={() => { }} />
        <GoogleButton onClick={() => { }} />
        <Box component="div" className={classes.signup}>
          <p>Already have an Account?{" "}</p>
          <Link color="#000" href="#">Login</Link>
        </Box>
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