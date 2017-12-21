import React, { Component } from 'react';
import TopNav from '../components/TopNav'
import Case from '../components/Case'
import Products from '../components/Products'
import Footer from '../components/Footer'
import About from '../components/About'
import News from '../components/News'

class HomePage extends Component {
	render() {
		return(
			<div>
				<TopNav />
				<div className="banner"><img src={require("../img/timg.jpg")} alt="" /></div>
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