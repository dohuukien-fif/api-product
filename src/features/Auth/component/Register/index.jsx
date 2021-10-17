import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RegisterForm from './../RegisterForm/index';
import { useDispatch } from 'react-redux';
import { register } from './../../userSlice/userSlice';
import { unwrap } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';
Register.propTypes = {
  closeDialog: PropTypes.func,
};

function Register(props) {
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const hanledoSubmit = async (values) => {
    try {
      //set userName = email
      values.username = values.email;

      const action = register(values);
      const user = await dispatch(action).unwrap();

      //close Dialog
      const { closeDialog } = props;
      if (closeDialog) {
        closeDialog();
      }
      enqueueSnackbar('Register success', { variant: 'success' });
    } catch (error) {
      enqueueSnackbar(error.message, { variant: 'error' });
      console.log('esss', error);
    }
  };

  return (
    <div>
      <RegisterForm onSubmit={hanledoSubmit} />
    </div>
  );
}

export default Register;
