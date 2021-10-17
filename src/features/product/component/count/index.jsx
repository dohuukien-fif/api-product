import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import productApi from './../../../../api/productApi';

Count.propTypes = {};

function Count(props) {
  const [count, setcount] = useState([]);
  const [filter, setfilter] = useState({
    _limit: 120,
  });
  useEffect(() => {
    const fetchApiProoduct = async () => {
      try {
        const { data, pagination } = await productApi.getAll(filter);
        setcount(data);
        console.log(data.length);
      } catch (error) {}
    };

    fetchApiProoduct();
  }, []);
  return (
    <div>
      <h1>kien dep trai</h1>
      <h1>kien dep trai</h1>
      <h1>kien dep trai</h1>
      <h1>kien dep trai</h1>
    </div>
  );
}

export default Count;
