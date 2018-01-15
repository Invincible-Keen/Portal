import React, { Component } from 'react';
import Navigation from '../components/Navigation'
import News from '../components/News'
import Breadcrumb from '../components/Breadcrumb'
import NewsList from '../components/NewsList'
import Footer from '../components/Footer'


class NewsPage extends Component {

	constructor () {
		super()
		this.state = {
			showMobileMenu: false
		}
	}

	handleShowHideMobileMenu(){
		this.setState({
	      showMobileMenu: !this.state.showMobileMenu
	    });
	}

	handleScreenClick(event){
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
				<div className="banner"><img src={require("../img/news.jpg")} alt="" /></div>
				<div className="content-container">
					<Breadcrumb />
					<NewsList />
				</div>
				<div className="news-list-mobile">
					<News />
				</div>
				<Footer />
			</div>
		)
	}
}

export default NewsPage;