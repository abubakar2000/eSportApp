import { StyleSheet, View, Text } from 'react-native';
import React from 'react';
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
} from 'react-native-reanimated';

import 'react-native-gesture-handler';
import AppDrawer from './routes/Drawer';



const App = () => {
  return (
    <View style={[styles.AppContainer]}>
      <View style={[styles.SafeAppContainer]}>
        <AppDrawer />
      </View>
    </View>
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