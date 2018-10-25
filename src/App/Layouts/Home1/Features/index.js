import React from 'react';

import Feature from './Feature'

import { data } from "./data";
import "./style.css"

const Features = () => (
  <div className="home1__features">
    <div className="home1__features__container">
      { data.map((element, index) => (
        <Feature data={element} key={index} />
        )) }
    </div>
    <div className="home1__features__signup">
      <p className="signup__text">Sign Up To Our Online BeFit Gymnasium And Get Benefits!</p>
      <button className="signup__button text--uppercase">apply now</button>
    </div>
  </div>
)

export default Features;