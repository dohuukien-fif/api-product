import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoLists from './component/todoList/index';
import { Route, Switch, useRouteMatch } from 'react-router';
import PageList from './page/pageList';
import DetailTodo from './page/DetailTodo';
import NotFound from './../../component/NotFound/index';
function Todofeatures(props) {
  const match = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route path={match.path} component={PageList} />
        <Route path={`${match.path}/:todoId`} component={DetailTodo} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default Todofeatures;
