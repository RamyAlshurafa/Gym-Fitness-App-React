import React from 'react';

const LeftArrow = ({ leftArrowClass, handlePreviousClick }) => {
  const className = `lightbox__nextArrow ${leftArrowClass}`

  return (
    <div className={className} onClick={handlePreviousClick}>
      <i className="fas fa-arrow-left"></i>
    </div>
  )
}

export default LeftArrow;