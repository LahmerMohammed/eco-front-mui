
// prettier-ignore
import { createStyles, makeStyles } from '@mui/styles';
import { Theme } from '@mui/system';
import * as React from 'react';
import { CountryItem } from './CountryItem';

interface Props {
  countries: Array<{ image: string, name: string, amount: number }>;
}

export function CountryList(props: Props) {

  const { countries } = props;
  const classes = useStyles(props);

  return (
    <>
      {
        countries.map((country, index) => {
          return (
            <CountryItem {...country} />
          )
        })
      }
    </>
  );
}

const useStyles = makeStyles((theme: Theme) => createStyles({

  root: (props: Props) => ({

  }),
}));