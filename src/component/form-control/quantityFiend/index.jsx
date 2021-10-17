import React from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';

import { Box, FormHelperText, IconButton, Typography } from '@mui/material';

import { makeStyles } from '@mui/styles';
import { FormControl, OutlinedInput } from '@mui/material';
import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material';

const useStyles = makeStyles((theme) => ({
  qtyBox: {
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    maxWidth: '200px',
  },
}));

QuantityField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  onChangeRHF: PropTypes.func,
};

function QuantityField({ form = {}, name = '', label = '', disabled = false, onChangeRHF = null }) {
  const classes = useStyles();
  const { errors, setValue } = form;
  const hasError = !!errors[name];
  const handleChange = (value) => {
    if (!onChangeRHF) return;
    onChangeRHF(value);
  };

  return (
    <FormControl error={hasError} variant="outlined" margin="normal" size="small">
      <Controller
        name={name}
        control={form.control}
        render={({ onBlur, value, name, onChange }) => (
          <Box className={classes.qtyBox}>
            <Typography component="span">{label}</Typography>
            <IconButton
              onClick={() =>
                setValue(name, Number.parseInt(value) ? Number.parseInt(value) - 1 : 1)
              }
            >
              <RemoveCircleOutline />
            </IconButton>
            <OutlinedInput
              id={name}
              type="number"
              disabled={disabled}
              onChange={handleChange(value)}
              onBlur={onBlur}
              value={value}
              name={name}
            />
            <IconButton
              onClick={() =>
                setValue(name, Number.parseInt(value) ? Number.parseInt(value) + 1 : 1)
              }
            >
              <AddCircleOutline />
            </IconButton>
          </Box>
        )}
      />
      <FormHelperText>{errors[name]?.message}</FormHelperText>
    </FormControl>
  );
}

export default QuantityField;
