import React, { Component } from 'react';

import Box from './Box'
import LeftArrow from './LeftArrow'
import RightArrow from './RightArrow'
import FullScreen from './FullScreen'

import './style.css'

class LightBox extends Component {
  Refs = []
  state = {
    images: [],
    isActive: false,
    activeIndex: 0
  }

  handlePreviousClick = () => {
    const { activeIndex, images } = this.state
    const newActiveIndex = ( activeIndex === 0 ? images.length - 1 : activeIndex - 1 )
    this.setState(
      {
        ...this.state,
        activeIndex: newActiveIndex
      }
    )
  }

  handleNextClick = () => { 
    const { activeIndex, images } = this.state
    const newActiveIndex = ( activeIndex === images.length - 1 ? 0 : activeIndex + 1 )
    this.setState(
      {
        ...this.state,
        activeIndex: newActiveIndex
      }
    )
  }

  handleBoxClick = (boxIndex) => {
    this.setState(
      {
        ...this.state,
        isActive: true,
        activeIndex: boxIndex
      }
    )
  }

  handleFullscreenClose = () =>{
    this.setState(
      {
        ...this.state,
        isActive: false
      }
    )
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

        <FullScreen 
        handleClose={this.handleFullscreenClose}
        activeImage={this.state.images[this.state.activeIndex]}
        isActive={this.state.isActive}
        />

        <LeftArrow
        leftArrowClass={this.props.leftArrowClass}
        handlePreviousClick={this.handlePreviousClick}
        isActive={this.state.isActive}
        />

        {this.state.images.map((item, index) => (
          <Box
          handleBoxClick={this.handleBoxClick}
          imageUrl={item.imageUrl}
          isActive={ this.state.activeIndex === index && this.state.isActive }
          boxClassName={this.props.boxClassName}
          boxIndex={index}
          myref={el => this.Refs[index] = el}
          >
            {item.children}
          </Box>
        ))}

        <RightArrow
        rightArrowClass={this.props.rightArrowClass}
        handleNextClick={this.handleNextClick}
        isActive={this.state.isActive}
        />

      </div>
    )
  }
}

export default LightBox;