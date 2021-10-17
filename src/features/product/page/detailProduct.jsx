import React from 'react';
import PropTypes from 'prop-types';

import { Box, Container, Grid, LinearProgress, Paper } from '@mui/material';
import { makeStyles } from '@material-ui/styles';
import ProductThumnail from '../component/ProductList/ProductThumnail';
import { useRouteMatch, Switch, Route, useHistory } from 'react-router-dom';
import useDetailProduct from './../component/hooks/useDetailProduct';
import DetailPrpductInfo from '../component/ProductList/DetailPrpductInfo';
import AddTocartForm from '../component/ProductList/AddTocartForm';
import ProductMenu from '../component/ProductMenu/ProductMenu';
import ProductDescription from './../component/ProductMenu/productDescription';
import ProductAddtional from './../component/ProductMenu/ProductAddtionnal';
import ProductReview from './../component/ProductMenu/ProductReview';
import { useDispatch } from 'react-redux';
import { addTocart } from './../../cart/cartSlice';
DetailProduct.propTypes = {};
const useStyles = makeStyles({
  root: {
    paddingBottom: '20px',
  },
  left: {
    width: '400px',
    padding: '20px',
    borderRight: '1px solid gray',
  },
  right: {
    flex: '1 1 0',
    borderRight: '1px solid gray',
  },
  pagination: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    marginTop: '20px',
    paddingBottom: '20px',
  },
  loadding: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
  },
});
function DetailProduct(props) {

  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  //get param from useRoutermatch
  const {
    params: { productId },
    url,
  } = useRouteMatch();
//set custom api for id
  const { product, Loading } = useDetailProduct(productId);
  console.log(product);
  if (Loading) {
    return (
      <Box className={classes.loadding}>
        <LinearProgress />
      </Box>
    );
  }
  // add to cart {id,product ,quantity are from formQuantity} sent redux
  const handleAddtoCart = (formValue) => {
    const action = addTocart({
      id: product.id,
      product,
      quantity: formValue.quantity,
    });
    dispatch(action);
  };
  //

  return (
    <Box>
      <Container>
        <Paper elevation={0}>
          <Grid container>
            <Grid item className={classes.left}>
              <ProductThumnail product={product} />
            </Grid>
            <Grid item className={classes.right}>
              <DetailPrpductInfo product={product} />
              <AddTocartForm onSubmits={handleAddtoCart} />
            </Grid>
          </Grid>
        </Paper>
        <ProductMenu />
        <Switch>
          <Route exact path={url}>
            <ProductDescription product={product} />
          </Route>
          <Route exact path={`${url}/addtionnal`} component={ProductAddtional} />
          <Route exact path={`${url}/review`} component={ProductReview} />
        </Switch>
      </Container>
    </Box>
  );
}

export default DetailProduct;
