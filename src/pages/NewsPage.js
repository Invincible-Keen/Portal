import React, { Component } from 'react';
import Navigation from '../components/Navigation'
import News from '../components/News'
import Breadcrumb from '../components/Breadcrumb'
import NewsList from '../components/NewsList'
import Footer from '../components/Footer'


class NewsPage extends Component {
	render() {
		return(
			<div>
				<Navigation />
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