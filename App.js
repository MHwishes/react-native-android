import React, { Component } from 'react';
import {Platform,StyleSheet, Text,View,Button,TextInput} from 'react-native';
import {StackNavigator} from 'react-navigation';
import MainScreen from './MainScreen.js';
import ProfileScreen from './ProfileScreen.js'

const feather = require('feather-icons')

type Props = {};

const App = StackNavigator({
  Main: {screen: MainScreen},
  Profile: {
   path: 'people/:name',
   screen: ProfileScreen
  }
});

export default App;