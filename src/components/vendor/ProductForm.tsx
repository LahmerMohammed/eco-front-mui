// prettier-ignore
import { Category } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { Divider, FormControl, Grid, InputLabel, MenuItem, Paper, Select, SelectChangeEvent, TextField, Typography } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import { Theme } from '@mui/system';
import * as React from 'react';
import { useDropzone } from 'react-dropzone';
import { useRouteMatch } from 'react-router';
import { ProductIcon } from '../../icons/ProductIcon';
import { ProductCategory } from '../../types/ProductCategory';
import { RedButton, Section } from '../user/Section';


interface Props { }

const initState = {
  id: null,
  name: '',
  category: "",
  file: '',
  description: '',
  stock: '',
  tags: '',
  regular_price: null,
  sale_price: null,

}

export function ProductForm(props: Props) {

  const classes = useStyles(props);
  const { url } = useRouteMatch();
  const product_id = null;
  const [formData, setFormData] = React.useState({ ...initState, id: product_id });
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [disabled, setDisabled] = React.useState(false);

  const handleSaveChanges = () => {

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

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };


  const onDrop = React.useCallback((acceptedFiles: any) => {
    console.log("dropped");
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

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
                    {Object.keys(ProductCategory).map((category => (
                      <MenuItem value={category}> {category} </MenuItem>
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
                  required
                  fullWidth
                  onChange={handleInputChange}
                  className={classes.stock}
                />
              </Grid>
              <Grid item xs={12} md={6} >
                <TextField
                  label="Tags"
                  name="tags"
                  value={formData.tags}
                  required
                  fullWidth
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} md={6} >
                <TextField
                  label="Regulat Price"
                  name="regular_price"
                  type="number"
                  value={formData.regular_price}
                  fullWidth
                  required
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} md={6} >
                <TextField
                  label="Stock"
                  name="sale_price"
                  type="number"
                  value={formData.sale_price}
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
    marginTop: '2rem'
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