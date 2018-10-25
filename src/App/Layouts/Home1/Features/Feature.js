import React, { Component } from 'react';
import {
  NavLink
} from "react-router-dom";

const Feature = (props) => {
  const {
    imgUrl,
		title,
		text
  } = props.data

  return (
    <div className="feature">
      <img src={require(`./${imgUrl}`)} alt={title} className="feature__icon" />
      <h2 className="feature__title text--uppercase">
        {title}
      </h2>
      <p className="feature__text text--uppercase">
        {text}
      </p>
      <button className="feature__button text--uppercase">
        Details
      </button>
    </div>
  )
}

export default Feature;
