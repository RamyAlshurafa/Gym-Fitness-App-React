import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Options extends Component {
  state = {
    activeTabIndex: 0
  }

  static propTypes = {
    optionalArrayOf: PropTypes.arrayOf(
      PropTypes.shape({
        tabTitle: PropTypes.string.isRequired,
        tabDescription: PropTypes.string.isRequired
      }).isRequired
    )
  }

  handleChange = (event) => {
    this.setState({
      ...this.state,
      activeTabIndex: event.target.value
    });
  }

  render() {
    const { data } = this.props
    const { activeTabIndex } = this.state
    const description = data[activeTabIndex].tabDescription
    return (
      <div className="home1__offers__tabs-container">
        <div className="tabs__buttons" >
          {
            data.map((item,index) => (
              <button
              className={`tab__buttons ${(activeTabIndex == index ) ? 'tab__buttons--active' : ''}`}
              onClick={this.handleChange}
              value={index}
              key={index}
              >
                {item.tabTitle}
              </button>
            ))
          }
        </div>
        <div className="tab__description">
          <p className="tab__description__p">{description}</p>
        </div>
      </div>
    )
  }
}

export default Options;