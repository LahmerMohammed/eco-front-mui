import { Theme, Paper, Grid, Typography, FormControl, InputLabel, Select, MenuItem, IconButton, SelectChangeEvent } from '@mui/material';
import { makeStyles, createStyles } from '@mui/styles';
import React from 'react'
import ViewComfyIcon from '@mui/icons-material/ViewComfy';
import ViewAgendaSharpIcon from '@mui/icons-material/ViewAgendaSharp';
import { SORT_OPTIONS, VIEW_OPTIONS } from './index'

import EastIcon from '@mui/icons-material/East';
// TODO : add padding to the paper

interface Props {
  sortBy: string;
  handleSortBy: (e: SelectChangeEvent) => void;
  view: VIEW_OPTIONS
  handleViewChanged: (view: VIEW_OPTIONS) => void;
  nb_results?: number;
  search?: string

  handleOpenDrawer: () => void;
}

function SearchPaper(props: Props) {

  const classes = useStyles();

  const [colViewSelected, setColViewSelected] = React.useState<Boolean>(false);
  const [rowViewSelected, setRowViewSelected] = React.useState<Boolean>(true);

  const handleRowViewClick = () => {

    if (!rowViewSelected) {
      setRowViewSelected(true);
      setColViewSelected(false);
      props.handleViewChanged(VIEW_OPTIONS.ROW);
    }
  }

  const handleColViewClick = () => {

    if (!colViewSelected) {
      setColViewSelected(true);
      setRowViewSelected(false);
      props.handleViewChanged(VIEW_OPTIONS.COLUMN);
    }

  }


  return (
    <Paper className={classes.searchPaper} elevation={3} >
      <Grid container rowGap="1rem" className={classes.paperWrapper}>
        <Grid item container xs={12} md={4} xl={3} flexDirection="column">
          <Grid item>
            <Typography fontSize="1.2rem">Searching for “ mobile phone ”</Typography>
          </Grid>
          <Grid item>
            <Typography fontSize="1rem">48 results found</Typography>
          </Grid>
        </Grid>
        <Grid item container xs={12}  md={7} xl={5} justifyContent="flex-start" gap="1rem">
          <Grid item container className={classes.sortElement} xs={12} md={6} gap=".5rem" alignItems="center">
            <Grid item xs={5} sm={2} md={5} lg={4}>
              <Typography fontSize="1.1rem">Sort by :</Typography>
            </Grid>
            <Grid item xs={6} sm={5} md={6} lg={6} xl={7}>
              <FormControl fullWidth>
                <Select
                  id="sort-select"
                  value={props.sortBy}
                  onChange={props.handleSortBy}
                  size="small"
                >
                  {
                    Object.values(SORT_OPTIONS).map((key, index) => {
                      return (
                        <MenuItem key={index} value={key}>{key}</MenuItem>
                      );
                    })
                  }
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid item container justifyContent="flex-start" alignItems="center" xs={12} md={5}>
            <Grid item lg={5} > <Typography fontSize="1.1rem">View by :</Typography></Grid>
            <Grid item lg={2} >
              <IconButton onClick={handleRowViewClick}>
                <ViewComfyIcon fontSize="medium" color={rowViewSelected ? "error" : undefined} />
              </IconButton>
            </Grid>
            <Grid item lg={2}>
              <IconButton onClick={handleColViewClick} >
                <ViewAgendaSharpIcon fontSize="medium" color={colViewSelected ? "error" : undefined} />
              </IconButton>
            </Grid>
            <Grid item lg={2} sx={{ display: { md: 'none' } }}>
              <IconButton onClick={props.handleOpenDrawer} >
                <EastIcon fontSize="medium" />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>

      </Grid>
    </Paper >
  )
}

export default SearchPaper;

const useStyles = makeStyles((theme: Theme) => createStyles({

  searchPaper: {
    display: 'flex',
    padding: '0.5rem 1.25rem',
    borderRadius: "10px",
  },
  paperContainer: {
    justifyContent: "space-between",
    alignItems: "center"
  },
  paperWrapper: {
    margin: '0.5rem 0',
    justifyContent: 'space-between'
  },
  sortElement: {
    [theme.breakpoints.up('md')]: {
      justifyContent: 'flex-end'
    },
    justifyContent: "flex-start"
  }

}));