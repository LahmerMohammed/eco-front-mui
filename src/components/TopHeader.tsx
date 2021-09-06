// prettier-ignore
import { Container, Link, Theme, Typography } from '@mui/material';
import Select from '@mui/material/Select';
import * as React from 'react';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';
import MenuItem from '@mui/material/MenuItem';
import Input from '@mui/material/Input';
import { makeStyles, createStyles } from '@mui/styles';

interface Props {

}

interface SelectProps {
  options: Array<string>
}


const MSelect = (props: SelectProps) => {

  const options = props.options;

  return (
    <Select
      defaultValue={options[0]}
      input={<Input disableUnderline={true} />}
      style={{ color: 'white' }}
      variant="standard">
      {options.map((option) => <MenuItem value={option}>{option}</MenuItem>)}
    </Select>
  );
}



export function TopHeader(props: Props) {

  const lang_options = ['EN', 'AR', 'FR'];
  const currency_options = ['USD', 'DZA', 'EURO'];

  const { } = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <div className={classes.topLeftBar}>
          <div className={classes.group}>
            <LocalPhoneIcon className={classes.item} />
            <Typography>+88012 3456 7894</Typography>
          </div>
          <div className={classes.group}>
            <MailIcon className={classes.item} />
            <Typography className={classes.item}>support@ui-lib.com</Typography>
          </div>
        </div>
        <div className={classes.topRightBar}>
          <Link className={`${classes.group} ${classes.link}`} underline='none' color='white' >Theme FAQ"s</Link>
          <Link className={`${classes.group} ${classes.link}`} underline='none' color='white'>Need Help?</Link>
          <MSelect options={lang_options} />
          <MSelect options={currency_options} />
        </div>
      </Container>
    </div>
  );
}


const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    height: '50px',
    backgroundColor: '#0f3460',
    display: 'flex',
    color: 'white !important',
    justifyContent: 'center'
  },
  container: {
    display: 'flex !important',
    justifyContent: 'space-around',
    [theme.breakpoints.down('lg')]: {
      justifyContent: 'flex-end'
    },
    maxWidth: '1900px',
  },
  topLeftBar: {
    display: 'flex',
    alignItems: 'center',

  },
  topRightBar: {
    display: 'flex',
    alignItems: 'center',
  },
  item: {
    marginRight: '1rem !important',
  },
  link: {
    '&:hover': {
      color: '#D23F57 !important'
    },
    cursor: 'pointer',

  },
  group: {
    display: 'flex',
    marginRight: '2rem !important',
    [theme.breakpoints.down('lg')]: {
      display: 'none'
    },
  }
}));