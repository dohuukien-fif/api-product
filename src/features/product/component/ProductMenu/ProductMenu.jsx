import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import { Link } from '@mui/material';
import { NavLink, useRouteMatch } from 'react-router-dom';
import { makeStyles } from '@mui/styles';

ProductMenu.propTypes = {};
const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    alignItems: 'center',

    padding: 0,
    listStyleType: 'none',
    '& > li': {
      padding: '24px',
    },
    '& > li > a': {
      color: 'gray',
      textDecoration: 'none',
    },
    '& > li > a.active': {
      color: 'blue',
      textDecoration: 'underline',
    },
  },
});
function ProductMenu(props) {
  const { url } = useRouteMatch();
  console.log(url);
  const classes = useStyles();
  return (
    <Box component="ul" className={classes.root}>
      <li>
        <NavLink exact to={url}>
          Description
        </NavLink>
      </li>
      <li>
        <NavLink exact to={`${url}/addtionnal`}>
          Additionnal information
        </NavLink>
      </li>
      <li>
        <NavLink exact to={`${url}/review`}>
          Review
        </NavLink>
      </li>
    </Box>
  );
}

export default ProductMenu;
