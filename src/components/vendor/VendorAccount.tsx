// prettier-ignore
import { createStyles, makeStyles } from '@mui/styles';
import { Theme } from '@mui/system';
import * as React from 'react';
import SettingsIcon from '@mui/icons-material/Settings'
import { Section } from '../user/Section';

interface Props {

}

export function VendorAccount(props: Props) {

  const { } = props;
  const classes = useStyles(props);

  return (
    <Section
      title="Account"
      icon={<SettingsIcon fontSize="large" className={classes.headerIcon} />}
    >

    </Section>
  );
}

const useStyles = makeStyles((theme: Theme) => createStyles({

  root: (props: Props) => ({

  }),
  headerIcon: {
    color: '#d23f57'
  },
}));