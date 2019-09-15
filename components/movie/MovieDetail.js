import React, {Component} from 'react';
import {
	View,
	Text,
	Image,
	ScrollView,
	ActivityIndicator
} from 'react-native';

export default class MovieList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			movie: [],
			isLoading: true
		};
	}
	
	componentWillMount() {
		this.getDataById(this.props.id);
	}
	
	render() {
		return <View>
			{this.renderDetail()}
		</View>
	}
	
	/*自定义的方法*/
	renderDetail = () => {
		if (this.state.isLoading) {
			return <ActivityIndicator size="large"></ActivityIndicator>
		} else {
			return <ScrollView>
				<View>
					<Text style={{fontSize: 25, textAlign: 'center', padding: 20}}>{this.state.movie.title}</Text>
					<View style={{alignItems: 'center'}}>
						<Image source={{uri: this.state.movie.images.large}} style={{width: 200, height: 280}}></Image>
					</View>
					<Text style={{fontSize: 16, lineHeight: 50, padding: 10}}>{this.state.movie.summary}</Text>
				</View>
			</ScrollView>
		}
	};
	getDataById = (id) => {
		fetch(`https://api.douban.com/v2/movie/subject/${id}?apikey=0df993c66c0c636e29ecbb5344252a4a`).then(res => res.json()).then(data => {
			this.setState({
				movie: data,
				isLoading: false
			});
		})
	};
	getDataById1 = () => {
		const data = require('./test_detail.json');
		setTimeout(() => {
			this.setState({
				movie: data,
				isLoading: false
			});
		}, 300)
	};
}