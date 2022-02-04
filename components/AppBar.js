import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const AppBar = () => {
    return (
        <View style={[styles.container, styles.center]}>
            <Text>App bar works</Text>
        </View>
    );
};

export default AppBar;

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%'
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center'
    }
})