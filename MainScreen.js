import React, { Component } from 'react';
import {Platform,StyleSheet, Text,View,Button,TextInput} from 'react-native';
import {StackNavigator} from 'react-navigation';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const feather = require('feather-icons')

type Props = {};

export default class MainScreen extends Component<Props> {
  constructor(props) {
      super(props);
      this.state = {text: ''};
  }

  render() {
    return (

      <View style={styles.container}>
        <TextInput
                style={{height: 40}}
                placeholder="Type here to translate!"
                onChangeText={(text) => this.setState({text})}
        />
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
        <Text>我喜欢你哈</Text>
        <Text>fff</Text>
        <Button   onPress={() => this.props.navigation.navigate('Profile', {name: 'Lucy'})}
        title="Press Me">Press Me</Button>
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
