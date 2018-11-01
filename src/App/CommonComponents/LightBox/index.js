import React, { Component } from 'react';

class LightBox extends Component {
  state = {
    images: []
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
      </div>
    )
  }
}

export default LightBox;