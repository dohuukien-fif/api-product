import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs } from '@mui/material';

ProductSort.propTypes = {
  curentSort: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

function ProductSort({ curentSort, onChanges }) {
  const haleOchange = (e, newValue) => {
    console.log(newValue);
    if (onChanges) {
      onChanges(newValue);
    }
  };
  return (
    <Tabs value={curentSort} indicatorColor="secondary" textColor="inherit" onChange={haleOchange}>
      <Tab label="giá thấp đến cao" value="salePrice:ASC">
        DSDLAL
      </Tab>
      <Tab label="giá cao đến thâp" value="salePrice:DESC"></Tab>
    </Tabs>
  );
}

export default ProductSort;
