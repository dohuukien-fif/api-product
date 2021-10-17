import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import InputField from 'component/form-control/inputField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { makeStyles } from '@mui/styles';
import { Button } from '@mui/material';
SearchForm.propTypes = {};
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
function SearchForm(props) {
  const { onSubmit } = props;
  const [Search, setSearch] = useState('');
  const TypeInput = useRef(null);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    if (TypeInput.current) {
      clearTimeout(TypeInput.current);
    }
    TypeInput.current = setTimeout(() => {
      const formState = {
        Search: value,
      };
      onSubmit(formState);
    }, 500);
  };

  const handleSubmit = (value) => {};
  return (
    <>
      <form>
        <input value={Search} onChange={handleChange} />
      </form>
    </>
  );
}

export default SearchForm;
