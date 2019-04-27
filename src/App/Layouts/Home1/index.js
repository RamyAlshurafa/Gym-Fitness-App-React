import React, { Component, Fragment } from 'react';

import Slider from '../../CommonComponents/Slider';
import Features from './Features';
import Offers from './Offers';
import WorkoutClasses from './WorkoutClasses';
import Testimonial from './Testimonial';
import Testimonial2 from '../../CommonComponents/AnimatedSlider';

class Home1 extends Component {
  render() {
    return (
      <Fragment>
        <Slider />
        <Features />
        <Offers />
        <WorkoutClasses />
        <Testimonial />
        <Testimonial2 />
      </Fragment>
    );
  }
}

export default Home1;
