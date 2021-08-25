import { makeStyles, Typography } from '@material-ui/core';
import * as React from 'react';

interface Props {

}

export function LoginPage(props: Props) {

const {  } = props;
const classes = useStyles();

return (
<div className={classes.root}>
  <Typography>Login</Typography>
</div>
);
}

const useStyles = makeStyles({

root: {

},
});