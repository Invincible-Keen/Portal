import React, { Component } from 'react';

class Slider extends Component {

	constructor () {
		super()
		this.state = {
			activeItem: 0
		}

		this.currentItem = 0;
	}

	handleIndicatorClick(event){
		this.setState({
	      activeItem: parseInt(event.target.getAttribute('data-slide-to'), 10)
	    });
	}


	componentDidMount() {
		this.showImgAnimation ();
		// console.log(this.currentItem);

		//setInterval(this.playNextImg.bind(this), 3000)
	}
	componentDidUpdate(prevProps, prevState) {
		//this.showImgAnimation ();
		setTimeout(this.showImgAnimation, 1);//delay for any time, no Animation in synchronous way, react sucks!!!

		this.currentItem = this.state.activeItem;
		console.log(this.currentItem);
	}

	showImgAnimation (){
		document.querySelectorAll(".slider-item").forEach((item) => item.style.visibility = "hidden")
		document.querySelectorAll(".slider-item").forEach((item) => item.style.opacity  = "0.1")

		if(document.querySelector(".slider div.active") != null){
			document.querySelector(".slider div.active").style.visibility = "visible";
			document.querySelector(".slider div.active").style.opacity = "1";
		}
	}

	playNextImg(){
	    this.currentItem = (this.currentItem + 1) % 3;

	    document.querySelectorAll(".slider-item").forEach((item) => item.className = item.className.replace("active", ""))
	    if(this.currentItem === 0){
	    	document.querySelector(".slider div.img1").className = document.querySelector(".slider div.img1").className + " active";
	    }
	    else if(this.currentItem === 1){
	    	document.querySelector(".slider div.img2").className = document.querySelector(".slider div.img2").className + " active";
	    }
	    else if(this.currentItem === 2){
	    	document.querySelector(".slider div.img3").className = document.querySelector(".slider div.img3").className + " active";
	    }

	    this.showImgAnimation();
	}

	//style={{'visibility': this.state.activeItem === 0? 'visible' : 'hidden', 'opacity': this.state.activeItem === 0? '1' : '0'}}
	//style={{'display': this.state.activeItem === 0? 'block' : 'none'}}
	render() {
		return(
			<div className="slider">
				<div className={ this.state.activeItem === 0? "slider-item img1 active" : "slider-item img1 bigImg"} >
					<img src={require("../img/timg.jpg")} alt="" />
					<div className="slider-item-text">
						<span>A World of Solutions</span>
					</div>
				</div>
				<div className={ this.state.activeItem === 1? "slider-item img2 active" : "slider-item img2"}>
					<img src={require("../img/timg1.jpg")} alt="" />
					<div className="slider-item-text">
						<span>Two World of Solutions</span>
					</div>
				</div>
				<div className={ this.state.activeItem === 2? "slider-item img3 active" : "slider-item img3"}>
					<img src={require("../img/timg2.jpg")} alt="" />
					<div className="slider-item-text">
						<span>Three World of Solutions</span>
					</div>
				</div>
				<div className="slider-pagination">
					<span data-slide-to="0" className={this.state.activeItem === 0? "active" : ""} onClick={this.handleIndicatorClick.bind(this)}></span>
					<span data-slide-to="1" className={this.state.activeItem === 1? "active" : ""} onClick={this.handleIndicatorClick.bind(this)}></span>
					<span data-slide-to="2" className={this.state.activeItem === 2? "active" : ""} onClick={this.handleIndicatorClick.bind(this)}></span>
				</div>
			</div>
		)
	}
}

export default Slider;