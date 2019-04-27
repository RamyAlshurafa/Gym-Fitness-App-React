import styled from 'styled-components';

export const Item = styled.div`
width: ${props => props.elemWidth}px
height: 100%;
position: relative;

* {
  position: absolute;

}

img{
  width: 100%;
}
`;

export const AnimatedSliderWrapper = styled.div`
width: 100%;
overflow-x: hidden;
height: 600px;
 img{
  max-height: 100%;
  object-fit: cover;
 }
`;

export const SliderWrapper = styled.div`
position: relative;
height: 100%;`;

export const Items = styled.div`
display: flex;
width: 10000px;
max-width: none;
position: absolute;
z-index: -1;
height: 100%;
z-index: 1;
transition: 1s ease`;

export const Dots = styled.div`
display: flex;
justify-content: space-between;
width: 150px;
margin: 0 auto;
position: absolute;
z-index: 1;
transform: translate(-50%, -50%);
left: 50%;
bottom: 5%
`;
export const Dot = styled.div`
width: 10px;
height: 10px;
background-color: gray;
border-radius: 50%;
cursor: pointer;
 &.active:{
  width: 10px;
  height: 10px;
  background-color: wheat
 }
`;
