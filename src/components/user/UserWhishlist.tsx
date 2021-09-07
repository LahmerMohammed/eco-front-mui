// prettier-ignore
import { Theme } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import * as React from 'react';

interface Props {

}

export function UserWhishlist(props: Props) {

  const { } = props;
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <div />
    </div>
  );
}

const useStyles = makeStyles((theme: Theme) => createStyles({

  root: (props: Props) => ({

  }),
}));