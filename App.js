import { SafeAreaView, StyleSheet, View } from 'react-native';
import React from 'react';
import { Drawer } from './routes/Drawer';

const App = () => {
  return (
    <View style={[styles.AppContainer]}>
      <SafeAreaView style={[styles.SafeAppContainer]}>
        <Drawer />
      </SafeAreaView>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  AppContainer: {
    height: '100%',
    width: '100%'
  },
  SafeAppContainer: {
    height: '100%',
    width: '100%'
  },
})