/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
// 导入 React 基础包，这个包，作用是创建 组件
import React, {Component} from 'react';

// 从 react-native 中导入系统开发需要的包
import {
	StyleSheet, // 样式相关的组件，专门用来创建样式的
	View, // 用来布局的，相当于 div
} from 'react-native';



// 引入制作tabbars的组件
import TabNavigator from 'react-native-tab-navigator'
import Home from './components/tabbars/Home.js'
import Search from './components/tabbars/Search.js'
import ShoppingCar from './components/tabbars/ShoppingCar.js'
import Me from './components/tabbars/Me.js'

import Icon from 'react-native-vector-icons/FontAwesome';

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
								renderIcon={() => <Icon name="home" size={25} color="grey" />}
								renderSelectedIcon={() => <Icon name="home" size={25} color="#0079ff" />}
								selected={this.state.selectedTab === 'home'}
								onPress={() => this.setState({selectedTab: 'home'})}
						>
							<Home></Home>
						</TabNavigator.Item>
						<TabNavigator.Item
								title="搜索"
								renderIcon={() => <Icon name="search" size={25} color="grey" />}
								renderSelectedIcon={() => <Icon name="search" size={25} color="#0079ff" />}
								// renderBadge={() => <CustomBadgeView/>}
								selected={this.state.selectedTab === '搜索'}
								onPress={() => this.setState({selectedTab: '搜索'})}
						>
							<Search></Search>
						</TabNavigator.Item>
						<TabNavigator.Item
								title="购物车"
								renderIcon={() => <Icon name="home" size={25} color="grey" />}
								renderSelectedIcon={() => <Icon name="shopping-cart" size={25} color="#0079ff" />}
								badgeText="0"
								selected={this.state.selectedTab === '购物车'}
								onPress={() => this.setState({selectedTab: '购物车'})}
						>
							<ShoppingCar></ShoppingCar>
						</TabNavigator.Item>
						<TabNavigator.Item
								title="Me"
								renderIcon={() => <Icon name="user" size={25} color="grey" />}
								renderSelectedIcon={() => <Icon name="user-o" size={25} color="#0079ff" />}
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