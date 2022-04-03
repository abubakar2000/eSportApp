import { StyleSheet, View } from 'react-native';
import React from 'react';
import 'react-native-gesture-handler';
import { AuthStack } from './routes/AuthStack';

import { Provider } from 'react-redux';
import store from './data/store';


const App = () => {
  return (
    <Provider store={store}>
      <View style={[styles.AppContainer]}>
        <View style={[styles.SafeAppContainer]}>
          <AuthStack />
        </View>
      </View>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  AppContainer: {
    height: '100%',
    width: '100%',
  },
  SafeAppContainer: {
    height: '100%',
    width: '100%',
  },
})