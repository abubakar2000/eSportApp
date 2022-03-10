import { SafeAreaView, StyleSheet, View } from 'react-native';
import React from 'react';
import Drawer from './routes/Drawer';

const App = () => {
  return (
    <View style={[styles.AppContainer]}>
      <View style={[styles.SafeAppContainer]}>
        <Drawer/>
      </View>

    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  AppContainer: {
    height: '100%',
    width: '100%',
    paddingTop:50,
  },
  SafeAppContainer: {
    height: '100%',
    width: '100%',
  },
})