import React from 'react';
import { Button, Form, Input, Row, Col } from 'antd';
import SubTitle from '../SubTitle'
import PicturesWall from './PicturesWall'

const FormItem = Form.Item;
class FooterSetting extends React.Component {
	// static propTypes = {
	// 	item: PropTypes.object
	// }

	// static defaultProps = {
	// 	item: {
 //      		PhoneNumber1: "",
 //      		PhoneNumber2: "",
 //      		Fax: "",
 //      		Address1: "",
 //      		Address2: "",
 //      		Weibo: "",
 //      		Wechat: "",
 //      		QQ: ""
 //      	}
	// }

  	constructor(props) {
	    super(props);
	    this.state = {
	    	fileList: [],
	    	item: {
	      		PhoneNumber1: "",
	      		PhoneNumber2: "",
	      		Fax: "",
	      		Address1: "",
	      		Address2: "",
	      		Weibo: "",
	      		Wechat: "",
	      		QQ: ""
	      	}
	    }
  	}
  	
  	handleSubmit = (e) => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				console.log('Received values of form: ', values);
			}
		});
	}

  	render() {
    	const { getFieldDecorator } = this.props.form;
    	const { PhoneNumber1, PhoneNumber2, Fax, Address1, Address2, Weibo, Wechat, QQ } = this.state.item;
	    return (
	      	<div>
		        <SubTitle title="Footer setting" />
		        <Form onSubmit={this.handleSubmit} className="footer-setting-form">
		        	<Row>
			        	<Col span={6} style={{ textAlign: 'left' }}>
			        		<FormItem label="Phone number 1">
								{
									getFieldDecorator(
										'PhoneNumber1', 
										{ initialValue: PhoneNumber1, rules: [{ required: true, message: 'Please input Phone number 1!' }],}
									)(
										<Input placeholder="Phone number 1" />
									)
								}
					        </FormItem>
			        	</Col>
			        	<Col span={3}></Col>
			        	<Col span={6} style={{ textAlign: 'left' }}>
			        		<FormItem label="Phone number 2">
								{
									getFieldDecorator(
										'PhoneNumber2', 
										{ initialValue: PhoneNumber2, rules: [{ required: true, message: 'Please input Phone number 2!' }],}
									)(
										<Input placeholder="Phone number 2" />
									)
								}
					        </FormItem>
			        	</Col>
			        	<Col span={3}></Col>
			        	<Col span={6} style={{ textAlign: 'left' }}>
			        		<FormItem label="Fax">
								{
									getFieldDecorator(
										'Fax', 
										{ initialValue: Fax, rules: [{ required: true, message: 'Please input Fax!' }],}
									)(
										<Input placeholder="Fax" />
									)
								}
					        </FormItem>
			        	</Col>
			        </Row>
			        <Row>
			        	<Col span={6} style={{ textAlign: 'left' }}>
			        		<FormItem label="Weibo">
								{
									getFieldDecorator(
										'Weibo', 
										{ initialValue: Weibo, rules: [{ required: true, message: 'Please input Weibo!' }],}
									)(
										<Input placeholder="Weibo" />
									)
								}
					        </FormItem>   
			        	</Col>
			        	<Col span={3}></Col>
			        	<Col span={6} style={{ textAlign: 'left' }}>
			        		<FormItem label="Wechat">
								{
									getFieldDecorator(
										'Wechat', 
										{ initialValue: Wechat, rules: [{ required: true, message: 'Please input Wechat!' }],}
									)(
										<Input placeholder="Wechat" />
									)
								}
					        </FormItem>
			        	</Col>
			        	<Col span={3}></Col>
			        	<Col span={6} style={{ textAlign: 'left' }}>
			        		<FormItem label="QQ">
								{
									getFieldDecorator(
										'QQ', 
										{ initialValue: QQ, rules: [{ required: true, message: 'Please input QQ!' }],}
									)(
										<Input placeholder="QQ" />
									)
								}
					        </FormItem>
			        	</Col>
			        </Row>       
			        <FormItem label="Address 1">
						{
							getFieldDecorator(
								'Address1', 
								{ initialValue: Address1, rules: [{ required: true, message: 'Please input Address 1!' }],}
							)(
								<Input placeholder="Address 1" />
							)
						}
			        </FormItem>
			        <FormItem label="Address 2">
						{
							getFieldDecorator(
								'Address2', 
								{ initialValue: Address2, rules: [{ required: true, message: 'Please input Address 2!' }],}
							)(
								<Input placeholder="Address 2" />
							)
						}
			        </FormItem>
			        
			        <FormItem label="QR code">
			          	<PicturesWall fileList={this.state.fileList} uploadAction="/api/ImageUpload" handleImageChange={this.handleImageChange}/>
			        </FormItem>
			        <FormItem wrapperCol={{ span: 2, offset: 22 }} className="form-submit">
			          	<Button type="primary" htmlType="submit">Submit</Button>
			        </FormItem>
		      	</Form>
	      	</div>
	    );
  	}
}

const FooterSettingForm = Form.create()(FooterSetting);

export default FooterSettingForm;