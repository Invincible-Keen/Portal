import React, { Component } from 'react';

class Slider extends Component {

	constructor () {
		super()
		this.state = {
			activeItem: 0
		}
	}

	handleIndicatorClick(event){
		this.setState({
	      activeItem: parseInt(event.target.getAttribute('data-slide-to'), 10)
	    });
	}

	render() {
		return(
			<div className="slider">
				<div className="slider-item" style={{'display': this.state.activeItem === 0? 'block' : 'none'}}>
					<img className="bigImg" src={require("../img/timg.jpg")} alt="" />
				</div>
				<div className="slider-item" style={{'display': this.state.activeItem === 1? 'block' : 'none'}}>
					<img className="bigImg1" src={require("../img/timg1.jpg")} alt="" />
				</div>
				<div className="slider-item" style={{'display': this.state.activeItem === 2? 'block' : 'none'}}>
					<img className="bigImg2" src={require("../img/timg2.jpg")} alt="" />
				</div>
				<div class="slider-pagination">
					<span data-slide-to="0" class={this.state.activeItem === 0? "active" : ""} onClick={this.handleIndicatorClick.bind(this)}></span>
					<span data-slide-to="1" class={this.state.activeItem === 1? "active" : ""} onClick={this.handleIndicatorClick.bind(this)}></span>
					<span data-slide-to="2" class={this.state.activeItem === 2? "active" : ""} onClick={this.handleIndicatorClick.bind(this)}></span>
				</div>
			</div>
		)
	}
}

export default Slider;