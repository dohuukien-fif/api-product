import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Typography, Box } from '@mui/material';
import categoriesApi from 'api/categoriesApi';
import { makeStyles } from '@material-ui/styles';

FilterByCatorogy.propTypes = {
  onChange: PropTypes.func,
};

const useStyles = makeStyles({
  root: {
    padding: '16px',
    display: 'block',
  },
  activeCategory: {
    color: 'green',
  },
  sex: {
    color: 'red',
  },
  menu: {
    padding: 0,
    margin: 0,
    listStyleType: 'none',
    '& >li': {
      marginTop: '16px',
      '&:hover': {
        color: 'blue',
        cursor: 'pointer',
      },
    },
  },
});
function FilterByCatorogy({ onChange }) {
  const [categoryList, setcategoryList] = useState([]);
  const [actives, setactive] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        const res = await categoriesApi.getAll();
        setcategoryList(
          res.map((item) => ({
            id: item.id,
            name: item.name,
          }))
        );
      } catch (error) {}
    })();
  }, []);
  const handlecategoryClick = (category) => {
    if (onChange) onChange(category);
    setactive((prev) => !prev);
  };
  const classes = useStyles();
  return (
    <div>
      <Box className={classes.root}>
        <Typography variant="subtitle2">DANH MỤC SẢN PHẨM</Typography>
        <ul className={classes.menu}>
          {categoryList.map((category) => (
            <li
              key={category.id}
              name="category.name"
              onClick={() => handlecategoryClick(category.name)}
            >
              <Typography variant="body2">{category.name}</Typography>
            </li>
          ))}
        </ul>
      </Box>
    </div>
  );
}

export default FilterByCatorogy;
