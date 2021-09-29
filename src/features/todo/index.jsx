import React from "react";
import PropTypes from "prop-types";
import TodoLists from "./component/todoList/index";

function Todofeatures(props) {
  const todoList = [
    {
      id: 1,
      title: "Eat",
    },
    {
      id: 2,
      title: "Sleep",
    },
    {
      id: 3,
      title: "code",
    },
  ];
  return (
    <div>
      <TodoLists todo={todoList} />
    </div>
  );
}

export default Todofeatures;
