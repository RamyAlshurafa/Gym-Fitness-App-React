import React from 'react';

const FullScreen = ({
  handleClose,
  isActive
}) => {
  return (
    isActive 
    ? (
        <div className="lightbox__fullscreen" onClick={handleClose}>
          <button className="lightbox__fullscreen__close" onClick={handleClose}>
            ×
          </button>
        </div>
      )
      : null
  )    
}

export default FullScreen;