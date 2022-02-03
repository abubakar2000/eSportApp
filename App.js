import { Text, View } from 'react-native';
import React from 'react';
import Login from './components/Login';

const App = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Login />
    </View>
  );
};

export default App;
