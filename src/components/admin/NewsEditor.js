import React from 'react';
import SubTitle from '../SubTitle'
import LzEditor from 'react-lz-editor'
import { Button, Row, Col } from 'antd';

class NewsEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      htmlContent: `<h1>Yankees, Peeking at the Red Sox, Will Soon Get an Eyeful</h1>
                <p>Whenever Girardi stole a glance, there was rarely any good news for the Yankees. While Girardi’s charges were clawing their way to a split of their four-game series against the formidable Indians, the Boston Red Sox were plowing past the rebuilding Chicago White Sox, sweeping four games at Fenway Park.</p>`,
      responseList: []
    }
    this.receiveHtml=this.receiveHtml.bind(this);
  }
  receiveHtml(content) {
    console.log("recieved HTML content", content);
    this.setState({responseList:[]});
  }

  	componentWillUnmount(){ 
        this.setState = (state,callback)=>{
          return;
        };  
    }

    onChange = (fileList) => {
    	console.log(fileList);
    }

    handleClick = () => {
    	
    }

  render() {
    // let policy = "";
    const uploadProps = {
      action: "/api/Navigation",
      onChange: this.onChange,
      listType: 'picture',
      fileList: this.state.responseList,
      data: (file) => {
      	console.log(file);
      },
      multiple: true,
      beforeUpload: this.beforeUpload,
      showUploadList: true
    }
    return (
      <div>
        <SubTitle title="News Editor" />
        <LzEditor active={true} importContent={this.state.htmlContent} cbReceiver={this.receiveHtml} uploadProps={uploadProps} lang="en" autoSave={false}/>
        <br />
        <Button type="primary" onClick={this.handleClick}>Submit</Button>
      </div>
    );
  }
}

export default NewsEditor;