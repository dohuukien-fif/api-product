import React from 'react';
import PropTypes from 'prop-types';
import { Paper } from '@mui/material';
import DOMPurify from 'dompurify';
productDescription.propTypes = {
  product: PropTypes.object,
};

function productDescription({ product = {} }) {
  const safeDescription = DOMPurify.sanitize(product.description);
  return (
    <Paper elevation={0} styles={{ padding: '15px' }}>
      <div dangerouslySetInnerHTML={{ __html: safeDescription }}></div>
    </Paper>
  );
}

export default productDescription;
