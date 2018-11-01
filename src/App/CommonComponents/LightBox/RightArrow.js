import React from 'react';

const RightArrow = ({ rightArrowClass, handleNextClick }) => {
  const className = `lightbox__nextArrow ${rightArrowClass}`

  return (
    <div className={className} onClick={handleNextClick}>
      <i className="fas fa-arrow-right"></i>
    </div>
  )
}

export default RightArrow;