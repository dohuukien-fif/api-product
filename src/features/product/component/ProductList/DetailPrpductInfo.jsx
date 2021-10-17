import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';

import { makeStyles } from '@mui/styles';
import { createTheme } from '@mui/material/styles';
import { formatPrice } from 'utils';
DetailPrpductInfo.propTypes = {};
const theme = createTheme();
const useStyles = makeStyles((theme) => ({
  root: {
    borderBottom: '1px solid gray',
    marginTop: '20px',
    textAlign: 'left',
  },
  description: {
    padding: '20px',
  },
  priceBox: {
    padding: '20px',
    backgroundColor: 'grey',
    display: 'flex',
    gap: '0 30px',
  },
  saleprice: {
    fontSize: '17px',

    fontWeight: 'bold',
  },
  origin: {
    textDecoration: 'line-through',
    display: 'flex',
    alignItems: 'flex-end',
  },
  promotion: {
    display: 'flex',
    alignItems: 'flex-end',
  },
}));

function DetailPrpductInfo({ product = {} }) {
  const { name, salePrice, shortDescription, originalPrice, promotionPercent } = product;
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography component="h1" variant="h4">
        {name}
      </Typography>
      <Typography variant="body2" className={classes.description}>
        {shortDescription}
      </Typography>
      <Box className={classes.priceBox}>
        <Box componetn="span" className={classes.saleprice}>
          {formatPrice(salePrice)}
        </Box>
        {promotionPercent > 0 && (
          <>
            <Box componetn="span" className={classes.origin}>
              {formatPrice(originalPrice)}
            </Box>
            <Box componetn="span" className={classes.promotion}>
              {` -${promotionPercent} %`}
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
}

export default DetailPrpductInfo;
