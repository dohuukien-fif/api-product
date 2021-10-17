import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Box } from '@mui/material';

import Product from './product';
ProductList.propTypes = {
  length: PropTypes.array,
};
ProductList.defaultProps = {
  data: [],
};
function ProductList({ data }) {
  return (
    <Box>
      <Grid container spacing={0}>
        {data.map((product, index) => (
          <Grid key={product.id} item xs={12} sm={6} md={3} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ProductList;
