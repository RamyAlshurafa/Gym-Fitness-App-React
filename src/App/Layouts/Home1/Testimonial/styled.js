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
