import React from "react";
import PropTypes from "prop-types";
import Abum from "./../Abum/index";
import "./styles.scss";
AbumList.propTypes = {
  abumLists: PropTypes.array,
};

function AbumList({ abumLists }) {
  return (
    <ul className="abumList">
      {abumLists.map((item, index) => (
        <li key={index}>
          <Abum item={item} />
        </li>
      ))}
    </ul>
  );
}

export default AbumList;
