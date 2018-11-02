import React from 'react';

const LeftArrow = ({ leftArrowClass, handlePreviousClick, isActive }) => {
  const className = `lightbox__previousArrow ${leftArrowClass}`

  return (
    isActive
    ? (
      <div className={className} onClick={handlePreviousClick}>
        <i className="fas fa-arrow-left"></i>
      </div>
    )
    : null
  )
}

export default LeftArrow;