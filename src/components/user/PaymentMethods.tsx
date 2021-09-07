// prettier-ignore
import { Payment } from '@mui/icons-material';
import { Grid } from '@mui/material';
import { Theme } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';
import * as React from 'react';
import { PaymentMethode } from './PaymentMethode';
import { Section } from './Section';

interface Props {

}

const examples = [
  {
    image: 'visa.svg',
    name: 'Lahmer Mohammed',
    card_number: '1234 **** **** ****',
    exp_date: '18 / 2022',
    cvc: '18'
  },
  {
    image: 'visa.svg',
    name: 'Lahmer Mohammed',
    card_number: '1234 **** **** ****',
    exp_date: '18 / 2022',
    cvc: '18'
  },
  {
    image: 'visa.svg',
    name: 'Lahmer Mohammed',
    card_number: '1234 **** **** ****',
    exp_date: '18 / 2022',
    cvc: '18'
  },
  {
    image: 'visa.svg',
    name: 'Lahmer Mohammed',
    card_number: '1234 **** **** ****',
    exp_date: '18 / 2022',
    cvc: '18'
  }
]

export function PaymentMethods(props: Props) {

  const { } = props;
  const classes = useStyles(props);

  return (
    <Section
      icon={<Payment fontSize="large" style={style.headerIcon} />}
      title="Payment Methods"
      button="Add new Payment Method"
      style={style.root}
      to="/payment-methods/add"
    >

      {
        examples.map((pmethode, index) => {
          return (
            <Grid item xs={12}>
              <PaymentMethode {...pmethode} />
            </Grid>)
        })
      }

    </Section>
  );
}

const style = {
  root: {
    flexDirection: 'column',
    rowGap: '2rem'
  } as React.CSSProperties,
  paper: {
    padding: '3rem'
  } as React.CSSProperties,
  title: {
    marginLeft: '1.5rem',
    fontWeight: '1000' as string,
    color: '#2b3445'
  } as React.CSSProperties,
  headerIcon: {
    color: '#d23f57'
  } as React.CSSProperties,
  form: {
  } as React.CSSProperties,
  paperWrapper: {
    rowGap: '2rem'
  } as React.CSSProperties,
  input: {

  } as React.CSSProperties,
  submitBtn: {
    backgroundColor: 'rgb(210, 63, 87)',
    marginTop: '2rem'
  } as React.CSSProperties,
}

const useStyles = makeStyles((theme: Theme) => createStyles({

  root: (props: Props) => ({

  }),
}));