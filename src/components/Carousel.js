import React from 'react';
import { Carousel } from 'antd';


const CarouselSlider = () => (
	<div className="slider">
		<Carousel>
		    <div>
		    	<img src={require("../img/timg.jpg")} alt="" />
				<div className="slider-item-text">
					<span>A World of Solutions</span>
				</div>
		    </div>
		    <div>
				<img src={require("../img/timg1.jpg")} alt="" />
				<div className="slider-item-text">
					<span>Two World of Solutions</span>
				</div>
		    </div>
		    <div>
		    	<img src={require("../img/timg2.jpg")} alt="" />
				<div className="slider-item-text">
					<span>Three World of Solutions</span>
				</div>
		    </div>
		</Carousel>
	</div>
);

export default CarouselSlider;