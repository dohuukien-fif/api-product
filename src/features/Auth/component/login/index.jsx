import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { login } from './../../userSlice/userSlice';
import { unwrap } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';
import LoginForm from '../loginForm';
Login.propTypes = {
  closeDialog: PropTypes.func,
};

function Login(props) {
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const hanledoSubmit = async (values) => {
    try {
      //set userName = email

      const action = login(values);
      const user = await dispatch(action).unwrap();

      //close Dialog
      const { closeDialog } = props;
      if (closeDialog) {
        closeDialog();
      }
    } catch (error) {
      enqueueSnackbar(error.message, { variant: 'error' });
      console.log('esss', error);
    }
  };

  return (
    <div>
      <LoginForm onSubmit={hanledoSubmit} />
    </div>
  );
}

export default Login;
