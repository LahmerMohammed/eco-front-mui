// prettier-ignore
import { Button, Grid, Paper, Theme, Typography } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { ActionButton } from '../components/shared/FormButton';
import { userService } from '../services/userService';
import { ResendConfirmEmailDto } from '../types'

interface Props {
  user_email: string;
}




/**
 * TODO : add update email 
 */

interface ILocationState {
  email: string;
}




export function ConfirmEmailPage() {

  const classes = useStyles();

  const [email, setEmail] = React.useState("");

  const location: any = useLocation();

  /* React.useEffect(() => {

    const state = location.state;
    const email = state.email;
    setEmail(email);

  }, [location]); */


  const handleRensedConfirmation = () => {

    const data: ResendConfirmEmailDto = {
      email: email
    }
    userService.resendConfirmationEmail(data);

  }

  return (
    <div className={classes.root}>
      <Grid container className={classes.content} >
        <Grid container item xs={12} justifyContent="center" alignItems="flex-start" sx={{ mt: '5rem' }}>
          <Paper className={classes.paper} sx={{ pt: '3rem', pb: '3rem' }}>
            <Typography variant="h3">
              LoGo
            </Typography>

            <Typography fontSize="2.5rem" fontWeight={600} textAlign="center">
              Verify your email address
            </Typography>

            <Typography paragraph textAlign="center" sx={{ pl: '2rem', pr: '2rem' }}>
              We've sent to your email a <b>confirmation link</b>.
              Please confirm your email. Once It's done you will be able to start shopping & selling .
            </Typography>

            <Typography>
              Your email : <b>{email}</b>
            </Typography>

            <ActionButton
              style={{ width: '50%' }}
              onClick={handleRensedConfirmation}>
              Resend Confirmation
            </ActionButton>
          </Paper>
        </Grid>
      </Grid>
    </div >
  );
}

const useStyles = makeStyles((theme: Theme) => createStyles({

  root: (/* props: Props */) => ({
    height: 'inherit'
  }),
  content: {
    height: 'inherit'
  },
  paper: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    rowGap: '2rem',
    maxWidth: '600px',
  }
}));