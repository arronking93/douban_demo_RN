/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
// 导入 React 基础包，这个包，作用是创建 组件
import React, {Component} from 'react';

// 从 react-native 中导入系统开发需要的包
import {
	Platform, // 用来提供平台检测功能的
	StyleSheet, // 样式相关的组件，专门用来创建样式的
	Text, // 文本节点，所有文本必须放到这个里面
	View, // 用来布局的，相当于 div
} from 'react-native';

const instructions = Platform.select({
	ios: 'Press Cmd+R to reload,\n' +
			'Cmd+D or shake for dev menu',
	android: 'Double tap R on your keyboard to reload,\n' +
			'Shake or press menu button for dev menu',
});

// 引入制作tabbars的组件
import TabNavigator from 'react-native-tab-navigator'
import Home from './components/tabbars/Home.js'
import Search from './components/tabbars/Search.js'
import ShoppingCar from './components/tabbars/ShoppingCar.js'
import Me from './components/tabbars/Me.js'

// 这是 TS（TypeScript） 的语法
export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedTab: 'home'
		}
	}
	
	render() {
		return (
				<View style={styles.container}>
					{/*TabBars Begin*/}
					<TabNavigator>
						<TabNavigator.Item
								title="Home"
								// renderIcon={() => <Image source={...}/>}
								// renderSelectedIcon={() => <Image source={...}/>}
								selected={this.state.selectedTab === 'home'}
								onPress={() => this.setState({selectedTab: 'home'})}
						>
							<Home></Home>
						</TabNavigator.Item>
						<TabNavigator.Item
								title="搜索"
								// renderIcon={() => <Image source={...}/>}
								// renderSelectedIcon={() => <Image source={...}/>}
								// renderBadge={() => <CustomBadgeView/>}
								selected={this.state.selectedTab === '搜索'}
								onPress={() => this.setState({selectedTab: '搜索'})}
						>
							<Search></Search>
						</TabNavigator.Item>
						<TabNavigator.Item
								title="购物车"
								// renderIcon={() => <Image source={...}/>}
								// renderSelectedIcon={() => <Image source={...}/>}
								badgeText="0"
								selected={this.state.selectedTab === '购物车'}
								onPress={() => this.setState({selectedTab: '购物车'})}
						>
							<ShoppingCar></ShoppingCar>
						</TabNavigator.Item>
						<TabNavigator.Item
								title="Me"
								// renderIcon={() => <Image source={...}/>}
								// renderSelectedIcon={() => <Image source={...}/>}
								// renderBadge={() => <CustomBadgeView/>}
								selected={this.state.selectedTab === 'me'}
								onPress={() => this.setState({selectedTab: 'me'})}
						>
							<Me></Me>
						</TabNavigator.Item>
					</TabNavigator>
					{/*TabBars End*/}
				</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});