import React, {Component} from 'react'

import {View, Text, Button, Image} from 'react-native'
import ImagePicker from 'react-native-image-picker'

var photoOptions = {
	// 底部弹出框选项
	title: '请选择',
	cancelButtonTitle: '取消',
	takePhotoButtonTitle: '拍照',
	chooseFromLibraryButtonTitle: '选择相册',
	quality: 0.75, // 照片的质量
	allowsEditing: true, // 允许被编辑
	noData: false, // 不添加日期
	storageOptions: {
		skipBackup: true, // ios跳过云端备份
		path: 'images'
	}
};

export default class Me extends Component {
	constructor(props) {
		super(props);
		this.state = {
			imgURL: ''
		};
	}
	
	render() {
		return <View style={{alignItems: 'center', paddingTop: 70}}>
			<Image source={{uri: this.state.imgURL}} style={{width: 200, height: 200}}></Image>
			<Button title="拍照" onPress={this.cameraAction}></Button>
		</View>
	}
	
	cameraAction = () => {
		ImagePicker.showImagePicker(photoOptions, (response) => {
			console.log('response' + response);
			if (response.didCancel) {
				return
			}
			this.setState({
				imgURL: response.uri
			});
		})
	}
}