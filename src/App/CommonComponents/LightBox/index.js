import React, { Component } from 'react';

import Box from './Box'
import LeftArrow from './LeftArrow'
import RightArrow from './RightArrow'

class LightBox extends Component {
  state = {
    images: [],
    isActive: false,
    activeIndex: 0
  }

  handlePreviousClick = () => {

  }

  handleNextClick = () => {

  }

  componentDidMount() {
    this.setState({
      ...this.state,
      images: this.props.images
    })
  }

  render() {
    return (
      <div className="lightbox">
      
        <LeftArrow
        leftArrowClass={this.props.leftArrowClass}
        handlePreviousClick={this.handlePreviousClick}
        />

        {this.state.images.map((item, index) => (
          <Box
          imageUrl={item.imageUrl}
          isActive={ this.state.activeIndex === index && this.state.isActive }
          boxClassName={this.props.boxClassName}
          >
            {item.children}
          </Box>
        ))}

        <RightArrow
        rightArrowClass={this.props.rightArrowClass}
        handlePreviousClick={this.handlePreviousClick}
        />

      </div>
    )
  }
}

export default LightBox;