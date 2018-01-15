import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Modal, Button } from 'antd';


class ModalForm extends Component {
	static propTypes = {
		visible: PropTypes.bool.isRequired,
		submitBtnSelector: PropTypes.string.isRequired,
		resetBtnSelector: PropTypes.string.isRequired,
		handleShowHideModal: PropTypes.func.isRequired
	}

	constructor () {
		super()
		this.state = {
			loading: false
		}
	}

	handleShowHideModal(visible){
		if(this.props.handleShowHideModal){
			this.props.handleShowHideModal(visible);
		}
	}

	handleOk = () => {
		if(document.querySelector("." + this.props.submitBtnSelector) != null){
			document.querySelector("." + this.props.submitBtnSelector).click();
		}
		
		this.setState({ loading: true });
		setTimeout(() => {
		  	this.setState({ loading: false });
		  	this.handleShowHideModal(false);
		}, 3000);
	}
	handleCancel = () => {
		this.handleShowHideModal(false);

		if(document.querySelector("." + this.props.resetBtnSelector) != null){
			document.querySelector("." + this.props.resetBtnSelector).click();
		}
	}
	
	render() {
		const { loading } = this.state;
		return (
		  	<div>
			    <Modal visible={this.props.visible} title="Add new item" onOk={this.handleOk} onCancel={this.handleCancel} footer={null}>
			    	{this.props.children}
			    </Modal>
		  	</div>
		);
  	}
}

export default ModalForm;