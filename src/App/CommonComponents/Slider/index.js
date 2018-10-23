import React from 'react';
import AnimatedSlider from 'react-animated-slider';

import {data} from './data'

import 'react-animated-slider/build/vertical.css';
import './slider-animations.css';
import './style.css';

const classNames ={
	previousButton: 'previousButton previousButtonLeft sliderButton',
	nextButton: 'nextButton  nextButtonRight sliderButton',
	previous: 'previous previousSlide',
	current: 'current currentSlide',
	next: 'next nextSlide'
  }

const Slider = () => (
	<AnimatedSlider direction="vertical" classNames={classNames}>
		{data.map((item, index) => (
			<div className='imgDiv'
				key={index}
			>
				<img src={item.image} className='slider__img' alt='alt'/>
				<div className={`slideContent ${(item.isCenter) ? 'slideContent--center' : '' }`}>
					<div className="container slideContent__container">
						<div>
							<h1 className="slideHeading">{item.heading.white}<span>{item.heading.orange}</span></h1>
						</div>
						<div>
							<p className="slideText">{item.text}</p>
						</div>
						<div>
							<button className="slideButton">{item.button}</button>
						</div>
					</div>
				</div>
			</div>
		))}
	</AnimatedSlider>
);

export default Slider;
