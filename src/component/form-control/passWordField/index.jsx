import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
PasswordField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
};

function PasswordField(props) {
  const { form, name, label, disabled } = props;
  const { errors } = form;
  const hasErrors = !!errors[name];
  const [showPassword, setshowPassword] = useState(false);
  const togglePaword = () => {
    setshowPassword((x) => !x);
  };
  console.log(hasErrors);
  return (
    <div>
      {/* <Controller
        name={name}
        control={form.control}
        as={TextField}
        margin="normal"
        variant="outlined"
        fullWidth
        label={label}
        disabled={disabled}
        error={!!hasErrors}
        helperText={errors[name]?.message}
      /> */}
      <FormControl error={hasErrors} fullWidth margin="normal" variant="outlined">
        <InputLabel htmlFor={name}>{label}</InputLabel>
        <Controller
          name={name}
          control={form.control}
          render={({ onChange, onBlur, value, name }) => (
            <OutlinedInput
              id={name}
              type={showPassword ? 'text' : 'password'}
              label={label}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton aria-label="toggle password visibility" onClick={togglePaword}>
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              disabled={disabled}
              error={!!hasErrors}
              value={value}
              name={name}
              onChange={onChange}
              onBlur={onBlur}
            />
          )}
        />
        <FormHelperText>{errors[name]?.message}</FormHelperText>
      </FormControl>
    </div>
  );
}

export default PasswordField;
