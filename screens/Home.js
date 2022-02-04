import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const Home = () => {
    return (
        <View style={[styles.container, styles.center]}>
            <Text>Ayesha's code</Text>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        width: '100%',
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center'
    }
});