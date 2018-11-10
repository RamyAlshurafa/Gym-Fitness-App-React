const getStyle = ({
  elememtWidth,
  enterPositionY,
  enterPositionX,
  exitePositionX,
  exitePositionY,
}) => `
  .lightbox__fullscreen img {
    cursoer:pointer
  }
  
  /* start from this positions */
  .fade-enter img{
    opacity: 0.01;
    top: ${enterPositionY};
    left: ${enterPositionX};
    width: ${elememtWidth}px;
    min-width:0px
  }
  
  
  /* At the end of entering */
  .fade-enter-active img{
    opacity: 1;
    transition: all 1000ms ease-in-out;
    /* Dont change 2 lines top and left */
    top: 50%;
    left: 50%;
    width:60%;
    min-width:600px;
  }
  
  /* start exiting from this point */
  .fade-exit img {
    opacity: 1;
    /* Dont change 2 lines top and left */
    top: 50%;
    left: 50%;
    width:60%;
    min-width:600px
  }
  
  /* At the end of exit */
  .fade-exit-active img{
    opacity: 0.01;
    transition: all 1000ms ease-in-out;
    top: ${exitePositionY};
    left: ${exitePositionX};
    width: ${elememtWidth}px;
    min-width:0px
  }
  
  .fade-enter-done img {
    left: 50%;
    top: 50%;
    width:60%;
    min-width:600px
  }
  `;
export default getStyle;
