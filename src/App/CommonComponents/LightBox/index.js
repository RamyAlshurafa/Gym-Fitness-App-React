import React, { Component } from 'react';

import Box from './Box'

class LightBox extends Component {
  state = {
    images: [],
    isActive: false,
    activeIndex: 0
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
        {this.state.images.map((item, index) => (
          <Box
          imageUrl={item.imageUrl}
          isActive={ this.state.activeIndex === index && this.state.isActive }
          boxClassName={this.props.boxClassName}
          >
            {item.children}
          </Box>
        ))}
      </div>
    )
  }
}

export default LightBox;