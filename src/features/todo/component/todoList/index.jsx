import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
TodoList.propTypes = {
  todo: PropTypes.array,
};
TodoList.defaultProps = {
  todo: [],
};
function TodoList({ todo }) {
  return (
    <ul>
      {todo.map((item, index) => (
        <li key={index}>{item.title}</li>
      ))}
    </ul>
  );
}

export default TodoList;
