// prettier-ignore
import {  Box, Button, Grid, Theme, Typography } from '@mui/material';
import { createStyles , makeStyles} from '@mui/styles';
import * as React from 'react';

interface Props {

}

export const  MainProduct = React.forwardRef((props: Props , ref) => {

  const {  } = props;
  const classes = useStyles();

  return (
    <Box component="div" ref={ref} className={classes.root}>
      <Grid container className={classes.container}>
        <Grid  item container rowGap="1rem" direction="column" xs={12} md={6} className={classes.description}>
          <Typography fontWeight="600" fontSize="60px" lineHeight="1.2"  variant="h1" className={classes.title}>
            50% Off For Your First Shopping
          </Typography>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convalliss.
          </p>
          <Button style={{height:'44px' , backgroundColor: '#d23f57' , borderRadius: '8px'}} size="large" variant="contained">Shop Now</Button>
      </Grid>
        <Grid item container alignItems="center" justifyContent="center" xs={12} md={6}>
          <img className={classes.img} src={`${process.env.PUBLIC_URL}/assets/nike_black.png`}/>
        </Grid>
    </Grid>
    </Box>
);
})

const useStyles = makeStyles((theme: Theme) => createStyles({
  description:{
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    
  },
  root:{
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '2rem'
  },
  container:{
    flexFlow: 'row wrap',
    justifyContent: 'space-between',
  },
  title:{
    [theme.breakpoints.down('lg')]:{
      fontSize: '40px !important'
    }
  },
  img:{
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxHeight: '400px',
    maxWidth: '100%'
  }
}));
