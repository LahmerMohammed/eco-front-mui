import { Avatar, Box, Button, Grid, Paper, Rating, Theme, Typography } from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles';
import React from 'react'
import { useParams } from 'react-router';


const product = {
  images: ["https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg","https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg","https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg"],
  name: 'Smart Watch black',
  brand: 'Xiaomi',
  rating: {rate: 4.0 , count: 50},
  sale_price: 180,
  sotck: 10,
  created_by: {
    name: 'Mobile Store'
  }
}


interface ImagePaperProps {
  src: string,
  handleSelect: (index: number) => void,
  selected: boolean,
  index: number
}

// TODO fix bg-image is not shown 
function ImagePaper(props: ImagePaperProps) {
  
  const classes = useStyles();
  
  return (
    <Paper 
      className={classes.imagePaper}
      style={{
        border: props.selected ? '1px solid rgb(210, 63, 87)' : 'none'
      }}
      onClick={() => props.handleSelect(props.index)}
    >
      <Avatar
        variant='square'
        src={props.src}
        sx={{}}

      />
    </Paper>
  )
}

function Product() {

  // extract product-id from url
  const {id} = useParams();
  const props = product;

  const [selectedImage,setSelectedImage] = React.useState(0);

  const handleSelectImage = (index: number) => {
    setSelectedImage(index);
  }

  const classes = useStyles();

  return (
        <>
          <Grid container item xs={12} md={5} className={classes.imageWrapper}>
            <Grid item>
              <img src={props.images[selectedImage]} className={classes.mainImage}/>
            </Grid>
            <Grid container item className={classes.imagePaperList}>
              {
                props.images.map((image,index) => {
                  return (
                    <Grid key={index}>
                      <ImagePaper
                        src={image}
                        handleSelect={handleSelectImage}
                        selected={index === selectedImage}
                        index={index}
                        />
                    </Grid>
                  )
                })
              }
            </Grid>
          </Grid>
          <Grid container item xs={12} md={5} className={classes.productDetails}>
            <Grid item container>
              <Typography className={classes.name}>
                {props.name}
              </Typography>
            </Grid>
            <Grid item container>
              <Typography>
                brand: <span style={{fontWeight: '500'}}>Xiaomi</span>
              </Typography>
            </Grid>
            <Grid item container gap='0.25rem'>
              <Typography >
                {`Rated: `}
              </Typography >
              <Rating value={props.rating.rate} />
              <Typography style={{fontWeight: 500}}>
                {` (${props.rating.count})`}
              </Typography>
            </Grid>
            <Grid item container>
              <Typography className={classes.price}>
                {`$${props.sale_price}.00`}
              </Typography>
            </Grid>
            <Grid item container>
              <Button variant='contained' className={classes.addToCartBtn}>
                Add To Card
              </Button>
            </Grid>
            <Grid item container>
              <Typography>
                sold by: <span style={{fontWeight: '500'}}>{props.created_by.name}</span>
              </Typography>
            </Grid>

          </Grid>
        </>
  )
}

export default Product;

const useStyles = makeStyles((theme: Theme) => createStyles({

  mainImage: {
    height: 300,
  },
  imagePaper: {
    width: 64,
    height: 64,
    borderRadius: 10,
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  addToCartBtn: {
    backgroundColor: 'rgb(210, 63, 87)',
    '&:hover':{
      backgroundColor: 'rgb(210, 63, 87)',
    }
  },
  price: {
    fontSize: '2rem',
    color: 'rgb(210, 63, 87)',
    fontWeight: '500'

  },
  name:{
    fontSize: '2rem',
    fontWeight: '500',
    color: '#2B3445',
  },
  imageWrapper:{
    flexDirection: 'column',
    alignItems: 'center',
    rowGap:'3rem',
    paddingTop: '8px'
  },
  productDetails: {
    flexDirection:'column',
    alignItems: 'center',
    rowGap:'1.35rem',
    /* [theme.breakpoints.down('md')]: {
      paddingLeft:'24px'
    } */
  },
  imagePaperList:{
    justifyContent:'center',
    gap:'1rem',
    wrap:'nowrap'
  }

}));