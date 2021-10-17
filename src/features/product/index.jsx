import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, useRouteMatch } from 'react-router';
import ProductList from './page/Products';
import detailProduct from './page/detailProduct';
import { Box } from '@mui/system';
import Count from './../product/component/count';
import Hr from './page/hr';

function ProducFeatures(props) {
  const match = useRouteMatch();
  console.log(match);
  return (
    <div>
      <Box pt={4}>
        <Switch>
          <Route path={match.url} exact component={ProductList} />
          <Route path={`${match.url}/countss`} component={Count} />
          <Route path={`${match.url}/hr`} component={Hr} />
          <Route path={`${match.url}/:productId`} component={detailProduct} />
        </Switch>
      </Box>
    </div>
  );
}

export default ProducFeatures;
