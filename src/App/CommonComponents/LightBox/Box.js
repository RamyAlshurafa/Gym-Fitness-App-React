import React from 'react';

const Box = ({
  imageUrl,
  isActive,
  children,
  boxClassName
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
    >
      { children ? children : null }
    </div>
  )
}

export default Box;