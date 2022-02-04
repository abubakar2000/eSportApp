import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Login from './components/Login';
import AppBar from './components/AppBar';
import Home from './components/Home';

const App = () => {
  return (
    <View style={[styles.AppContainer]}>
      {/* Routing will be done later here */}
      <View style={[styles.AppBarContainer]}>
        <AppBar />
      </View>
      <View style={[styles.routerOutletContainer]}>
        <Home />
      </View>
    </View>
  );
};

export default App;
const styles = StyleSheet.create({
  AppContainer: {
    flex: 10,
    borderBottomWidth:1,
    borderBottomColor:'black'
  },
  AppBarContainer: {
    flex: 1
  },
  routerOutletContainer: {
    backgroundColor:'white',
    flex:9
  }
})