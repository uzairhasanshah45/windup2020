import React, { Component } from 'react';
import _ from 'lodash';
import SplashScreen from 'react-native-splash-screen'

import MainApp from './navigation/index';


export default class App extends Component {

  componentDidMount() {
    SplashScreen.hide()
  }
  render() {
    return (
      <MainApp />
    );
  }
}
