import React from 'react';

const Box = ({
  imageUrl,
  isActive,
  children,
  handleBoxClick,
  boxIndex,
  myref,
  boxesNumber,
}) => {
  const style = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 50%',
    objectFit: 'fill',
    width: `${100 / boxesNumber}%`,
  };

  const className = `lightbox__box ${isActive ? 'activeBox' : ''}`;

  return (
    <div
      className={className}
      style={style}
      onClick={() => handleBoxClick(boxIndex)}
      ref={myref}
    >
      { children || null }
    </div>
  );
};

export default Box;
