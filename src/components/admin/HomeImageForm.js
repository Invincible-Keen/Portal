import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Modal, Button, Form, Row, Col, Input, Switch, InputNumber } from 'antd';
import PicturesWall from './PicturesWall'

const FormItem = Form.Item;

class HomeImageForm extends Component {
	static propTypes = {
		visible: PropTypes.bool.isRequired,
		item: PropTypes.object.isRequired,
		handleShowHideModal: PropTypes.func.isRequired,
		handleUpdateImageUrl: PropTypes.func.isRequired,
	}

	constructor () {
		super()
		this.state = {
			loading: false,
			fileList: [],
		}
	}

	componentWillReceiveProps(nextProps) {
		// console.log("componentWillReceiveProps: ", nextProps);
		if(nextProps.item.ImageUrl.length > 0){
			this.setState({ 
				fileList: [{
			      	uid: -1,
			      	name: 'timg.abafe8ea.jpg',
			      	status: 'done',
			      	// url: 'http://localhost:3000/static/media/timg.abafe8ea.jpg',
					url: nextProps.item.ImageUrl
			    }],
			});
		}
		else{
			this.setState({ 
				fileList: []
			});
		}
	}

	handleShowHideModal(visible){
		if(this.props.handleShowHideModal){
			this.props.handleShowHideModal(visible);
		}
	}


	handleSubmit = (e) => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err && this.state.fileList.length > 0) {
				if(this.state.fileList.length > 0){
					this._saveFormValues(values);				

					//this is so important, if miss, form fields will always keep the same values as the submitted values.
					this.props.form.resetFields();

					this.setState({ loading: true });
					setTimeout(() => {
					  	this.setState({ loading: false });
					  	this.handleShowHideModal(false);
					}, 3000);
				}
				else{

				}
			}
		});
	}

	handleCancel = () => {
		this.handleShowHideModal(false);

		//this is so important, if miss, form fields will always keep the same values as the submitted values.
		this.props.form.resetFields();
	}

	handleImageChange = ({ fileList }) => {
		this.setState({ fileList });
		if(fileList.response !== undefined && this.props.handleShowHideModal){
			this.props.handleUpdateImageUrl(fileList.response);
		}
	}

	_saveFormValues = (values) => {
		values.ImageUrl = this.state.fileList[0].url;
		console.log('Received values of form: ', values);
	}

	render() {
		const { getFieldDecorator } = this.props.form;
		const { Title, Slogan, SequenceNumber, Available } = this.props.item;
		return (
		  	<div>
		  		<Modal visible={this.props.visible} title="Add new item" onCancel={this.handleCancel} footer={[
		            <Button key="back" onClick={this.handleCancel}>Cancel</Button>,
		            <Button key="submit" type="primary" loading={this.state.loading} onClick={this.handleSubmit}>
		              Submit
		            </Button>,
	          	]}>
				    <Form>
				        <FormItem label="Title">
							{
								getFieldDecorator(
									'Title', 
									{ initialValue: Title, rules: [{ required: true, message: 'Please input title!' }],}
								)(
									<Input placeholder="Title" />
								)
							}
				        </FormItem>
				        <FormItem label="Slogan">
							{
								getFieldDecorator(
									'Slogan', 
									{ initialValue: Slogan, rules: [{ required: true, message: 'Please input slogan!' }],}
								)(
									<Input placeholder="Slogan" />
								)
							}
				        </FormItem>
				        <FormItem label="Home Image(1920*1080)" className="home-image">
				          	<PicturesWall previewWidth={960} fileList={this.state.fileList} uploadAction="/api/ImageUpload" handleImageChange={this.handleImageChange}/>
				        </FormItem>
				        <Row>
				        	<Col span={12} style={{ textAlign: 'left' }}>
					        	<FormItem label="Sequence number">
						          	{
						          		getFieldDecorator('SequenceNumber', { initialValue: SequenceNumber, rules: [{ required: false, message: 'Please input sequence number!' }]})(
						            		<InputNumber min={1} />
						          		)
						          	}
						        </FormItem>
					        </Col>
					        <Col span={12} style={{ textAlign: 'left' }}>
						        <FormItem label="Available">
									{
										getFieldDecorator('Available', { initialValue: Available, valuePropName: 'checked' })(
											<Switch />
										)
									}
						        </FormItem>
					        </Col>
				        </Row>
				        
			      	</Form>
		      	</Modal>
		  	</div>
		);
  	}
}

const ModalHomeImageForm = Form.create()(HomeImageForm);

export default ModalHomeImageForm;