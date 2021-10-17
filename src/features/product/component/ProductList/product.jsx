import React from 'react';
import PropTypes from 'prop-types';

import { Skeleton, Box, Typography } from '@mui/material';
import { STACTIC_HOST, THUMNAIL_PLACEHOLDER } from './../../../../contains/commen';
import { useHistory } from 'react-router';
import { formatPrice } from 'utils';

Product.propTypes = {
  product: PropTypes.object,
};

function Product({ product }) {
  const thumnaiUrl = product.thumbnail
    ? `${STACTIC_HOST}${product.thumbnail?.url}`
    : THUMNAIL_PLACEHOLDER;
  //
  const history = useHistory();
  const handleClickDetail = () => {
    history.push(`products/${product.id}`);
  };
  return (
    <div>
      <Box padding={1} onClick={handleClickDetail}>
        <Box padding={1} minHeight="215px">
          <img src={thumnaiUrl} alt={product.name} width="100%" />
        </Box>
        <Typography variant="body2">{product.name}</Typography>
        <Typography variant="body2">
          <Box component="span" fontSize="16px" fontWeight="bold" mr={1}>
            {formatPrice(product.salePrice)}
          </Box>
          {product.promotionPercent > 0 ? ` -${product.promotionPercent}%` : ''}
        </Typography>
        <Typography variant="body2">{product.name}</Typography>
      </Box>
    </div>
  );
}

export default Product;
