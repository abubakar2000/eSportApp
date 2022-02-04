import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const AppBar = () => {
    return (
        <View style={[styles.container, styles.center]}>
            <View style={[styles.HorizontalStack, styles.center]}>
                <Text style={[{ flex: 2 }]}>BG</Text>
                <Text style={[{ flex: 4 }]}>App bar works</Text>
                <Text style={[{ flex: 1.5 }]}>App bar works</Text>
                <Text style={[{ flex: 2.5 }]}>App bar works</Text>

            </View>
        </View>
    );
};

export default AppBar;

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    HorizontalStack: {
        flex: 10,
        height: '100%',
        width: '100%',
        flexDirection: 'row',
        padding: 5
    }
})