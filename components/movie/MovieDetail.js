import React, {Component} from 'react'
import {View, Text} from 'react-native'

export default class MovieList extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	
	render() {
		return <View>
			<Text>这是MovieDetail组件</Text>
		</View>
	}
}