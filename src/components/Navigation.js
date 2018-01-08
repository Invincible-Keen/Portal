import React, { Component } from 'react';
import axios from 'axios';
import NavigationItem from '../components/NavigationItem'
import NavigationMobileItem from '../components/NavigationMobileItem'

class Navigation extends Component {

	constructor () {
		super()
		this.state = {
			showMobileMenu: false,
			isEnglish: false,
			navigationItems: []
		}
	}

	handleShowHideMobileMenu(){
		this.setState({
	      showMobileMenu: !this.state.showMobileMenu
	    });
	}

	switchLanguage(){
		let isEng = !this.state.isEnglish;
		localStorage.setItem('isEnglish', isEng);
		this.setState({
	      isEnglish: isEng
	    });
	}

	componentWillMount() {
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
		axios.get('../navigation.json').then((res)=>{
            // console.log(res.data);
            this.setState({
            	navigationItems: res.data.items
            });
        }).catch((err)=>{
            console.log(err.status);
        })

	}


	render() {
		return(
			<div>
				<nav className="main-navigation box box-horizontal box-nowarp">
					<div className="box box-horizontal box-nowarp">
						<a href="#/" className="logo"><img src={require("../img/OWM-logo.png")} alt="" /></a>
						<ul className="navigation">
							{
								this.state.navigationItems.map((n, i) => {
									return(<NavigationItem key={i} item={n} isEnglish={this.state.isEnglish} />);
								})
							}
						</ul>
					</div>
					<a className="language" href="#" onClick={this.switchLanguage.bind(this)}><span>{this.state.isEnglish? "中文" : "English"}</span></a>
					<span className="navigation-folded" onClick={this.handleShowHideMobileMenu.bind(this)}><i className="fa fa-bars" aria-hidden="true"></i></span>
				</nav>
				<div className="mobile-menu" style={{'transform': this.state.showMobileMenu? 'translate(200px, 0)' : 'translate(0, 0)'}}>
					<ul className="mobile-navigation">
						{
							this.state.navigationItems.map((n, i) => {
								return(<NavigationMobileItem key={i} item={n} isEnglish={this.state.isEnglish} />);
							})
						}
					</ul>
				</div>
			</div>
		)
	}
}

export default Navigation;