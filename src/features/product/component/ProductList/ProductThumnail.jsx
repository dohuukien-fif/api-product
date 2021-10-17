import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import { STACTIC_HOST, THUMNAIL_PLACEHOLDER } from 'contains';

ProductThumnail.propTypes = {};

function ProductThumnail({ product }) {
  const thumnaiUrl = product.thumbnail
    ? `${STACTIC_HOST}${product.thumbnail?.url}`
    : THUMNAIL_PLACEHOLDER;
  return (
    <Box>
      <img src={thumnaiUrl} alt={product.name} width="100%" />
    </Box>
  );
}

export default ProductThumnail;
