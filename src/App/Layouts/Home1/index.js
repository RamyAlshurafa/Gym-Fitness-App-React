import React, { Component, Fragment} from 'react';

import Slider from "../../CommonComponents/Slider";
import Features from './Features';

class Home1 extends Component {

  render() {
    return (
        <Fragment>
          <Slider />
          <Features />
        </Fragment>
    )
  }
}

export default Home1;
