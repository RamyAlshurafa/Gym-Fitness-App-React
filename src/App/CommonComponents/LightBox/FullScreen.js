import React from 'react';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';


const FullScreen = ({
  handleClose,
  isActive,
  activeImage
}) => {

  return (
    <TransitionGroup className="lightbox__fullscreen">

      {isActive
      ?
        <CSSTransition
        key={0}
        timeout={500}
        classNames="fade"
        appear={true}
        >
      
          <div className="lightbox__fullscreen" onClick={handleClose}>
            <button className="lightbox__fullscreen__close" onClick={handleClose}>
              ×
            </button>
            <img src={activeImage.imageUrl} alt="full screen item"/>
          </div>
        </CSSTransition>
      : null}

    </TransitionGroup>
  );
}

export default FullScreen;