import React, { Component } from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';
import AdminLayout from '../layouts/AdminLayout'
import Billboard from '../components/admin/Billboard'


// const ComponentWraper = ({ match }) => (<{match.params.component}>)

class ComponentWraper extends Component{

  componentWillMount() {
    console.log(this.props);
  }

  componentWillUpdate(nextProps, nextState) {
    console.log(this.props);
  }
  render(){
    return(
      <div>
        <h3>{this.props.match.params.component}</h3>
      </div>
    );
  }

}

class Admin extends Component {

	
	render() {
		return (
		  	<HashRouter>
		    	<AdminLayout>
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