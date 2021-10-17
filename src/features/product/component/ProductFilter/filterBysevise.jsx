import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { TextField, Typography, Button, Box, Checkbox, FormControlLabel } from '@mui/material';
import { makeStyles } from '@material-ui/styles';

FilterBysevic.propTypes = {
  onChange: PropTypes.func,
  filter: PropTypes.object,
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
function FilterBysevic({ onChange, filter }) {
  const [values, setvalues] = useState({
    isPromotion: Boolean(filter.isPromotion),
    isFreeShip: Boolean(filter.isFreeShip),
  });
  const handleChange = (e) => {
    const { name, checked } = e.target;
    console.log(name, checked);
    setvalues((prevChange) => ({
      ...prevChange,
      [name]: checked,
    }));
  };
  const handleSubmitPrice = () => {
    console.log(values);
    if (onChange) {
      onChange(values);
    }
  };
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography>
        <h3>Chọn khoảng giá</h3>
      </Typography>
      <ul>
        {['isPromotion', 'isFreeShip'].map((sevice) => (
          <li key={sevice}>
            <FormControlLabel
              label="Parent"
              control={<Checkbox checked={values[sevice]} onChange={handleChange} />}
            />
          </li>
        ))}
      </ul>
    </Box>
  );
}

export default FilterBysevic;
