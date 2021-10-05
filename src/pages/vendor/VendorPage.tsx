


// prettier-ignore
import { Box, Grid, Theme } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import { createStyled } from '@mui/system';
import * as React from 'react';
import { VendorMenu } from '../../components/vendor/VendorMenu';
import VendorRoutes from '../../routes/vendor/VendorRoutes';

interface Props {

}

export function VendorPage(props: Props) {

  const { } = props;
  const classes = useStyles();

  return (
    <Box style={style.root}>
      <Grid container className={classes.container}>
        <Grid item container md={12} xl={3} justifyContent="flex-start" >
          <Grid item xs={12}>
            <VendorMenu />
          </Grid>
        </Grid>
        <Grid item xs={12} lg={12} xl={9} sx={{ pl: '1rem' }}>
          <VendorRoutes />
        </Grid>
      </Grid>
    </Box>
  );
}

const style = {
  paper: {
    color: '#959dae',
    display: 'flex',
    flexDirection: 'column',
  } as React.CSSProperties,
  section: {
    flexDirection: 'column',
    rowGap: '0.5rem'

  } as React.CSSProperties,
  root: {
    backgroundColor: 'inherit',
    display: 'flex',
    justifyContent: 'center'
  } as React.CSSProperties,
}

const useStyles = makeStyles((theme: Theme) => createStyles({

  container: {
    padding: '5rem',
    rowGap: '2rem',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      padding: '2rem'
    }
  }
}));