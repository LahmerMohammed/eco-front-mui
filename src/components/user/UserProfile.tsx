// prettier-ignore
import { Avatar, Box, Button, Grid, Paper, TextField, Theme, Typography } from '@mui/material';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { createStyles, makeStyles } from '@mui/styles';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import * as React from 'react';
import { Input } from '../form/Input';
import { Section } from './Section';


interface UserProfileProps {
  firstname: string,
  lastname: string,
  email: string,
  phonenumber: string,
  birthdate?: Date,
}

export function UserProfile(props: UserProfileProps) {

  const classes = useStyles();

  const [form, setForm] = React.useState<UserProfileProps>({
    ...props
  });

  const [disabled, setDisabled] = React.useState(true);


  const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;

    setForm({
      ...form,
      [name]: value,
    });

  }

  const handleEditButton = () => {
    setDisabled(false);
  }

  const handleDateChange = (date: Date | null) => {

    if (!date)
      return;

    setForm({
      ...form,
      birthdate: date,
    })
  }

  return (
    <Section

      icon={<AccountCircleRoundedIcon fontSize="large" style={style.headerIcon} />}
      title="My Profile"
      button="Edit Profile"
      style={style.paperWrapper}
      onClick={handleEditButton}
    >
      <Paper style={style.paper}>
        <Grid container wrap="wrap" style={style.form} rowGap="3rem">
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              name="firstname"
              label="Firstname"
              value={form.firstname}
              onChange={handleInputChange}
              style={style.input}
              required
              sx={{ mr: { md: '1.5rem' } }}
              disabled={disabled}
            />

          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              name="lastname"
              label="Lastname"
              value={form.lastname}
              onChange={handleInputChange}
              style={style.input}
              required
              sx={{ ml: { md: '1.5rem' } }}
              disabled={disabled}
            />

          </Grid>
          <Grid item xs={12} md={6}>

            <TextField
              fullWidth
              name="email"
              label="Email"
              value={form.email}
              onChange={handleInputChange}
              style={style.input}
              required
              sx={{ mr: { md: '1.5rem' } }}
              disabled={disabled}
            />

          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              name="phonenumber"
              label="Phone Number"
              value={form.phonenumber}
              onChange={handleInputChange}
              style={style.input}
              sx={{ ml: { md: '1.5rem' } }}
              disabled={disabled}

            />

          </Grid>
          <Grid item xs={12} md={6}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="birthdate"
                value={form.birthdate}
                onChange={handleDateChange}
                renderInput={(params) => <TextField fullWidth {...params} name="birthdate" />}
                disabled={disabled}
              />
            </LocalizationProvider>
          </Grid>
        </Grid>

        <Button size="large" variant="contained" type="submit" style={style.submitBtn}>
          Save Changes
        </Button>
      </Paper >

    </Section>
  );
}

const style = {
  root: {
    flexDirection: 'column',
    rowGap: '2rem'
  } as React.CSSProperties,
  paper: {
    padding: '3rem'
  } as React.CSSProperties,
  title: {
    marginLeft: '1.5rem',
    fontWeight: '1000' as string,
    color: '#2b3445'
  } as React.CSSProperties,
  headerIcon: {
    color: '#d23f57'
  } as React.CSSProperties,
  form: {
  } as React.CSSProperties,
  paperWrapper: {
    rowGap: '2rem'
  } as React.CSSProperties,
  input: {

  } as React.CSSProperties,
  submitBtn: {
    backgroundColor: 'rgb(210, 63, 87)',
    marginTop: '2rem'
  } as React.CSSProperties,
}


const useStyles = makeStyles((theme: Theme) => createStyles({
}));
