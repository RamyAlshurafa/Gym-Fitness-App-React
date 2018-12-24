import React, { Component } from 'react';

import Box from './Box';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';
import FullScreen from './FullScreen';

import getPosiotions from './get_positions';
import getStyle from './get_style';

import './style.css';

class LightBox extends Component {
  Refs = []

  state = {
    images: [],
    isActive: false,
    activeIndex: 0,
    exitePositionX: '0%',
    exitePositionY: '0%',
    enterPositionX: '0%',
    enterPositionY: '0%',
    elememtWidth: '0px',
    elememtHeight: '0px',
  }

  componentDidMount() {
    this.setState({
      ...this.state,
      images: this.props.images,
    });
  }

  handlePreviousClick = (e) => {
    e.stopPropagation();
    const { activeIndex, images } = this.state;
    const newActiveIndex = (activeIndex === 0 ? images.length - 1 : activeIndex - 1);
    this.setState(
      {
        ...this.state,
        activeIndex: newActiveIndex,
      },
    );
  }

  handleNextClick = (e) => {
    e.stopPropagation();
    const { activeIndex, images } = this.state;
    const newActiveIndex = (activeIndex === images.length - 1 ? 0 : activeIndex + 1);
    this.setState(
      {
        ...this.state,
        activeIndex: newActiveIndex,
      },
    );
  }

  handleBoxClick = (boxIndex) => {
    const element = this.Refs[boxIndex];
    const {
      centerYPercent,
      centerXPercent,
      width,
      height,
    } = getPosiotions(element);

    this.setState(
      {
        ...this.state,
        isActive: true,
        activeIndex: boxIndex,
        enterPositionX: centerXPercent,
        enterPositionY: centerYPercent,
        elememtWidth: width,
        elememtHeight: height,
      },
    );
  }

  handleFullscreenClose = () => {
    const element = this.Refs[this.state.activeIndex];
    const {
      centerYPercent,
      centerXPercent,
      width,
      height,
    } = getPosiotions(element);

    this.setState(
      {
        ...this.state,
        isActive: false,
        exitePositionX: centerXPercent,
        exitePositionY: centerYPercent,
        elememtWidth: width,
        elememtHeight: height,
      },
    );
  }

  componentDidUpdate(prevProps) {
    if (prevProps.images !== this.props.images) {
      this.setState({
        ...this.state,
        images: this.props.images,
      });
    }
  }

  render() {
    return (
      <div className="lightbox">

        <FullScreen
          handleClose={this.handleFullscreenClose}
          activeImage={this.state.images[this.state.activeIndex]}
          isActive={this.state.isActive}
          handlePreviousClick={this.handlePreviousClick}
          handleNextClick={this.handleNextClick}
        />

        {this.state.images.map((item, index) => (
          <Box
            handleBoxClick={this.handleBoxClick}
            imageUrl={item.imageUrl}
            isActive={this.state.activeIndex === index && this.state.isActive}
            boxClassName={this.props.boxClassName}
            boxIndex={index}
            myref={el => this.Refs[index] = el}
            boxesNumber={this.state.images.length}
          >
            {this.props.children[index]}
          </Box>
        ))}

        <style>
          {getStyle({ ...this.state })}
        </style>

      </div>
    );
  }
}

export default LightBox;
