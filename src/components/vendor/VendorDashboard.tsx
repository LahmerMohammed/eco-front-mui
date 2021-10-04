// prettier-ignore
import { createStyles, makeStyles } from '@mui/styles';
import { Theme } from '@mui/system';
import * as React from 'react';
import { Section } from '../user/Section';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { VendorCard } from './VendorCard';
import { Grid, Paper, Typography } from '@mui/material';
import { Line } from 'react-chartjs-2';
import { CountryList } from './CountryList';





interface Props {

}

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "June",
    "July", "Aug", "Sept", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar"],
  datasets: [
    {
      label: 'Sales',
      data: [5, 2, 1, 10, 8, 12, 10, 20, 18, 16, 30, 31, 40, 35, 50],
      fill: true,
      backgroundColor: '#f6d8dd',
      borderColor: '#d7566b',
      tension: 0.5,
      pointBackgroundColor: "#d23f57",
      borderWidth: 2,
      pointBorderWidth: 5

    },
  ],
};

const options = {
  scales: {

  }
};

const countries = [
  {
    image: "http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg",
    name: "United State",
    amount: 130,
  },
  {
    image: "http://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg",
    name: "United Kingdom",
    amount: 110,
  },
  {
    image: "http://purecatamphetamine.github.io/country-flag-icons/3x2/CA.svg",
    name: "Canada",
    amount: 100,
  },
  {
    image: "http://purecatamphetamine.github.io/country-flag-icons/3x2/IN.svg",
    name: "India",
    amount: 80,
  },
  {
    image: "http://purecatamphetamine.github.io/country-flag-icons/3x2/JO.svg",
    name: "Jordan",
    amount: 80,
  },
  {
    image: "http://purecatamphetamine.github.io/country-flag-icons/3x2/BR.svg",
    name: "Brazil",
    amount: 70,
  },

]


export function VendorDashboard(props: Props) {

  const { } = props;
  const classes = useStyles();

  return (
    <div style={style.root}>
      <Section
        title="Dashboard"
        icon={<ShoppingBagIcon fontSize="large" style={style.headerIcon} />}
      >
        <Grid item container className={classes.cards}>
          <Grid item xs={12} sm={6} lg={4}>
            <VendorCard
              title="Earnings (before taxes)"
              amount={"$30450.00"}
              description="after associated vendor fees"
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <VendorCard
              title="Your balance"
              amount={"$4000.00"}
              description="Will be processed on Feb 15, 2021"
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <VendorCard
              title="Pending Orders"
              amount="08"
              description="7/3/2020 - 8/1/2020"
            />
          </Grid>
        </Grid>
        <Grid item container xs={12}>
          <Grid item xs={12} lg={8} style={{ padding: '1rem' }}>
            <Paper className={classes.chart}>
              <Line options={options} data={data} />
            </Paper>
          </Grid>
          <Grid item xs={12} lg={4} style={{ padding: '1rem' }}>
            <Paper elevation={2} className={classes.paperCountry}>
              <Typography fontSize="1.5rem" color="#414958">Top Countries</Typography>
              <CountryList countries={countries} />
            </Paper>
          </Grid>
        </Grid>
      </Section>
    </div>
  );
}


const style = {
  root: {
    flexDirection: "column",
    rowGap: "2rem"
  } as React.CSSProperties,
  title: {
    marginLeft: '1.5rem',
    fontWeight: '1000' as string,
    color: '#2b3445'
  } as React.CSSProperties,
  headerIcon: {
    color: '#d23f57'
  } as React.CSSProperties,
  orderList: {
    rowGap: '2rem'
  } as React.CSSProperties,
  header: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '2rem',
    paddingRight: '2rem',
    flexWrap: 'wrap' as string,
  } as React.CSSProperties
}

const useStyles = makeStyles((theme: Theme) => createStyles({
  header: {
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center !important',
      textAlign: 'center',
      paddingTop: '1rem'
    }
  },
  chart: {
    padding: '2rem',
    backgroundColor: 'white',
    borderRadius: '10px',
  },
  cards: {

    [theme.breakpoints.down('sm')]: {
      justifyContent: "center"
    }
  },
  paperCountry: {
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    rowGap: '1.5rem',
    borderRadius: '8px'
  }
}));