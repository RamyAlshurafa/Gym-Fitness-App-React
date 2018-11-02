import React from 'react';

const RightArrow = ({ rightArrowClass, handleNextClick, isActive}) => {
  const className = `lightbox__nextArrow ${rightArrowClass}`
    
  return (
    isActive
    ? (
      <div className={className} onClick={handleNextClick}>
        <i className="fas fa-arrow-right"></i>
      </div>
    )
    : null
  )
}

export default RightArrow;