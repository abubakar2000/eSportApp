import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import AppBar from './AppBar';

const Home = () => {
    return (
        <View style={[styles.container]}>
            <AppBar />
            <View style={{flex:9}}>

            </View>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    }
});