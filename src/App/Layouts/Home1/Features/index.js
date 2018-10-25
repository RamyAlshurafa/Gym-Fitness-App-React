import React, { Component } from 'react';
import {
  NavLink
} from "react-router-dom";

import Feature from './Feature'

import { data } from "./data";

const Features = () => (
  <div className="home1__features">
    { data.map((element, index) => (
      <Feature data={element} key={index} />
    )) }
  </div>
)

export default Features;
