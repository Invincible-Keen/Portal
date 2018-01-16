import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { Form, Icon, Input, Button, Checkbox } from 'antd';

const FormItem = Form.Item;

class NormalLoginForm extends Component {
	state = {
		isLoggedIn: false
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				console.log('Received values of form: ', values);
				this._login(values);
			}
		});
	}

	_login = (credential) => {
		// axios({
		// 	method:'post',
		// 	url:'/login',
		// 	responseType:'json',
		// 	data: {username: this.state.email,psd: this.state.password}
		// }).then(res => {
		// 	console.log("response", res.data);
		// 	if(res.data.status === "success"){
		// 		localStorage.setItem('token', res.data.token);

		// 		this.setState({
		// 			isLoggedIn: true
		// 		});
		// 	}
		// 	else{
		// 		alert(res.data.status);
		// 	}
		// }).catch(function (error) {
		// 	console.log(error);
		// });
		if(credential.userName === "Richard" && credential.password === "Admin"){
			this.setState({
				isLoggedIn: true
			});
		}
	}

	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<div className="login">
				<div className="login-header">
					<a href="#/login" className="logo"><img src={require("../img/LOGO.png")} alt="" /></a>
				</div>

				<Form onSubmit={this.handleSubmit} className="login-form">
					<FormItem className="login-form-title">登录</FormItem>
			        <FormItem>
						{
							getFieldDecorator(
								'userName', 
								{rules: [{ required: true, message: 'Please input your username!' }],}
							)(
								<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
							)
						}
			        </FormItem>
			        <FormItem>
						{
							getFieldDecorator(
								'password', 
								{rles: [{ required: true, message: 'Please input your Password!' }],}
							)(
								<Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
							)
						}
			        </FormItem>
			        <FormItem>
						{
							getFieldDecorator(
								'remember', 
								{ valuePropName: 'checked', initialValue: true, }
							)(
								<Checkbox>Remember me</Checkbox>
							)
						}
						{/*<a className="login-form-forgot" href="">Forgot password</a>*/}
						<Button type="primary" htmlType="submit" className="login-form-button">
						Log in
						</Button>
						{/*Or <a href="">register now!</a>*/}
			        </FormItem>
		      	</Form>

		      	{
					this.state.isLoggedIn? <Redirect to="/admin" /> : null
				}
			</div>
		  
		);
	}
}

const Login = Form.create()(NormalLoginForm);

export default Login;