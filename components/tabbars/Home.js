import React, {Component} from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'
// 引入swipe插件
import Swiper from 'react-native-swiper'

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	
	render() {
		return <View>
			{/*Swiper Begin*/}
			<View style={{height: 220}}>
				<Swiper style={styles.wrapper} showsButtons={true}>
				<View>
					<Image source={{uri: "http://www.itcast.cn/images/slidead/BEIJING/2017410109413000.jpg"}}
								 style={styles.image}></Image>
				</View>
				<View>
					<Image source={{uri: "http://www.itcast.cn/images/slidead/BEIJING/2017440109442800.jpg"}}
								 style={styles.image}></Image>
				</View>
				<View>
					<Image source={{uri: "http://www.itcast.cn/images/slidead/BEIJING/2017441409442800.jpg"}}
								 style={styles.image}></Image>
				</View>
			</Swiper>
			</View>
			{/*Swiper End*/}
			
			{/*六宫格 Start*/}
			<View style={styles.box}>
				<View style={styles.item}>
					<Image source={require('../../images/menu1.png')} style={styles.logo}></Image>
					<Text>新闻资讯</Text>
				</View>
				<View style={styles.item}>
					<Image source={require('../../images/menu2.png')} style={styles.logo}></Image>
					<Text>图片分享</Text>
				</View>
				<View style={styles.item}>
					<Image source={require('../../images/menu3.png')} style={styles.logo}></Image>
					<Text>商品购买</Text>
				</View>
				<View style={styles.item}>
					<Image source={require('../../images/menu4.png')} style={styles.logo}></Image>
					<Text>热映电影</Text>
				</View>
				<View style={styles.item}>
					<Image source={require('../../images/menu5.png')} style={styles.logo}></Image>
					<Text>联系我们</Text>
				</View>
				<View style={styles.item}>
					<Image source={require('../../images/menu6.png')} style={styles.logo}></Image>
					<Text>新闻资讯</Text>
				</View>
			</View>
			{/*六宫格 End*/}
		</View>
	}
}

const styles = StyleSheet.create({
	image: {
		width: '100%',
		height: '100%'
	},
	box: {
		padding: 20,
		display: 'flex',
		flexWrap: 'wrap',
		flexDirection: 'row',
		
	},
	item: {
		width: '33.33%',
		alignItems: 'center',
		paddingBottom: 15
	},
	logo: {
		width: 60,
		height: 60,
		marginBottom: 6
	}
});
