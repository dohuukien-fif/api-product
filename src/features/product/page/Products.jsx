import React, { useEffect, useState, useMemo } from 'react';
import PropTypes from 'prop-types';

import { Container, Grid, Box, Paper, Typography, Pagination } from '@mui/material';
import { makeStyles } from '@material-ui/styles';
import productApi from './../../../api/productApi';
import SelekeList from '../component/seleken/selekeList';
import ProductList from './../component/ProductList/productList';
import ProductSort from '../component/ProductList/productSort';
import ProductFilter from './../component/ProductFilter/filterProduct';
import FilterproductView from '../component/ProductFilter/filterProductView';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import queryString from 'query-string';
import SearchProduct from './../component/Search/index';
const useStyles = makeStyles({
  root: {},
  left: {
    width: '250px',
  },
  right: {
    flex: '1 1 0',
  },
  pagination: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    marginTop: '20px',
    paddingBottom: '20px',
  },
});
ProductFeatures.propTypes = {};

function ProductFeatures(props) {
  const match = useRouteMatch();
  const history = useHistory();
  const location = useLocation();
  console.log('history', history);
  console.log('loca', location);
  console.log('router', match);
  //parse Search url downup   with location.Search and setProductLisst
  const queryParam = useMemo(() => {
    const params = queryString.parse(location.search);
    return {
      ...params,
      _page: Number.parseInt(params._page) || 1,
      _limit: Number.parseInt(params._limit) || 9,

      _sort: params._sort || 'salePrice:ASC',
      isPromotion: params.isPromotion === 'true',
      isFreeShip: params.isFreeShip === 'true',
    };
  }, [location.search]);
  const [productList, setproductList] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [Search, setSearch] = useState();

  const [pagination, setpagination] = useState({
    limit: 9,
    total: 10,
    page: 1,
  });
  // const [filter, setfilter] = useState(() => ({
  //   ...queryParam,
  //   _page: Number.parseInt(queryParam._page) || 1,
  //   _limit: Number.parseInt(queryParam._limit) || 9,

  //   _sort: queryParam._sort || 'salePrice:ASC',
  // }));
  const classes = useStyles();

  // useEffect(() => {
  //   history.push({
  //     pathname: history.location.pathname,
  //     search: queryString.stringify(filter),
  //   });
  // }, [filter, history]);
  //setProductLisst When location.Search  change
  useEffect(() => {
    const fetchApiProoduct = async () => {
      try {
        const { data, pagination } = await productApi.getAll(queryParam);
        setproductList(data);
        setpagination(pagination);
      } catch (error) {}
    };
    setLoading(false);
    fetchApiProoduct();
  }, [queryParam]);
  //page
  const hanleOnchange = (page) => {
    const filters = {
      ...queryParam,
      _page: page,
    };
    //get pathName to history
    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(filters),
    });
  };
  //sort
  const hanleOnchangeSort = (newSort) => {
    const filters = {
      ...queryParam,
      _sort: newSort,
    };
    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(filters),
    });
  };
  //get all object filter  in ProductFilter here ProductContainer
  const hanleFilterChange = (newfilter) => {
    console.log(newfilter);
    const filters = {
      ...queryParam,
      ...newfilter,
    };
    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(filters),
    });
  };
  //set  neww productLisst  and delete
  const sethandleProductView = (newView) => {
    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(newView),
    });
  };

  // const hanleOnchangeSearch = (newSearch) => {
  //   console.log(newSearch);
  //   const filters = {
  //     ...queryParam,
  //     'category.searchTerm': productList.map((element) =>
  //       element.category.searchTerm.split(' ').filter((item) => item.includes(newSearch.Search))
  //     ),
  //   };
  //   history.push({
  //     pathname: history.location.pathname,
  //     search: queryString.stringify(filters),
  //   });
  // };

  return (
    <Box>
      <Container>
        <Grid container spacing={1}>
          <Grid item className={classes.left}>
            <Paper elevation={0}>
              <ProductFilter filter={queryParam} onChange={hanleFilterChange} />
            </Paper>
          </Grid>

          <Grid item className={classes.right}>
            <Paper elevation={0}>
              <ProductSort curentSort={queryParam._sort} onChanges={hanleOnchangeSort} />
              {/* <SearchProduct onSubmit={hanleOnchangeSearch} /> */}
              <FilterproductView filters={queryParam} onChange={sethandleProductView} />

              {Loading ? <SelekeList lengt h={9} /> : <ProductList data={productList} />}
              <Box className={classes.pagination}>
                <Pagination
                  color="primary"
                  count={Math.ceil(pagination.total / pagination.limit)}
                  page={pagination.page}
                  onChange={hanleOnchange}
                ></Pagination>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ProductFeatures;
