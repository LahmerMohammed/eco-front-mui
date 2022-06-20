import { Button, Drawer, FormControl, Grid, IconButton, InputLabel, MenuItem, Pagination, Paper, Select, SelectChangeEvent, Typography } from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'
import { Theme } from '@mui/system'
import React from 'react'
import SearchPaper from './SearchPaper';
import { SORT_OPTIONS, VIEW_OPTIONS } from './index'
import ProductList from './ProductList';
import SearchParameters from './SearchParameters';

import WestIcon from '@mui/icons-material/West';
import { vendorService } from '../../services/vendor.service';


// TODO : change default no_pages to 0
function SearchPage() {

  const classes = useStyles();
  const [sortBy, setSortBy] = React.useState<SORT_OPTIONS>(SORT_OPTIONS.RELEVANCE);

  const [productsPerPage, setProductsPerPage] = React.useState(9);
  const [currPage, setCurrPage] = React.useState(1);
  const [numberOfPages, setNumberOfPages] = React.useState(5);
  const [loading, setLoading] = React.useState(false);
  const [productList, setProductList] = React.useState<Array<{image:any,name:string,regular_price:number,sale_price:string,rating:number}>>([]);

  React.useEffect(() => {
    const queryParams = {page: currPage,limit: productsPerPage,offset: 0};

    const getProucts = async () => {

      setLoading(true);
      const data = await vendorService.getProducts(queryParams);
      setLoading(false);
      
      //TODO: Check for erros

      if( data !== undefined)
      {
        setProductList(data.data);
        setNumberOfPages(data.pageCount); 
      }
      
      
    }
    getProucts();

  }, [currPage]);

  const handlePageChange = (evt: React.ChangeEvent<unknown>, page: number) => {
    setCurrPage(page);
  }

  const [view, setView] = React.useState<VIEW_OPTIONS>(VIEW_OPTIONS.ROW);
  const handleViewChanged = (view: VIEW_OPTIONS) => {
    setView(view);
  }
  React.useEffect(() => {
  }, [view]);



  const handleSortBy = (e: SelectChangeEvent) => {
    setSortBy(e.target.value as SORT_OPTIONS);
  }

  const [openDrawer, setOpenDrawer] = React.useState(false);
  const handleOpenDrawer = () => {
    setOpenDrawer(true);
  }

  return (
    <div className={classes.root}>
      <Grid container className={classes.container} >
        <Grid item sx={{ display: { md: 'none' } }}>
          <Drawer
            open={openDrawer}
            onClose={() => setOpenDrawer(false)}
            className={classes.drawer}
          >
            <IconButton
              onClick={() => setOpenDrawer(false)}
              style={{ position: 'relative', right: '120px' }}
            >
              <WestIcon />
            </IconButton>
            <SearchParameters />
          </Drawer>
        </Grid>
        <Grid item >
          <SearchPaper
            view={view}
            handleViewChanged={handleViewChanged}
            sortBy={sortBy}
            handleSortBy={handleSortBy}
            handleOpenDrawer={handleOpenDrawer}
          />

        </Grid>
        <Grid container item rowGap="2rem" gap="2rem">
          <Grid item md={12} lg={2.6} sx={{ display: { xs: 'none', md: 'flex' } }}>
            <SearchParameters />
          </Grid>
          <Grid container item xs={12} md={12} lg={9} flexDirection="column" rowGap="2rem">
            <Grid item>
              <ProductList productList={productList} loading={loading} />
            </Grid>
            <Grid item container justifyContent="flex-end" alignItems="center">
              <Pagination
                count={numberOfPages}
                page={currPage}
                className={classes.paginationColor}
                size="large"
                sx={{display: loading ? 'none' : 'default'}}
                onChange={handlePageChange}
              />
            </Grid>
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
    padding: '2rem',
  },
  container: {
    flexDirection: "column",
    rowGap: "55px",
    maxWidth: '1200px'
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
  drawer: {
    '& .css-4t3x6l-MuiPaper-root-MuiDrawer-paper': {
      width: '320px',
      maxWidth: '400px'
    }
  },
  paginationColor: {
    '& .MuiPaginationItem-root': {
      color: '#D23F57'
    }
  }

}));