// prettier-ignore
import { createStyles, makeStyles } from '@mui/styles';
import { Theme } from '@mui/system';
import * as React from 'react';
import SettingsIcon from '@mui/icons-material/Settings'
import { Section } from '../user/Section';
import { Grid, Paper, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';

interface Props {

}

const initialState = {
  firstname: "",
  lastname: "",
  email: "",
  phonenumber: "",
  country: "",
  city: "",
}

export function VendorAccount(props: Props) {

  const { } = props;
  const classes = useStyles(props);

  const [formData, setFormData] = React.useState(initialState);

  const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;

    setFormData({
      ...formData,
      [name]: value
    })
  }
  const [loading, setLoading] = React.useState(false);
  const [disabled, setDisabled] = React.useState(false);

  const handleSaveChanges = () => {

  }
  return (
    <Section
      title="Account"
      icon={<SettingsIcon fontSize="large" className={classes.headerIcon} />}
    >
      <Grid item xs={12}>
        <Paper>
          <Grid container spacing={4} rowGap={1} style={{ padding: '2rem' }}>

            <Grid item xs={12} md={6}>
              <TextField
                required
                name="firstname"
                onChange={handleInputChange}
                value={formData.firstname}
                fullWidth
                label="Firstname"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required
                name="lastname"
                onChange={handleInputChange}
                value={formData.lastname}
                fullWidth
                label="Lastname"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required
                name="email"
                onChange={handleInputChange}
                value={formData.email}
                fullWidth
                label="Email"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required
                name="phonenumber"
                onChange={handleInputChange}
                value={formData.phonenumber}
                fullWidth
                label="Phonenumber"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required
                name="country"
                onChange={handleInputChange}
                value={formData.country}
                fullWidth
                label="Country"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required
                name="city"
                onChange={handleInputChange}
                value={formData.city}
                fullWidth
                label="City"
              />
            </Grid>
            <Grid item xs={12} sm={5} md={3} xl={2}>
              <LoadingButton
                loadingIndicator={"saving ..."}
                onClick={handleSaveChanges}
                loading={loading}
                size="large"
                variant="contained"
                type="submit"
                style={style.submitBtn}
                disabled={disabled}
                fullWidth
              >
                Save Changes
              </LoadingButton>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Section>
  );
}

const style = {
  submitBtn: {
    backgroundColor: 'rgb(210, 63, 87)',
    marginTop: '2rem'
  } as React.CSSProperties,
}

const useStyles = makeStyles((theme: Theme) => createStyles({

  root: (props: Props) => ({

  }),
  headerIcon: {
    color: '#d23f57'
  },
}));