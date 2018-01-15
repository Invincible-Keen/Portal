import React, { Component } from 'react';
import { Table, Button } from 'antd';
import AdminLayout from '../layouts/AdminLayout'
// import ModalForm from '../components/admin/ModalForm'
import HomeImageForm from '../components/admin/HomeImageForm'




const data = [{
	key: 1,
  	Title: 'First blood',
  	Slogan: 'A World of Solutions',
  	// ImageUrl: '../img/timg.jpg',
  	ImageUrl: 'http://localhost:3000/static/media/timg.abafe8ea.jpg',
  	SequenceNumber: 1,
  	Available: true,
}, {
	key: 2,
  	Title: 'Double kill',
  	Slogan: 'Two World of Solutions',
  	// ImageUrl: '../img/timg1.jpg',
  	ImageUrl: 'http://localhost:3000/static/media/timg1.fe56fb46.jpg',
  	SequenceNumber: 2,
  	Available: false,
}, {
	key: 3,
  	Title: 'Triple kill',
  	Slogan: 'Three World of Solutions',
  	// ImageUrl: '../img/timg2.jpg',
  	ImageUrl: 'http://localhost:3000/static/media/timg2.0ddd1219.jpg',
  	SequenceNumber: 3,
  	Available: true,
}];

const emptyItem = {
	key: 4,
  	Title: '',
  	Slogan: '',
  	ImageUrl: '',
  	SequenceNumber: data.length + 1,
  	Available: true,
};

class NormalLoginForm extends Component {

	constructor(props) {
	    super(props);
	    this.columns = [
			{
			    title: 'Action',
			    key: 'operation',
			    // fixed: 'left',
			    width: 100,
			    render: (text, record) => <a onClick={() => this.handleEditModal(record.key)}>action</a>
		  	},
		  	{ title: 'Title', width: 100, dataIndex: 'Title', key: 'name' },
		  	{ title: 'Slogan', width: 100, dataIndex: 'Slogan', key: 'age' },
		  	{ title: 'Sequence number', width: 100, dataIndex: 'SequenceNumber', key: 'sequence-number' },
		  	{ 
		  		title: 'Available', 
		  		width: 100, 
		  		dataIndex: 'Available', 
		  		key: 'available',
		  		render: (text, record) => <span style={{'width': '20px', 'height': '20px', 'display': 'block', 'borderRadius': '100%', 'backgroundColor': record.Available? '#1890ff' : '#ccc'}}></span>
		  	}
		];
		

	    this.state = {
			visible: false,
			editingItem: emptyItem
		}
  	}
	

	showModal = () => {
		this.handleShowHideModal(true);
	}

	handleEditModal = (key) => {
		// console.log(this.state.editingItem);
		const target = data.find(item => item.key === key);
		// console.log(target);
		this.setState({ editingItem: target });
		this.handleShowHideModal(true);
	}
	handleShowHideModal(visible){
		this.setState({ visible: visible });

		if(!visible){
			this._resetEditingItem();
		}
	}

	handleUpdateImageUrl = (url) => {
		let currentItem = this.state.editingItem;
		currentItem.ImageUrl = url;
		this.setState({ editingItem: currentItem });
	}

	_resetEditingItem(){
		this.setState({ 
			editingItem: emptyItem
		});
	}
	render() {
		return (
			<AdminLayout>
				<Button type="primary" onClick={this.showModal}>
			      	Add new item
			    </Button>
				<div className="">
					<Table bordered columns={this.columns} dataSource={data} />
					<HomeImageForm visible={this.state.visible} item={this.state.editingItem} handleShowHideModal={this.handleShowHideModal.bind(this)} handleUpdateImageUrl={this.handleUpdateImageUrl} />
				</div>
		  	</AdminLayout>
		);
	}
}

export default NormalLoginForm;