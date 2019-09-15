import React, {Component} from 'react';
import {
	View,
	Text,
	Image,
	ActivityIndicator,
	FlatList,
	StyleSheet,
	TouchableHighlight
} from 'react-native';

import {Actions} from "react-native-router-flux";

export default class MovieList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			movies: [],
			currentPage: 1,
			pageSize: 12,
			isLoading: true,
			totalPage: 0
		};
	}
	
	componentWillMount() {
		this.getDataByPage();
	}
	
	render() {
		return <View>
			{this.renderList()}
		</View>
	}
	
	/*自定义的方法*/
	getDataByPage = () => {
		let start = (this.state.currentPage - 1) * this.state.pageSize;
		fetch(`https://api.douban.com/v2/movie/in_theaters?apikey=0df993c66c0c636e29ecbb5344252a4a&start=${start}&count=${this.state.pageSize}`).then(res => res.json()).then(data => {
			this.setState({
				isLoading: false,
				movies: this.state.movies.concat(data.subjects),
				totalPage: Math.ceil(data.total / this.state.pageSize)
			})
		})
	};
	
	getDataByPage1 = () => {
		let data = require('./test_list.json');
		setTimeout(() => {
			this.setState({
				isLoading: false,
				movies: data.subjects,
				total: data.total
			})
		}, 300)
	};
	
	getSeparator = () => {
		return <View style={{
			borderTopWidth: 1,
			borderTopColor: '#666',
			marginLeft: 20,
			marginRight: 20,
		}}></View>
	};
	
	getNextPage = () => {
		if ((this.state.currentPage + 1) > this.state.totalPage) return;
		this.setState({
			currentPage: this.state.currentPage + 1
		}, () => this.getDataByPage())
	};
	
	renderList = () => {
		if (this.state.isLoading) {
			return <ActivityIndicator size="large"></ActivityIndicator>
		} else {
			return <FlatList
					data={this.state.movies}
					keyExtractor={(item, i) => i}
					renderItem={({item}) => this.renderItem(item)}
					ItemSeparatorComponent={this.getSeparator}
					onEndReachedThreshold={0.5}
					onEndReached={this.getNextPage}
			/>
		}
	};
	
	toMovieDetail = (id) => {
		Actions.moviedetail({id});
	};
	
	renderItem = (item) => {
		return <TouchableHighlight underlayColor="white" onPress={ () => this.toMovieDetail(item.id)}>
			<View key={item.id} style={styles.container}>
				<Image source={{uri: item.images.small}} style={styles.image}></Image>
				<View style={styles.infos}>
					<Text>电影名称：{item.title}</Text>
					<Text>电影类型：{item.genres.join(' ')}</Text>
					<Text>制作年份：{item.year}年</Text>
					<Text>豆瓣评分：{item.rating.average}</Text>
				</View>
			</View>
		</TouchableHighlight>
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		padding: 20,
	},
	image: {
		width: 100,
		height: 140
	},
	infos: {
		justifyContent: 'space-around',
		paddingLeft: 30
	}
});