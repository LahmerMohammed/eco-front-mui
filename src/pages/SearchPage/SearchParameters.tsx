import { Checkbox, Divider, FormControlLabel, FormGroup, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, Rating, TextField, Theme, Typography } from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'
import React from 'react'

function SearchParameters() {

  const classes = useStyles();

  const [price, setPrice] = React.useState({ min: 0, max: 500 })

  const handleMinPriceChanged = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setPrice({
      ...price,
      min: evt.target.value as unknown as number
    })
  }

  const handleMaxPriceChanged = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setPrice({
      ...price,
      max: evt.target.value as unknown as number
    })
  }
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <Paper className={classes.paper}>
      <Grid container className={classes.container}>
        <Grid item container flexDirection="column" rowGap=".5rem">
          <Grid item>
            <Typography className={classes.title}>Categories</Typography>
          </Grid>
          <Grid item>
            <Typography className={classes.text}>Eye Makeup Preparations</Typography>
          </Grid>
          <Grid item>
            <Typography className={classes.text}>Eye Makeup Preparations</Typography>
          </Grid>
          <Grid item>
            <Typography className={classes.text}>Preparations</Typography>
          </Grid>
        </Grid>
        <Grid item>
          <Divider variant="middle" />
        </Grid>
        <Grid item container flexDirection="column" rowGap=".5rem">
          <Grid item>
            <Typography className={classes.title}>Price Range</Typography>
          </Grid>
          <Grid item container alignItems="center" gap=".5rem">
            <Grid item xs={5}>
              <TextField
                type="number"
                value={price.min}
                onChange={handleMinPriceChanged}
                size="small"

              />
            </Grid>
            <Grid item>
              <Typography className={classes.text}>-</Typography>
            </Grid>
            <Grid item xs={5}>
              <TextField
                type="number"
                value={price.max}
                onChange={handleMaxPriceChanged}
                size="small"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Divider variant="middle" />
        </Grid>
        <Grid item container flexDirection="column" rowGap=".5rem">
          <Grid item>
            <Typography className={classes.title}>Brands</Typography>
          </Grid>
          <Grid item >
            <FormGroup>
              <FormControlLabel control={<Checkbox />} label="Apple" />
              <FormControlLabel control={<Checkbox />} label="Sumsung" />
              <FormControlLabel control={<Checkbox />} label="Maccs" />
              <FormControlLabel control={<Checkbox />} label="Zaccs" />
              <FormControlLabel control={<Checkbox />} label="Condor" />
              <FormControlLabel control={<Checkbox />} label="Baccs" />
            </FormGroup>
          </Grid>
        </Grid>
        <Grid item>
          <Divider variant="middle" />
        </Grid>
        <Grid item >
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="on Sale" />
            <FormControlLabel control={<Checkbox />} label="In stock" />
            <FormControlLabel control={<Checkbox />} label="Featured" />
          </FormGroup>
        </Grid>
        <Grid item>
          <Divider variant="middle" />
        </Grid>
        <Grid item >
          <FormGroup>
            {
              [5, 4, 3, 2, 1].map((value, index) => {
                return (
                  <FormControlLabel
                    key={index}
                    control={<Checkbox />}
                    label={<Rating value={value} readOnly />} />
                );
              })
            }

          </FormGroup>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default SearchParameters


const useStyles = makeStyles((theme: Theme) => createStyles({
  paper: {
    borderRadius: '10px',
    padding: "1.5rem 2rem",
    width: '100%'

  },
  container: {
    flexDirection: "column",
    rowGap: "2rem",
  },
  title: {
    fontWeight: '700',
    fontSize: '1rem'
  },
  text: {
    color: 'rgb(125, 135, 156)',
    fontSize: '1rem'
  }

}));