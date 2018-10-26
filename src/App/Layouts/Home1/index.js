import React, { Component, Fragment} from 'react';

import Slider from "../../CommonComponents/Slider";
import Features from './Features';
import Offers from './Offers';

class Home1 extends Component {

  render() {
    return (
        <Fragment>
          <Slider />
          <Features />
          <Offers />
        </Fragment>
    )
  }
}

export default Home1;
