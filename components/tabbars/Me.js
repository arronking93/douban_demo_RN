import React, {Component} from 'react'
import {View, Text} from 'react-native'

export default class Me extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	
	render() {
		return <View>
			<Text>这是Me组件</Text>
		</View>
	}
}