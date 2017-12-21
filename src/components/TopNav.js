import React, { Component } from 'react';

class TopNav extends Component {

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

	render() {
		return(
			<div>
				<nav className="main-navigation box box-horizontal box-nowarp">
					<div className="box box-horizontal box-nowarp">
						<a href="/" className="logo"><img src={require("../img/wesco-logo.png")} alt="" /></a>
						<ul className="navigation">
							<li className="">
								<a href="/" className="">首页</a>   
							</li>
							<li className="navigation-item">
								<a href="/about/" className="">关于我们</a>
								<ul className="sub-navigation">
									<li>
										<a href="/">公司简介</a>   
									</li>
									<li>
										<a href="/">企业文化</a>   
									</li>
									<li>
										<a href="/">组织机构</a>   
									</li>
									<li>
										<a href="/">荣誉证书</a>   
									</li>
									<li>
										<a href="/">资料下载</a>   
									</li>
									<li>
										<a href="/">生产环境</a>   
									</li>
								</ul>   
							</li>
							<li className="navigation-item">
								<a href="/about/" className="">公司新闻</a>
								<ul className="sub-navigation">
									<li>
										<a href="#/news">企业新闻</a>   
									</li>
									<li>
										<a href="/">行业动态</a>   
									</li>
									<li>
										<a href="/">企业责任（献爱心活动）</a>   
									</li>
								</ul> 
							</li>
							<li className="">
								<a href="/" className="">产品展示</a>   
							</li>
							<li className="">
								<a href="/" className="">客户服务</a>   
							</li>
							<li className="">
								<a href="/" className="">招贤纳士</a>   
							</li>
							<li className="">
								<a href="/" className="">案例展示</a>   
							</li>
							<li className="">
								<a href="/" className="">联系我们</a>   
							</li>
						</ul>
					</div>
					<a className="language" href="/"><span>English</span></a>
					<span className="navigation-folded" onClick={this.handleShowHideMobileMenu.bind(this)}><i className="fa fa-bars" aria-hidden="true"></i></span>
				</nav>
				<div className="mobile-menu" style={{'transform': this.state.showMobileMenu? 'translate(256px, 0)' : 'translate(0, 0)'}}>
					<ul className="mobile-navigation">
							<li className="mobile-navigation-item">
								<a href="/" className="mobile-navigation">首页</a>   
							</li>
							<li className="mobile-navigation-item">
								<a href="/about/" className="mobile-navigation">关于我们</a>
								<ul className="mobile-sub-navigation">
									<li>
										<a href="/">公司简介</a>   
									</li>
									<li>
										<a href="/">企业文化</a>   
									</li>
									<li>
										<a href="/">组织机构</a>   
									</li>
									<li>
										<a href="/">荣誉证书</a>   
									</li>
									<li>
										<a href="/">资料下载</a>   
									</li>
									<li>
										<a href="/">生产环境</a>   
									</li>
								</ul>   
							</li>
							<li className="mobile-navigation-item">
								<a href="/about/" className="mobile-navigation">公司新闻</a>
								<ul className="mobile-sub-navigation">
									<li>
										<a href="/">企业新闻</a>   
									</li>
									<li>
										<a href="/">行业动态</a>   
									</li>
									<li>
										<a href="/">企业责任（献爱心活动）</a>   
									</li>
								</ul> 
							</li>
							<li className="mobile-navigation-item">
								<a href="/about/" className="mobile-navigation">产品展示</a>   
							</li>
							<li className="mobile-navigation-item">
								<a href="/about/" className="mobile-navigation">客户服务</a>   
							</li>
							<li className="mobile-navigation-item">
								<a href="/about/" className="mobile-navigation">招贤纳士</a>   
							</li>
							<li className="mobile-navigation-item">
								<a href="/about/" className="mobile-navigation">案例展示</a>   
							</li>
							<li className="mobile-navigation-item">
								<a href="/about/" className="mobile-navigation">联系我们</a>   
							</li>
						</ul>
				</div>
			</div>
		)
	}
}

export default TopNav;