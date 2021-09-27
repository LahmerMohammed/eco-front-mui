// prettier-ignore
import { Avatar, Box, Button, Grid, Paper, TextField, Theme, Typography } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import * as React from 'react';
import { Input } from '../form/Input';
import { Section } from './Section';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useRouteMatch } from 'react-router';



export function NewAddress() {

  const classes = useStyles();

  const [form, setForm] = React.useState({
    name: "",
    address: "",
    phonenumber: ""
  });


  const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;

    setForm({
      ...form,
      [name]: value,
    });

  }

  const handleBackButton = () => { }

  const { url } = useRouteMatch();

  console.log("url" + url);

  return (
    <Section

      icon={<LocationOnIcon fontSize="large" style={style.headerIcon} />}
      title="Add New Address"
      button="Back to Address"
      style={style.paperWrapper}
      onClick={handleBackButton}
      to="/user/address"
    >
      <Paper style={style.paper}>
        <Grid container wrap="wrap" style={style.form} rowGap="3rem">
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              name="name"
              label="Name"
              value={form.name}
              onChange={handleInputChange}
              style={style.input}
              required
              sx={{ mr: { md: '1.5rem' } }}
            />

          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              name="address"
              label="Address Line"
              value={form.address}
              onChange={handleInputChange}
              style={style.input}
              required
              sx={{ ml: { md: '1.5rem' } }}
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
              required
              sx={{ mr: { md: '1.5rem' } }}
            />
          </Grid>
        </Grid>

        <Button
          size="large"
          variant="contained"
          type="submit"
          style={style.submitBtn}>
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
