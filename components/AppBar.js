import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const AppBar = () => {
  return (
    <View style={[styles.AppBarContainer]}>
      <Text>App bar works</Text>
    </View>
  );
};

export default AppBar;

const styles = StyleSheet.create({
    AppBarContainer: {
        flex:1,
        backgroundColor:'red',
        width:'100%'
    }
})