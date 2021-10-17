import React from 'react';
import PropTypes from 'prop-types';
import FilterByCtegory from './filterByCatorogy';
import FilterByPrice from './filterByPrice';
import FilterBysevic from './filterBysevise';
FilterProduct.propTypes = {
  filter: PropTypes.object.isRequired,
  onChange: PropTypes.func,
};

function FilterProduct({ filter, onChange }) {
  const handlecategoryChange = (newCategory) => {
    console.log(newCategory);
    if (!onChange) return;
    const newfilter = {
      'category.name': newCategory,
    };
    onChange(newfilter);
  };
  const handleChange = (newPrice) => {
    console.log(typeof newPrice);
    if (!onChange) return;

    onChange(newPrice);
  };

  return (
    <div>
      <FilterByCtegory onChange={handlecategoryChange} />
      <FilterByPrice onChange={handleChange} />
      <FilterBysevic filter={filter} onChange={handleChange} />
    </div>
  );
}

export default FilterProduct;
