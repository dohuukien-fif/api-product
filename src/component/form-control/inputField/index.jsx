import React from 'react';
import PropTypes from 'prop-types';

import { Controller } from 'react-hook-form';
import { TextField } from '@mui/material';

InputField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool,
};

function InputField(props) {
  const { form, name, label, disabled } = props;
  const { errors } = form;
  const hasError = errors[name];

  return (
    <Controller
      name={name}
      control={form.control}
      render={({ onChange, onBlur, value, name }) => (
        <TextField
          margin="normal"
          variant="outlined"
          fullWidth
          label={label}
          disabled={disabled}
          error={Boolean(hasError)}
          helperText={errors[name]?.message}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          name={name}
        />
      )}
    >
      <TextField fullWidth />
    </Controller>
  );
}

export default InputField;
