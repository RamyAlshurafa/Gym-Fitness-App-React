import React , { Component } from 'react';

import { data } from './data'

class WorkoutClasses extends Component {
  state = {
    activeCategoryIndex: 0,
    classes: [],
    filteredClasses: []
  }

  handleFilter = (index) => {    
    const filteredClasses= this.state.classes.filter(item => (
      ( item.categoryIndex === index ) || ( index === 0 )
    ))
    this.setState({
      ...this.state,
      filteredClasses
    })
  }

  componentDidMount = () => {
    this.setState({
      ...this.state,
      classes: data,
      filteredClasses: data
    })
  }

  render() {
    return (
      <div className="workout-classes">
        <header className="workout-classes__header">
          <div className="header__title">
            <h1 className="header__title__h1">
              Workout Classes
            </h1>
          </div>
          <div className="header__filters">
            <div className="header__filter" onClick={ () => this.handleFilter(0) }>all</div>
            <div className="header__filter" onClick={ () => this.handleFilter(1) }>fitness</div>
            <div className="header__filter" onClick={ () => this.handleFilter(2) }>bodybuilding</div>
            <div className="header__filter" onClick={ () => this.handleFilter(3) }>boxing</div>
            <div className="header__filter" onClick={ () => this.handleFilter(4) }>yoga</div>
          </div>
        </header>
        <div className="classes__container">
          {this.state.filteredClasses.map((item, index) => (
            <div
            className="class"
            style={{width:'500px',height: '600px'}}
            style={{backgroundImage: `url('${item.imgUrl})`}}
            >
              <div className="class__zoom">
                <i className="fas fa-search-plus" onClick={() => this.handlePopup(index)}></i>
              </div>
              <div className="class__content">
                <h2 className="class_content__title">{item.title}</h2>
                <h4 className="class_content__description">{item.description}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default WorkoutClasses;