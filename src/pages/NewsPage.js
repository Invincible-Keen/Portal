import React, { Component } from 'react';
import TopNav from '../components/TopNav'
import News from '../components/News'
import Breadcrumb from '../components/Breadcrumb'
import NewsList from '../components/NewsList'
import Footer from '../components/Footer'


class NewsPage extends Component {
	render() {
		return(
			<div>
				<TopNav />
				<div className="banner"><img src={require("../img/news.jpg")} alt="" /></div>
				<div className="content-container">
					<Breadcrumb />
					<NewsList />
				</div>
				<News />
				<Footer />
			</div>
		)
	}
}

export default NewsPage;