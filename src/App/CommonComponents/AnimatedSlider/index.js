import React, { Component } from 'react';

import {
  AnimatedSliderWrapper, Item, SliderWrapper, Items, Dots, Dot,
} from './style';

const Data = [
  {
    img: 'https://weneedfun.com/wp-content/uploads/2016/12/Bodybuilding-Wallpapers-17.jpg',
    elements: <div>
      <p>Hello 1</p>
    </div>,
  },
  {
    img: 'https://weneedfun.com/wp-content/uploads/2016/12/Bodybuilding-Wallpapers-17.jpg',
    elements: <div>
      <p>Hello 1</p>
    </div>,
  },
  {
    img: 'https://weneedfun.com/wp-content/uploads/2016/12/Bodybuilding-Wallpapers-17.jpg',
    elements: <div>
      <p>Hello 1</p>
    </div>,
  },
];

export default class Testimonial2 extends Component {
  state = {
    activeIndex: 0,
    itemsWidth: 0,
    scrollWidth: 0,
    currentX: 0,
    startDrag: false,
  };

  handleClickMove =(number) => {
    this.setState({ activeIndex: number });
  }

 getScrollbarWidth=() => {
   const div = document.createElement('div');
   div.innerHTML = '<div id="ramy"style="width:50px;height:50px;overflow:hidden;position:absolute;top:-200px;left:-200px;"><div style="height:100px;"></div>';
   document.body.append(div);
   const ramy = document.getElementById('ramy');
   const w1 = ramy && ramy.offsetWidth;

   ramy.style.overflowY = 'scroll';
   const w2 = ramy && ramy.clientWidth;
   div.remove();

   return (w1 - w2);
 }

 componentDidMount() {
   const sliderWrapper = document.getElementById('sliderWrapper');
   const testimonialWrapper = document.getElementById('testimonialWrapper');
   const sliderWrapperWidth = sliderWrapper.clientWidth;

   const items = document.getElementById('items');
   const itemsWidth = items.children.length * sliderWrapperWidth;
   this.setState({ itemsWidth, sliderWrapperWidth });
   const scrollWidth = this.getScrollbarWidth();
   this.setState({ scrollWidth });
 }

 onMouseDown=(event) => {
   const initialX = event.clientX;
   this.setState({ initialX, currentX: initialX, startDrag: true });
 }


 onClick=() => {

 }

 onDragEnd=(event) => {
   const finalX = event.clientX;
   const dragX = this.state.startDrag && ((finalX - this.state.initialX));
   const { activeIndex, sliderWrapperWidth } = this.state;

   if (dragX > 0) {
     if (dragX > sliderWrapperWidth / 4) {
       if (activeIndex === 0) {
         this.setState({ activeIndex: Data.length - 1, finalX, startDrag: false });
       } else {
         this.setState({ activeIndex: activeIndex - 1, finalX, startDrag: false });
       }
     } else {
       this.setState({ finalX, startDrag: false });
     }
   } else if (dragX < 0) {
     if (Math.abs(dragX) > sliderWrapperWidth / 4) {
       if (activeIndex === Data.length - 1) {
         this.setState({ activeIndex: 0, finalX, startDrag: false });
       } else {
         this.setState({ activeIndex: activeIndex + 1, finalX, startDrag: false });
       }
     } else {
       this.setState({ finalX, startDrag: false });
     }
   }
 }

 onMouseMove=(event) => {
   //  console.log(3);
 }

 onDrag=(event) => {
   const currentX = event.clientX;
   this.setState({ currentX });
 }

 onMouseUp=(event) => {
   const finalX = event.clientX;
   this.setState({ finalX, startDrag: false });
 }

 render() {
   const dragX = this.state.startDrag && ((this.state.currentX - this.state.initialX) * 3);
   const itemsLeft = `${-(this.state.sliderWrapperWidth * this.state.activeIndex + (this.state.activeIndex * this.state.scrollWidth)) + dragX}px`;
   if (this.state.currentX - this.state.initialX > 0) {
     console.log(dragX);
   } else {
     console.log(dragX);
   }
   console.log(itemsLeft);

   return (
     <AnimatedSliderWrapper
       id="testimonialWrapper"
     >
       <SliderWrapper id="sliderWrapper">
         <Items
           id="items"
           style={{
             left: itemsLeft,
           }}
         >
           {
             Data.map(elem => (
               <Item
                 elemWidth={this.state.sliderWrapperWidth + this.state.scrollWidth}
                 onMouseDown={this.onMouseDown}
                 onClick={this.onClick}
                 onDragEnd={this.onDragEnd}
                 onDrag={this.onDrag}
                 onMouseUp={this.onMouseUp}
               >
                 <img
                   src={elem.img}
                   alt=""
                 />
                 {elem.elements}
               </Item>
             ))
           }
         </Items>
         <Dots>
           {
             Data.map((elem, index) => (
               <Dot className={`dot ${this.state.activeIndex === index && 'active'}`} onClick={() => this.handleClickMove(index)} />
             ))
           }
         </Dots>
       </SliderWrapper>
     </AnimatedSliderWrapper>
   );
 }
}
