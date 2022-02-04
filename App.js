import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Login from './components/Login';
import AppBar from './components/AppBar';
import Home from './components/Home';

const App = () => {
  return (
    <View style={[styles.AppContainer]}>
      {/* <Login /> */}
      <Home />
    </View>
  );
};

export default App;
const styles = StyleSheet.create({
  AppContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  }
})