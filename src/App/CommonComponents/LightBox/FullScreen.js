import React from 'react';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';

const FullScreen = ({
  handleClose,
  isActive,
  activeImage,
  handlePreviousClick,
  handleNextClick,
}) => {  
  return (

    <TransitionGroup>

      {isActive
        ? (
          <CSSTransition
            key={0}
            timeout={1000}
            classNames="fade"
            appear
          >

            <div className="lightbox__fullscreen" onClick={handleClose} >
              <LeftArrow
                handlePreviousClick={handlePreviousClick}
              />
              <button className="lightbox__fullscreen__close" onClick={handleClose} type="button">
                ×
              </button>
              <img src={activeImage.imageUrl} alt="full screen item" onClick={handleNextClick} />
              <RightArrow
                handleNextClick={handleNextClick}
              />
            </div>

          </CSSTransition>
        )
        : null}

    </TransitionGroup>
  );
};

export default FullScreen;
