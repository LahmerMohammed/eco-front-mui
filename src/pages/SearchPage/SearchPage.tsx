import { Button, FormControl, Grid, IconButton, InputLabel, MenuItem, Paper, Select, SelectChangeEvent, Typography } from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'
import { Theme } from '@mui/system'
import React from 'react'
import SearchPaper from './SearchPaper';
import { SORT_OPTIONS, VIEW_OPTIONS } from './index'
import ProductList from './ProductList';
import SearchParameters from './SearchParameters';



function SearchPage() {

  const classes = useStyles();
  const [sortBy, setSortBy] = React.useState<SORT_OPTIONS>(SORT_OPTIONS.RELEVANCE);


  const [view, setView] = React.useState<VIEW_OPTIONS>(VIEW_OPTIONS.ROW);
  const handleViewChanged = (view: VIEW_OPTIONS) => {
    setView(view);
  }
  React.useEffect(() => {
    console.log("view changed to ", view);
  }, [view]);



  const handleSortBy = (e: SelectChangeEvent) => {
    setSortBy(e.target.value as SORT_OPTIONS);
  }

  return (
    <div className={classes.root}>
      <Grid container className={classes.container}>
        <Grid item >
          <SearchPaper
            view={view}
            handleViewChanged={handleViewChanged}
            sortBy={sortBy}
            handleSortBy={handleSortBy} />
        </Grid>
        <Grid container item style={{ paddingRight: '1rem' }}>
          <Grid item xs={3}>
            <SearchParameters />
          </Grid>
          <Grid item xs={9}>
            <ProductList />
          </Grid>

        </Grid>
      </Grid>
    </div>
  )
}

export default SearchPage


const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    padding: '0.5rem 1.25rem'
  },
  container: {
    flexDirection: "column",
    rowGap: "2rem"
  },
  searchPaper: {
    display: 'flex',
    padding: '0.5rem 1.25rem'
  },
  inline: {
    display: "inline-block",
    verticalAlign: "middle",
  },
  paperContainer: {
    justifyContent: "space-between",
    alignItems: "center"
  },

}));