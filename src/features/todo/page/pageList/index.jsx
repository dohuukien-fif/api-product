import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import TodoLists from './../../component/todoList/index';
import queryString from 'query-string';
import { useLocation, useHistory, useRouteMatch } from 'react-router-dom';
import TodoForm from './../../component/TodoForm/index';
import { date } from 'yup';
function Todofeatures(props) {
  const todoList = [
    {
      id: 1,
      title: 'Eat',
      status: 'pending',
    },
    {
      id: 2,
      title: 'Sleep',
      status: 'complete',
    },
    {
      id: 3,
      title: 'code',
      status: 'pending',
    },
  ];
  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();
  console.log('location', location);
  console.log('history', history);
  console.log('match', match);
  const [todoLists, settodoLists] = useState(todoList);
  const [FiterTodo, setFiterTodo] = useState();
  //toget active TodoList

  //togert status
  const handoTodoClick = (todos, idx) => {
    console.log(todos.title);
    const newTodoList = [...todoLists];
    const newTodo = {
      ...newTodoList[idx],
      status: newTodoList[idx].status === 'pending' ? 'complete' : 'pending',
    };
    newTodoList[idx] = newTodo;
    settodoLists(newTodoList);
    console.log(todos, idx);
  };
  //filter Todo for status
  useEffect(() => {
    const params = queryString.parse(location.search);
    setFiterTodo(params.status || 'all');
  }, [location.search]);
  //status all
  const hanleShowAll = () => {
    const queryParam = { status: 'all' };
    history.push({
      pathname: location.pathname,
      search: queryString.stringify(queryParam),
    });
  };
  //status complete
  const hanleShowComplete = () => {
    const queryParam = { status: 'complete' };
    history.push({
      pathname: location.pathname,
      search: queryString.stringify(queryParam),
    });
  };
  //status pending
  const hanleShowNew = () => {
    const queryParam = { status: 'pending' };
    history.push({
      pathname: location.pathname,
      search: queryString.stringify(queryParam),
    });
  };
  //filter chosse name status
  const showStatus = todoLists.filter((item) => FiterTodo === 'all' || FiterTodo === item.status);
  //form
  const hanleSubmit = (values) => {
    const newTodo = {
      id: todoLists.length + 1,
      title: values.title,
      status: 'pending',
    };
    const newTodoLissts = [...todoLists, newTodo];
    settodoLists(newTodoLissts);
  };
  return (
    <div>
      <TodoForm onSubmit={hanleSubmit} />
      <TodoLists todo={showStatus} onTodoClick={handoTodoClick} />
      <div>
        <button onClick={hanleShowAll}>All</button>
        <button onClick={hanleShowComplete}>Show Complete</button>
        <button onClick={hanleShowNew}>Show New</button>
      </div>
    </div>
  );
}

export default Todofeatures;
