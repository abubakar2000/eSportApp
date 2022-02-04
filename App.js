import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Drawer } from './routes/Drawer';

const App = () => {
  return (
    <View style={[styles.AppContainer]}>

      <Drawer />

    </View>
  );
};

export default App;
const styles = StyleSheet.create({
  AppContainer: {
    flex: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'black'
  },
  AppBarContainer: {
    flex: 1
  },
  routerOutletContainer: {
    backgroundColor: 'white',
    flex: 9
  }
})