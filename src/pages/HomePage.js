import React, { Component } from 'react';
import Navigation from '../components/Navigation'
import Slider from '../components/Slider'
// import Carousel from '../components/Carousel'
import Case from '../components/Case'
import Products from '../components/Products'
import Footer from '../components/Footer'
import About from '../components/About'
import News from '../components/News'

class HomePage extends Component {
	constructor () {
		super()
		this.state = {
			showMobileMenu: false
		}
	}

	switchLanguage(){
		this.setState({
	      isEnglish: !this.state.isEnglish
	    });

	    
	}

	handleShowHideMobileMenu(){
		this.setState({
	      showMobileMenu: !this.state.showMobileMenu
	    });
	}

	handleScreenClick(event){
		//console.log(event.target.offsetParent);
		// if(event.target.className !== "fa fa-bars" && event.target.className !== "navigation-folded" && event.target.offsetParent.className.indexOf("mobile") < 0){
		// 	this.setState({
		//       showMobileMenu: false
		//     });
		// }
		if(event.target.tagName !== "A" && event.target.className !== "fa fa-bars" && event.target.className !== "navigation-folded" && event.target.offsetParent.className.indexOf("mobile") < 0){
			this.setState({
		      showMobileMenu: false
		    });
		}
	}
	

	render() {
		return(
			<div onClick={this.handleScreenClick.bind(this)}>
				<Navigation showMobileMenu={ this.state.showMobileMenu } handleShowHideMobileMenu={ this.handleShowHideMobileMenu.bind(this)}/>
				<Slider />
				<About />
				<Products />
				<Case />
				<News />
				<Footer />
			</div>
		)
	}
}

export default HomePage;