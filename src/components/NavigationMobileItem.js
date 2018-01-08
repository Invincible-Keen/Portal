import React, { Component } from 'react';
import PropTypes from 'prop-types'



class NavigationMobileItem extends Component {

	static propTypes = {
		item: PropTypes.object.isRequired,
		isEnglish: PropTypes.bool
	}

	static defaultProps = {
		isEnglish: false
	}

	constructor () {
		super()
		this.state = {
			showItems: false
		}
	}

	handleShowHideSubItems() {
		this.setState({
        	showItems: !this.state.showItems
        });
  		//console.log(this.subItems);
  		// this.subItems.style = !this.state.showItems? "height: auto" : "height: 0"
	}

	render() {
		return(
			<li className="mobile-navigation-item">
				<a href={ this.props.item.url } className="mobile-navigation" onClick={this.handleShowHideSubItems.bind(this)}>
					{ this.props.isEnglish? this.props.item.eName : this.props.item.name }
					{ this.props.item.subItems != null && <i className="fa fa-angle-down" aria-hidden="true"></i> }
				</a>
				{
					this.props.item.subItems != null &&
					<ul className="mobile-sub-navigation" ref={(ul)=>this.subItems = ul} style={{'height': this.state.showItems? 'auto' : '0px'}}>
						{
							this.props.item.subItems.map((s, i) => {
								return(<li key={i}><a href={s.url}>{ this.props.isEnglish? s.eName : s.name }</a></li>);
							})
						}
					</ul>
				}
				
			</li>
		)
	}
}

export default NavigationMobileItem;