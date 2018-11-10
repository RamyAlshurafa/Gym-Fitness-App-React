const getPositions = (element) => {
  const {
    top,
    height,
    left,
    width,
  } = element.getBoundingClientRect();

  const {
    innerWidth: windowWidth,
    innerHeight: windowHeight,
  } = window;

  const centerY = top + (height / 2);
  const centerX = left + (width / 2);

  const positions = {
    centerYPercent: `${(centerY / windowHeight) * 100}%`,
    centerXPercent: `${(centerX / windowWidth) * 100}%`,
    width,
    height,
  };

  return positions;
};

export default getPositions;
