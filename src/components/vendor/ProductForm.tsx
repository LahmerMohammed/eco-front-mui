// prettier-ignore
import { Category } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import {
  Autocomplete, Divider, FormControl, Grid, InputLabel,
  MenuItem, Paper, Select, SelectChangeEvent, TextField, Typography, Chip, Avatar, Dialog
} from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import { Theme } from '@mui/system';
import * as React from 'react';
import { useDropzone } from 'react-dropzone';
import { useLocation } from 'react-router-dom';
import { isUnionTypeNode } from 'typescript';
import { ProductIcon } from '../../icons/ProductIcon';
import { vendorService } from '../../services/vendor.service';
import { ICreateProductDTO, IProuctDTO } from '../../types/product.create.dto';
import { ProductCategory } from '../../types/ProductCategory';
import { ImageCardList } from '../shared/ImageCard';
import { RedButton, Section } from '../user/Section';


interface Props { }

const initState: IProuctDTO = {
  id: '',
  name: '',
  description: '',
  regular_price: 0,
  sale_price: 0,
  stock: 0,
  category: '',
  tags: [] as Array<string>,
}

export function ProductForm(props: Props) {

  const classes = useStyles(props);

  //const location = useLocation();
  const path = ""/* location.pathname */;

  const product_id = null;
  const [formData, setFormData] = React.useState({ ...initState, id: product_id });
  const [images, setImages] = React.useState([] as Array<File>)
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [disabled, setDisabled] = React.useState(false);
  const [showImage, setShowImage] = React.useState(false);
  const [src, setSrc] = React.useState("");


  const handleSaveChanges = async (evt: React.MouseEvent<HTMLElement>) => {
    evt.preventDefault();
    setLoading(true);
    const data: ICreateProductDTO = { product_dto: formData, images };

    const res = await vendorService.addProduct(data);

    console.log(res);
    setLoading(false);

  }


  const handleSelectChange = (evt: SelectChangeEvent<string>) => {
    setFormData({
      ...formData,
      category: evt.target.value as ProductCategory
    })
  }

  const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;

    setFormData({
      ...formData,
      [name]: value
    });
  }

  const handleTagsInputChange = (evt: React.SyntheticEvent, newValue: Array<string>) => {
    setFormData({
      ...formData,
      tags: [...newValue],
    });
  }

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };


  const onDrop = (acceptedFiles: Array<File>) => {

    handleImageListUpdate(acceptedFiles);

  };

  const handleImageListUpdate = (newImages: Array<File>) => {
    if ((images.length + newImages.length) <= 5) {
      let temp_state = [...images, ...newImages];
      setImages(temp_state);
    }
  }


  const handleImageDelete = (file_name: string) => {
    let temp_state = images.filter((image: File) => {

      return image.name != file_name;
    })

    setImages(temp_state);
  }

  const handleImageOnClick = (src: string) => {
    setSrc(src);
    setShowImage(true);
  }


  const { getRootProps, getInputProps,
    isDragActive } = useDropzone({ maxFiles: 5, onDrop, accept: { 'image/*': [] } });

  return (
    <Section
      title={formData.id ? "Edit Product" : "Add Product"}
      icon={<ProductIcon fontSize="large" style={style.headerIcon} />}
      button="Back To Product List"
      to="/vendor/products"
    >
      <Grid xs={12} item>
        <Paper component="form" elevation={3} className={classes.paper}>
          <Grid container rowGap="3rem" style={{ padding: '0 1rem' }}>
            <Grid item container xs={12} spacing={4}>
              <Grid item xs={12} md={6} className={classes.inputContainer}>
                <TextField
                  name="name"
                  label="Name"
                  placeholder="Name"
                  required
                  onChange={handleInputChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6} className={classes.inputContainer}>
                <FormControl sx={{ width: '100%' }}>
                  <InputLabel id="category">Category</InputLabel>
                  <Select
                    labelId="category"
                    id="category_selecet"
                    value={formData.category}
                    required
                    label="Category"
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    onChange={handleSelectChange}
                    fullWidth
                  >
                    {Object.keys(ProductCategory).map(((category, index) => (
                      <MenuItem key={index} value={category}> {category} </MenuItem>
                    )))}

                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Grid item container {...getRootProps()} xs={12} className={classes.fileUploader}>
              <input {...getInputProps()} />
              <Grid item >
                {
                  <Typography className={classes.text}>
                    {isDragActive ? "Drop the files here ..." : "Drag & drop product image here"}
                  </Typography>
                }
              </Grid>
              <Grid item >
                <Divider className={classes.text}>
                  on
                </Divider>
              </Grid>
              <Grid item >
                <RedButton style={{ width: '190px', minHeight: '50px' }}>
                  Select File
                </RedButton>
              </Grid>
              <Grid item >
                <Typography paragraph style={{ color: '#aab1be' }}>
                  Upload 280*280
                </Typography>
              </Grid>
            </Grid>
            <ImageCardList images={images} onDelete={handleImageDelete} onClick={handleImageOnClick} />
            <Grid item xs={12}>
              <TextField
                fullWidth
                placeholder='Description'
                label='Description'
                name='description'
                multiline
                value={formData.description}
                onChange={handleInputChange}
                required
                rows={6}
              />
            </Grid>
            <Grid item container xs={12} spacing={4}>
              <Grid item xs={12} md={6} >
                <TextField
                  label="Stock"
                  name="stock"
                  value={formData.stock}
                  type="number"
                  inputProps={{ min: 0 }}
                  required
                  fullWidth
                  onChange={handleInputChange}
                  className={classes.stock}
                />
              </Grid>
              <Grid item xs={12} md={6} >
                <Autocomplete
                  multiple
                  id="tags"
                  onChange={handleTagsInputChange}
                  value={formData.tags}
                  options={formData.tags.map((tag) => tag)}
                  freeSolo
                  renderTags={(value: readonly string[], getTagProps) =>
                    value.map((option, index) => (
                      <Chip variant="outlined" label={option} {...getTagProps({ index })} />
                    ))
                  }
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      placeholder="tags"
                      label="Tags"
                      name="tags"
                      required
                      fullWidth
                    />
                  )}
                />

              </Grid>
              <Grid item xs={12} md={6} >
                <TextField
                  label="Regulat Price"
                  name="regular_price"
                  type="number"
                  value={formData.regular_price}
                  inputProps={{ min: 0 }}
                  fullWidth
                  required
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} md={6} >
                <TextField
                  label="Sale Price"
                  name="sale_price"
                  type="number"
                  value={formData.sale_price}
                  inputProps={{ min: 0 }}
                  fullWidth
                  required
                  onChange={handleInputChange}
                />
              </Grid>
            </Grid>
            <Grid item xs={12} md={2}>
              <LoadingButton
                loadingIndicator={"saving ..."}
                onClick={handleSaveChanges}
                loading={loading}
                size="large"
                variant="contained"
                type="submit"
                style={style.submitBtn}
                disabled={disabled}
              >
                Save Changes
              </LoadingButton>
            </Grid>
          </Grid>
        </Paper>
        <Dialog
          open={showImage}
          onClose={() => setShowImage(false)}
          sx={{ zIndex: 4000 }}>
          <img
            src={src}
          />
        </Dialog>
      </Grid >

    </Section >
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
  } as React.CSSProperties,
  submitBtn: {
    backgroundColor: 'rgb(210, 63, 87)',
    marginTop: '2rem',
    whiteSpace: 'nowrap'
  } as React.CSSProperties,
}

const useStyles = makeStyles((theme: Theme) => createStyles({
  header: {
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center !important',
      textAlign: 'center',
      paddingTop: '1rem'
    }
  },
  paper: {
    padding: "2rem",
    rowGap: "2rem",
  },
  inputContainer: {
  },
  fileUploader: {
    textAlign: 'center',
    border: '2px dashed #aab1be',
    alignItems: 'center',
    padding: '3rem 0',
    rowGap: '1rem',
    flexDirection: 'column',
  },
  text: {
    fontSize: '1.3rem',
    color: '#7d879c'
  },
  stock: {}
}));




