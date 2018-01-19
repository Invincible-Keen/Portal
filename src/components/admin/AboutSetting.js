import React from 'react';
import { Button } from 'antd';
import SubTitle from '../SubTitle'
import PicturesWall from './PicturesWall'

class AboutSetting  extends React.Component {
	state = {
		Description: "",
		fileListA: [],
		fileListB: [],
		fileListC: [],
		fileListD: [],
		fileListE: [],
	}

	componentWillReceiveProps(nextProps) {
		// console.log("componentWillReceiveProps: ", nextProps);
		// this.setState({ 
		// 	fileList: [{
		//       	uid: -1,
		//       	name: 'timg.abafe8ea.jpg',
		//       	status: 'done',
		//       	url: 'http://localhost:3000/static/media/timg.abafe8ea.jpg',
		// 		// url: nextProps.item.ImageUrl
		//     }],
		// });
	}

	handleTextChange = (event) => {
		this.setState({
	      Description: event.target.value
	    });
	}

	handleImageChangeA = ({ fileList }) => {
	    this.setState({ fileListA: fileList });
	}
	handleImageChangeB = ({ fileList }) => {
	    this.setState({ fileListB: fileList });
	}
	handleImageChangeC = ({ fileList }) => {
	    this.setState({ fileListC: fileList });
	}
	handleImageChangeD = ({ fileList }) => {
	    this.setState({ fileListD: fileList });
	}
	handleImageChangeE = ({ fileList }) => {
	    this.setState({ fileListE: fileList });
	}

	handleSubmit = () => {
		console.log(this.state);
	}

	render() {
		return (
			<div className="block-content">
				<SubTitle title="ABOUT" />
		      	<div className="about-setting">
		      		<div className="about-setting-left">
		      			<PicturesWall previewWidth={790} fileList={this.state.fileListA} uploadAction="/api/ImageUpload" handleImageChange={this.handleImageChangeA}/>
		      			<textarea className="" placeholder="Description about OWM" onChange={this.handleTextChange}></textarea>
		      		</div>
		      		<div className="about-setting-right">
			      		<div className="about-setting-right-item">	      			
			      			<PicturesWall fileList={this.state.fileListB} uploadAction="/api/ImageUpload" handleImageChange={this.handleImageChangeB}/>
			      			<PicturesWall fileList={this.state.fileListC} uploadAction="/api/ImageUpload" handleImageChange={this.handleImageChangeC}/>
			      		</div>
			      		<div className="about-setting-right-item">
			      			<PicturesWall fileList={this.state.fileListD} uploadAction="/api/ImageUpload" handleImageChange={this.handleImageChangeD}/>
			      			<PicturesWall fileList={this.state.fileListE} uploadAction="/api/ImageUpload" handleImageChange={this.handleImageChangeE}/>
			      		</div>
		      		</div>
		      	</div>
		      	<div className="about-setting-operation">
		            <Button key="submit" type="primary" loading={this.state.loading} onClick={this.handleSubmit}>
		              	Submit
		            </Button>
	      		</div>
			</div>
		);
	}
	
}

export default AboutSetting;