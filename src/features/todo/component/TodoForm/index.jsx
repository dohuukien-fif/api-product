import React from 'react';
import PropTypes from 'prop-types';
import Inputfield from '../../../../component/form-control/inputField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

InputForm.propTypes = {
  onSubmit: PropTypes.func,
};

function InputForm(props) {
  const { onSubmit } = props;
  const schema = yup.object().shape({
    title: yup.string().required('please enter title').min(5, 'sexy'),
  });
  const form = useForm({
    defaultValues: {
      title: '',
    },
    resolver: yupResolver(schema),
  });
  const handleSubmit = (value) => {
    console.log('kien', value.title);
    if (onSubmit) {
      onSubmit(value);
    }
    form.reset();
  };
  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <Inputfield name="title" label="todo" form={form} />
    </form>
  );
}

export default InputForm;
