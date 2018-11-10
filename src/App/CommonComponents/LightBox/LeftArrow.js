import React from 'react';

const LeftArrow = ({ handlePreviousClick }) => (
  <div className="lightbox__previousArrow " onClick={handlePreviousClick}>
    <i className="fas fa-arrow-left" />
  </div>
);

export default LeftArrow;
