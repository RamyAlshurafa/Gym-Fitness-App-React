import React, { Component } from 'react';
import './style.css';

import { Item } from './styled';

const width = 100;

export default class Testimonial extends Component {
  state = {
    activeIndex: 0,
    itemsWidth: 0,
    scrollWidth: 0,
    currentX: 0,
    startDrag: false,
  };

move =(number) => {
  this.setState({ activeIndex: number });
}

// componentDidUpdate() {

// }
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
         this.setState({ activeIndex: 5, finalX, startDrag: false });
       } else {
         this.setState({ activeIndex: activeIndex - 1, finalX, startDrag: false });
       }
     } else {
       this.setState({ finalX, startDrag: false });
     }
   } else if (dragX < 0) {
     if (Math.abs(dragX) > sliderWrapperWidth / 4) {
       if (activeIndex === 5) {
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
     <div
       className="testimonialWrapper"
       id="testimonialWrapper"
     >
       <div className="sliderWrapper" id="sliderWrapper">
         <div
           className="items"
           id="items"
           style={{
             left: itemsLeft,
           }}
         >
           <Item
             className="item"
             id="item1"
             elemWidth={this.state.sliderWrapperWidth + this.state.scrollWidth}
             onMouseDown={this.onMouseDown}
             onClick={this.onClick}
             onDragEnd={this.onDragEnd}
             onDrag={this.onDrag}
             onMouseUp={this.onMouseUp}
           >
             <img
               src="https://weneedfun.com/wp-content/uploads/2016/12/Bodybuilding-Wallpapers-17.jpg"
               alt=""
             />
             <p>Hello 1</p>
           </Item>

           <Item
             className="item"
             elemWidth={this.state.sliderWrapperWidth + this.state.scrollWidth}
             onMouseDown={this.onMouseDown}
             onClick={this.onClick}
             onDragEnd={this.onDragEnd}
             onDrag={this.onDrag}
             onMouseUp={this.onMouseUp}
           >
             <img
               src="https://weneedfun.com/wp-content/uploads/2016/12/Bodybuilding-Wallpapers-17.jpg"
               alt=""

             />
             <p>Hello 1</p>

           </Item>
           <Item
             className="item"
             id="item3"
             elemWidth={this.state.sliderWrapperWidth + this.state.scrollWidth}
             onMouseDown={this.onMouseDown}
             onClick={this.onClick}
             onDragEnd={this.onDragEnd}
             onDrag={this.onDrag}
             onMouseUp={this.onMouseUp}
           >
             <img
               src="https://weneedfun.com/wp-content/uploads/2016/12/Bodybuilding-Wallpapers-17.jpg"
               alt=""

             />
             <p>Hello 2</p>


           </Item>
           <Item
             className="item"
             elemWidth={this.state.sliderWrapperWidth + this.state.scrollWidth}
             onMouseDown={this.onMouseDown}
             onClick={this.onClick}
             onDragEnd={this.onDragEnd}
             onDrag={this.onDrag}
             onMouseUp={this.onMouseUp}
           >
             <img src="https://weneedfun.com/wp-content/uploads/2016/12/Bodybuilding-Wallpapers-17.jpg" alt="" />
             <p>Hello 3</p>

           </Item>
           <Item
             className="item"
             elemWidth={this.state.sliderWrapperWidth + this.state.scrollWidth}
             onMouseDown={this.onMouseDown}
             onClick={this.onClick}
             onDragEnd={this.onDragEnd}
             onDrag={this.onDrag}
             onMouseUp={this.onMouseUp}
           >
             <img src="https://weneedfun.com/wp-content/uploads/2016/12/Bodybuilding-Wallpapers-17.jpg" alt="" />
             <p>Hello 4</p>

           </Item>
           <Item
             className="item"
             elemWidth={this.state.sliderWrapperWidth + this.state.scrollWidth}
             onMouseDown={this.onMouseDown}
             onClick={this.onClick}
             onDragEnd={this.onDragEnd}
             onDrag={this.onDrag}
             onMouseUp={this.onMouseUp}
           >
             <img src="https://weneedfun.com/wp-content/uploads/2016/12/Bodybuilding-Wallpapers-17.jpg" alt="" />
             <p>Hello 5</p>
           </Item>
         </div>
         <div className="dots">
           <div className={`dot ${this.state.activeIndex === 0 && 'active'}`} onClick={() => this.move(0)} />
           <div className={`dot ${this.state.activeIndex === 1 && 'active'}`} onClick={() => this.move(1)} />
           <div className={`dot ${this.state.activeIndex === 2 && 'active'}`} onClick={() => this.move(2)} />
           <div className={`dot ${this.state.activeIndex === 3 && 'active'}`} onClick={() => this.move(3)} />
           <div className={`dot ${this.state.activeIndex === 4 && 'active'}`} onClick={() => this.move(4)} />
           <div className={`dot ${this.state.activeIndex === 5 && 'active'}`} onClick={() => this.move(5)} />
         </div>
       </div>
     </div>
   );
 }
}
