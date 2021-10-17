import React from 'react';
import PropTypes from 'prop-types';
import Inputfield from '../../../../component/form-control/inputField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Avatar, Button, LockOutlinedIcon, Typography } from '@mui/material';
import { makeStyles, spacing } from '@mui/styles';
import NoAccountsIcon from '@mui/icons-material/NoAccounts';
import PasswordField from 'component/form-control/passWordField';
import { LinearProgress } from '../../../../../node_modules/@mui/material/index';

const useStyles = makeStyles({
  root: {
    paddingTop: '20px',
    position: 'relative',
  },
  avatar: {
    margin: '0 auto',
    background: 'green',
  },
  title: {
    padding: '20px',
    textAlign: 'center',
  },
  submit: {
    padding: '30px',
  },
  progress: {
    position: 'absolute',
    marginTop: '-10px',
    left: '0',
    right: '0',
  },
});

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};

function RegisterForm(props) {
  const classes = useStyles();
  const { onSubmit } = props;
  const schema = yup.object().shape({
    fullName: yup
      .string()
      .required('please enter your full Name')
      .test('should has leasst two word', 'please enter at least two word', (value) => {
        return value.split(' ').length >= 2;
      }),
    email: yup.string().required('please enter your Email').email('please enter Email'),
    password: yup
      .string()
      .required('please enter your Password')
      .min(6, 'please enter at least 6 '),
    retypePassword: yup
      .string()
      .required('please enter retyPassword')
      .oneOf([yup.ref('password')], 'please does not match'),
  });
  const form = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      Password: '',
      retypePassword: '',
    },
    resolver: yupResolver(schema),
  });
  const handleSubmit = async (value) => {
    console.log('kien', value);
    if (onSubmit) {
      await onSubmit(value);
    }
  };
  const { isSubmitting } = form.formState;

  return (
    <div className={classes.root}>
      {isSubmitting && <LinearProgress className={classes.progress} />}
      <Avatar className={classes.avatar}>
        <NoAccountsIcon />
      </Avatar>
      <Typography className={classes.title} component="h3" variant="h5">
        creater An account
      </Typography>

      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <Inputfield name="fullName" label="Full Name" form={form} />
        <Inputfield name="email" label="Email" form={form} />
        <PasswordField name="password" label="Password" form={form} />
        <PasswordField name="retypePassword" label="Retype Password" form={form} />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          type="submit"
          className={classes.submit}
          disabled={isSubmitting}
        >
          Creater ACount
        </Button>
      </form>
    </div>
  );
}

export default RegisterForm;
