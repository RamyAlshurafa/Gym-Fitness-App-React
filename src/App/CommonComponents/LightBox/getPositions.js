const getPositions = (element) => {
  const {
    top,
    height,
    left,
    width
  } = element.getBoundingClientRect()

  const {
    innerWidth: windowWidth,
    innerHeight: windowHeight
  } = window

  return {
    elememt: {
      centerY: top + ( height / 2 ),
      centerX: left + ( width / 2 )
    },
    window: {
      centerY: windowHeight / 2,
      centerX: windowWidth / 2
    }
  }
}
export default getPositions