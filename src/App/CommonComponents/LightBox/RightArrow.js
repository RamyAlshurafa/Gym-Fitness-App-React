import React from 'react';

const RightArrow = ({ handleNextClick }) => (
  <div className="lightbox__nextArrow" onClick={handleNextClick}>
    <i className="fas fa-arrow-right" />
  </div>
);

export default RightArrow;
