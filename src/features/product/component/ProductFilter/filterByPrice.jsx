import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { TextField, Typography, Button, Box } from '@mui/material';
import { makeStyles } from '@material-ui/styles';

FilterByPrice.propTypes = {
  onChange: PropTypes.func,
};
const useStyles = makeStyles({
  root: {
    padding: '16px',
  },
  range: {
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    '& > span': {
      marginLeft: '5px',
      marginRight: '5px',
    },
  },
});
function FilterByPrice({ onChange }) {
  const [values, setvalues] = useState({
    salePrice_gte: 0,
    salePrice_lte: 0,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setvalues((prevChange) => ({
      ...prevChange,
      [name]: value,
    }));
  };
  const handleSubmitPrice = () => {
    console.log(values);
    if (onChange) {
      onChange(values);
    }
    setvalues({
      salePrice_gte: 0,
      salePrice_lte: 0,
    });
  };
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography>
        <h3>Chọn khoảng giá</h3>
        <Box className={classes.range}>
          <TextField name="salePrice_gte" value={values.salePrice_gte} onChange={handleChange} />
          <span> - </span>

          <TextField name="salePrice_lte" value={values.salePrice_lte} onChange={handleChange} />
        </Box>
      </Typography>
      <Button variant="outlined" color="primary" onClick={handleSubmitPrice}>
        Áp dụng
      </Button>
    </Box>
  );
}

export default FilterByPrice;
