import React, {Component} from 'react'
import {View, Text} from 'react-native'

export default class ShoppingCar extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	
	render() {
		return <View>
			<Text>这是ShoppingCar组件</Text>
		</View>
	}
}