import React, { Component } from 'react';
import {Platform,StyleSheet, Text,View,Button,TextInput} from 'react-native';
import {StackNavigator} from 'react-navigation';

const feather = require('feather-icons')

type Props = {};

export default class ProfileScreen extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>我喜欢你哈</Text>
        <Text>fff</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
