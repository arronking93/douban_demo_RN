import React, {Component} from 'react'
import {Router, Stack, Scene} from 'react-native-router-flux'

import App from './App.js';
import MovieList from './components/movie/MovieList.js'
import MovieDetail from './components/movie/MovieDetail.js'

export default class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	
	render() {
		return <Router sceneStyle={{backgroundColor: "#fff"}}>
    <Stack key="root">
      <Scene key="app" component={App} title="" hideNavBar={true}/>
      <Scene key="movielist" component={MovieList} title="热映电影列表"/>
      <Scene key="moviedetail" component={MovieDetail} title="电影详情"/>
    </Stack>
  </Router>
	}
}