// prettier-ignore
import { Box, Theme, Typography } from '@mui/material';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded'
import { createStyles, makeStyles } from '@mui/styles';
import * as React from 'react';
import { Link } from 'react-router-dom'


interface Props {
  icon: React.ReactNode,
  title: string,
  value?: number,
  to: string,
}

export function UserDashboardItem(props: Props) {

  const { } = props;

  const classes = useStyles();

  return (
    <Link to={props.to} style={style.link} className={classes.link}>
      <Box style={style.parent}>
        <Box style={style.child}>
          {props.icon}
          <Typography paragraph sx={{ mb: 0, fontSize: '18px' }} style={style.title}> {props.title} </Typography>
        </Box>
        <Typography paragraph sx={{ mb: 0, fontSize: '18px' }} > {props.value} </Typography>
      </Box>
    </Link>
  );
}


const style = {
  link: {
    cursor: 'pointer',
    textDecoration: 'none',
    color: '#959dae',
    marginTop: '.5rem',
  } as React.CSSProperties,
  parent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  } as React.CSSProperties,
  child: {
    display: 'flex',
    alignItems: 'center'
  } as React.CSSProperties,
  title: {
    marginLeft: '1rem'
  } as React.CSSProperties
}



const useStyles = makeStyles((theme: Theme) => createStyles({
  link: {
    '&:hover': {
      color: '#d23f57 !important'
    },
    '&:active': {
      color: '#d23f57 !important'
    }
  }
}))