import React, { Component } from 'react';
import Navigation from '../components/Navigation'
import Slider from '../components/Slider'
import Case from '../components/Case'
import Products from '../components/Products'
import Footer from '../components/Footer'
import About from '../components/About'
import News from '../components/News'

class HomePage extends Component {
	constructor () {
		super()
		this.state = {
			navigationItems: []
		}
	}

	switchLanguage(){
		this.setState({
	      isEnglish: !this.state.isEnglish
	    });

	    
	}
	

	render() {
		return(
			<div>
				<Navigation />
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