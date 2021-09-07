import { Grid, IconButton, Paper, Typography } from '@mui/material';
import { Theme } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import * as React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


interface Props {
  image: string,
  name: string,
  card_number: string,
  exp_date: string,
  cvc: string
}

export function PaymentMethode(props: Props) {

  const { } = props;
  const classes = useStyles(props);

  return (
    <Paper elevation={0} style={style.paper} className={classes.paper}>
      <Grid container alignItems="center">
        <Grid container item md={4} >
          <Grid item xs={2}>
            <Paper>
              <img style={{ maxWidth: '100%' }} src={process.env.PUBLIC_URL + '/assets/' + props.image} />
            </Paper>
          </Grid>
          <Grid item xs={6}
            sx={{
              ml: '1rem'
            }}
          >
            <Typography
              style={{
                fontWeight: 500,
                fontSize: '18px',
              }}

            >{props.name}</Typography>
          </Grid>
        </Grid>
        <Grid item md={3}>
          <Typography fontSize='18px' >{props.card_number}</Typography>
        </Grid>
        <Grid item md={3}>
          <Typography fontSize='18px'>{props.exp_date}</Typography>
        </Grid>
        <Grid item md={2}>
          <IconButton>
            <EditIcon fontSize="large" />
          </IconButton>
          <IconButton>
            <DeleteIcon fontSize="large" />
          </IconButton>
        </Grid>
      </Grid>
    </Paper>
  );
}



const style = {
  paper: {
    display: 'flex',
    backgroundColor: 'white',
    borderRadius: '12px',
    cursor: 'pointer',
    paddingLeft: '2rem',
    paddingRight: '2rem',
    rowGap: '3rem'
  } as React.CSSProperties
}

const useStyles = makeStyles((theme: Theme) => createStyles({

  root: (props: Props) => ({

  }),
  paper: {
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center !important',
      textAlign: 'center',
      paddingTop: '1rem'
    }
  }
}));