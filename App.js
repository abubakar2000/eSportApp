import { Image, StyleSheet, Text, View } from 'react-native';
import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <View style={[styles.container]}>
        <Image source={{uri:'https://randomuser.me/api/portraits/women/10.jpg'}}
        style={[styles.img]}/>
        <Text style={[styles.text]}>Ammie</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 30,
    color: 'darkslateblue'
  },
  img: {
    margin:10,
    height:100,
    width:100,
    borderRadius:100 / 2,
  }
})