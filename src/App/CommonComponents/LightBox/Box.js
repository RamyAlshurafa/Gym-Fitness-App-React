import React from 'react';

const Box = ({
  imageUrl,
  isActive,
  children,
  boxClassName,
  handleBoxClick,
  boxIndex,
  myref
}) => {

  const style = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 50%',
    objectFit: "fill"
  }

  const className = `lightbox__box ${boxClassName} ${ isActive ? 'activeBox' : '' }`

  return (
    <div
    className={className}
    style={style}
    onClick={() => handleBoxClick(boxIndex)}
    ref={myref}
    >
      { children ? children : null }
    </div>
  )
}

export default Box;