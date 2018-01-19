import React, { Component } from 'react';
import PropTypes from 'prop-types'
// import axios from 'axios';
import NavigationItem from '../components/NavigationItem'
// import NavigationMobileItem from '../components/NavigationMobileItem'
import NavigationMobileMenu from '../components/NavigationMobileMenu'
import navigation from '../dummy_data/navigation.json'



class Navigation extends Component {

	static propTypes = {
		showMobileMenu: PropTypes.bool.isRequired,
		handleShowHideMobileMenu: PropTypes.func
	}


	constructor () {
		super()
		this.state = {
			isEnglish: false,
			navigationItems: []
		}
	}

	handleShowHideMobileMenu(){
		if(this.props.handleShowHideMobileMenu){
			this.props.handleShowHideMobileMenu();
		}
	}

	switchLanguage(){
		let isEng = !this.state.isEnglish;
		localStorage.setItem('isEnglish', isEng);
		this.setState({
	      isEnglish: isEng
	    });
	}

	componentWillMount() {
		console.log(navigation);


		let isEng = false;
		if(localStorage.getItem("isEnglish") === "true"){
			isEng = true;
		}
		this.setState({
	      isEnglish: isEng
	    });
		
		this._getNavigation();
	}

	_getNavigation(){
		// axios.get('../navigation.json').then((res)=>{
  //           // console.log(res.data);
  //           this.setState({
  //           	navigationItems: res.data.items
  //           });
  //       }).catch((err)=>{
  //           console.log(err.status);
  //       })
  		this.setState({
        	navigationItems: navigation.items
        });
	}


	render() {
		return(
			<div>
				<nav className="main-navigation box box-horizontal box-nowarp">
					<div className="box box-horizontal box-nowarp">
						<a href="#/login" className="logo"><img src={require("../img/LOGO.png")} alt="" /></a>
						<a href="#/login" className="logo-small"><img src={require("../img/LOGO-mobile.jpg")} alt="" /></a>
						<ul className="navigation">
							{
								this.state.navigationItems.map((n, i) => {
									return(<NavigationItem key={i} item={n} isEnglish={this.state.isEnglish} />);
								})
							}
						</ul>
					</div>
					<a className="language" onClick={this.switchLanguage.bind(this)}><span>{this.state.isEnglish? "中文" : "English"}</span></a>
					<span className="navigation-folded" onClick={this.handleShowHideMobileMenu.bind(this)}><i className="fa fa-bars" aria-hidden="true"></i></span>
				</nav>
				<div className="mobile-menu" style={{'transform': this.props.showMobileMenu? 'translate(250px, 0)' : 'translate(0, 0)'}}>
					<ul className="mobile-navigation">
						{
							this.state.navigationItems.map((n, i) => {
								return(<NavigationMobileMenu key={i} item={n} isEnglish={this.state.isEnglish} />);
							})
						}
					</ul>
				</div>
			</div>
		)
	}
}

export default Navigation;