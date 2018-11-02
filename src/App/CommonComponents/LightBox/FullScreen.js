import React from 'react';

const FullScreen = ({
  handleClose,
  isActive
}) => {
  return (
    isActive 
    ? (
        <div className="lightbox__fullscreen">
          <button className="lightbox__fullscreen__close" onClick={handleClose}>
            ×
          </button>
        </div>
      )
      : null
  )    
}

export default FullScreen;