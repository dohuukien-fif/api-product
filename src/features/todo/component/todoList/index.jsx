import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import classnames from 'classnames';
import Button from '@mui/material/Button';
TodoList.propTypes = {
  todo: PropTypes.array,
  onTodoClick: PropTypes.func,
};
TodoList.defaultProps = {
  todo: [],
  onTodoClick: null,
};
function TodoList({ todo, onTodoClick }) {
  const hanldoTodo = (todos, idx) => {
    if (onTodoClick) {
      onTodoClick(todos, idx);
    }
  };
  return (
    <ul className="todo">
      {todo.map((item, idx) => (
        <li
          key={idx}
          className={classnames({
            'todo-item': true,
            complete: item.status === 'complete',
          })}
          onClick={() => hanldoTodo(item, idx)}
        >
          {item.title}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
