import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
Abum.propTypes = {};

function Abum({ item }) {
  const { title, thumbnaiUrl } = item;
  return (
    <div className="abum">
      <img className="abum-image" src={thumbnaiUrl} alt="" />
      <h3 className="abum-title">{title}</h3>
    </div>
  );
}

export default Abum;
