import React, { Component } from 'react';
import { Route, HashRouter } from 'react-router-dom';
import AdminLayout from '../layouts/AdminLayout'
import Billboard from '../components/admin/Billboard'
import AboutSetting from '../components/admin/AboutSetting'
import NewsEditor from '../components/admin/NewsEditor'
import FooterSetting from '../components/admin/FooterSetting'


// const ComponentWraper = ({ match }) => (<{match.params.component}>)

class ComponentWraper extends Component{
  	render(){
	    return(
	      	<div>
		        {
		        	(this.props.match.params.component === "About" && <AboutSetting />) ||
		        	(this.props.match.params.component === "News" && <NewsEditor />) ||
		        	(this.props.match.params.component === "Footer" && <FooterSetting />)
		        }
	      	</div>
	    );
  	}

}

class Admin extends Component {
	
	render() {
		// console.log(this.props);
		return (
		  	<HashRouter>
		    	<AdminLayout currentUrl={this.props.location.pathname}>
		      		<Route path={`${this.props.match.path}/:component`} component={ComponentWraper}/>
				    {/*<Route exact path={match.path} render={() => (
				      <h3>Please select a topic.</h3>
				    )}/>*/}
				    <Route exact path={this.props.match.path} component={Billboard}/>
		    	</AdminLayout>
		  </HashRouter>
		);
	}
}

export default Admin;