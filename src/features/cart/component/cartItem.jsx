import React from 'react';
import PropTypes from 'prop-types';
import { remove } from 'dom-helpers';
import QuantityField from 'component/form-control/quantityFiend';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Typography, Box, Link } from '@mui/material';

CartItem.propTypes = {};

function CartItem({ items, onSubmit, removes }) {
  const { id, product, quantity } = items;
  const schema = yup.object().shape({
    quantity: yup
      .number()
      .required('Please enter quantity!')
      .min(1, 'Please enter smallest equal 1!')
      .typeError('Please enter a number!'),
  });
  const form = useForm({
    defaultValues: {
      quantity: quantity,
    },
    resolver: yupResolver(schema),
  });
  // const thumbnailUrl = product.thumbnail
  //     ? STATIC_HOST + product.thumbnail?.url
  //     : THUMBNAIL_PLACEHOLDER;

  const handleSubmit = (quantity) => {
    if (!onSubmit) return;
    const values = {
      id,
      quantity,
    };
    onSubmit(values);
  };

  const handleChange = (quantity) => {
    handleSubmit(quantity);
  };

  const handleRemoveItem = () => {
    if (!removes) return;
    removes(id);
  };

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      {/* <img src={thumbnailUrl} alt={product.name} className={classes.image}/> */}
      <Box>
        <Typography>{product.name}</Typography>
        <Link component="button" variant="body2" onClick={handleRemoveItem}>
          remove
        </Link>
      </Box>
      <Typography>{product.salePrice}</Typography>
      <Typography>{product.originalPrice}</Typography>
      <Typography>{product.promotionPercent}</Typography>
      <QuantityField form={form} name="quantity" onChangeRHF={handleChange} />
    </form>
  );
}

export default CartItem;
