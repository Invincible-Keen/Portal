import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

class AdminLayout extends Component {
	render() {
		return (
			<Layout>
			    <Sider width="300" breakpoint="lg" collapsedWidth="0" onCollapse={(collapsed, type) => { console.log(collapsed, type); }}>
					<div className="admin-logo" />
			      	<Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
				        <Menu.Item key="1">
							<Icon type="user" />
							{/*<span className="nav-text">Billboard</span>*/}
							<Link className="nav-text" to="/Admin">Billboard</Link>
				        </Menu.Item>
				        <Menu.Item key="2">
							<Icon type="video-camera" />
							{/*<span className="nav-text">About</span>*/}
							<Link className="nav-text" to="/Admin/About">About</Link>
				        </Menu.Item>
				        <Menu.Item key="3">
							<Icon type="user" />
							<Link className="nav-text" to="/Admin/Products">Products</Link>
				        </Menu.Item>
				        <Menu.Item key="4">
							<Icon type="user" />
							<Link className="nav-text" to="/Admin/Cases">Cases</Link>
				        </Menu.Item>
				        <Menu.Item key="5">
							<Icon type="user" />
							<Link className="nav-text" to="/Admin/News">News</Link>
				        </Menu.Item>
				        <Menu.Item key="6">
							<Icon type="user" />
							<Link className="nav-text" to="/Admin/Footer">Footer</Link>
				        </Menu.Item>
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