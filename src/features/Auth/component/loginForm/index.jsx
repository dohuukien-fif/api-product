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

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
};

function LoginForm(props) {
  const classes = useStyles();
  const { onSubmit } = props;
  const schema = yup.object().shape({
    identifier: yup.string().required('please enter your Email').email('please enter Email'),
    password: yup.string().required('please enter your Password'),
  });
  const form = useForm({
    defaultValues: {
      identifier: '',
      password: '',
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
        Sign in
      </Typography>

      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <Inputfield name="identifier" label="Identifier" form={form} />
        <PasswordField name="password" label="Password" form={form} />

        <Button
          variant="contained"
          color="primary"
          fullWidth
          type="submit"
          className={classes.submit}
          disabled={isSubmitting}
        >
          sign in
        </Button>
      </form>
    </div>
  );
}

export default LoginForm;
