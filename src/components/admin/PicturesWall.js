import React from 'react';
import PropTypes from 'prop-types'
import { Upload, Icon, Modal } from 'antd';

class PicturesWall extends React.Component {
  static propTypes = {
    previewWidth: PropTypes.number,
    maxImgNumber: PropTypes.number,
    fileList: PropTypes.array,
    uploadAction: PropTypes.string.isRequired,
    handleImageChange: PropTypes.func
  }

  static defaultProps = {
    previewWidth: 520,
    maxImgNumber: 1,
    fileList: []
  }

  state = {
    previewVisible: false,
    previewImage: ''
  };

  handleCancel = () => this.setState({ previewVisible: false })

  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  }

  handleChange = (fileList) => {
    if(this.props.handleImageChange){
      this.props.handleImageChange(fileList);
    }
  }

  // componentWillUpdate(nextProps, nextState) {
  //   console.log(nextProps);
  // }

  render() {
    const { previewVisible, previewImage } = this.state;
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );

    return (
      <div className="clearfix">
        <Upload
          action={this.props.uploadAction}
          listType="picture-card"
          fileList={this.props.fileList}
          onPreview={this.handlePreview}
          onChange={this.handleChange}
        >
          {this.props.fileList.length >= this.props.maxImgNumber ? null : uploadButton}
        </Upload>
        <Modal width={this.props.previewWidth} visible={previewVisible} footer={null} onCancel={this.handleCancel}>
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </div>
    );
  }
}

export default PicturesWall;