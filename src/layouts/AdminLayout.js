import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

class AdminLayout extends Component {
	static propTypes = {
		currentUrl: PropTypes.string.isRequired
	}

	state = {
      	dataSource: [{
      		key: '0',
	        name: 'Billboard',
	        icon: 'home',
	        link: '/Admin'	        
      	}, {
      		key: '1',
	        name: 'About',
	        icon: 'home',
	        link: '/Admin/About'	        
      	}, {
      		key: '2',
	        name: 'Products',
	        icon: 'home',
	        link: '/Admin/Products'	        
      	}, {
      		key: '3',
	        name: 'Cases',
	        icon: 'home',
	        link: '/Admin/Cases'	        
      	}, {
      		key: '4',
	        name: 'News',
	        icon: 'home',
	        link: '/Admin/News'	        
      	}, {
      		key: '5',
	        name: 'Footer',
	        icon: 'home',
	        link: '/Admin/Footer'
      	}]
    };

    componentWillMount() {
    	// console.log(this.props);
    }

    _getDefaultKeys = () => {
    	const keys = [];
    	const dataSource = this.state.dataSource;
      	const target = dataSource.find(item => item.link === this.props.currentUrl);
      	if (target) {
	        keys.push(target.key);
      	}

      	return keys;
    }
	render() {
		return (
			<Layout>
			    <Sider width="300" breakpoint="lg" collapsedWidth="0" onCollapse={(collapsed, type) => { console.log(collapsed, type); }}>
					<div className="admin-logo" />
			      	<Menu theme="dark" mode="inline" defaultSelectedKeys={this._getDefaultKeys()}>
			      		{
			      			this.state.dataSource.map((item, i) => {
								return(
									<Menu.Item key={item.key}>
										<Icon type={item.icon} />
										<Link className="nav-text" to={item.link}>{item.name}</Link>
							        </Menu.Item>
								);
							})
			      		}
			      	</Menu>
			    </Sider>
			    <Layout>
					<Header style={{ background: 'darkgrey', padding: 0 }} />
			      	<Content style={{ margin: '24px 16px 0' }}>
			        	<div style={{ padding: 24, background: '#fff', minHeight: 792 }}>
			          		{this.props.children}
			        	</div>
			      	</Content>
			      	<Footer style={{ textAlign: 'center' }}>
			        	Ant Design ©2016 Created by Ant UED
			      	</Footer>
			    </Layout>
		  	</Layout>
		);
	}
}

export default AdminLayout;