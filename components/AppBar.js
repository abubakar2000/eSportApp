import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

const AppBar = () => {
    return (
        <View style={[styles.container, styles.center]}>
            <View style={[styles.HorizontalStack, styles.center]}>

                <TouchableOpacity style={[{ flex: 2.5 }]}>
                    <Text>BG</Text>
                </TouchableOpacity>
                <Text style={[{ flex: 4 }]}>App name</Text>
                <Text style={[{ flex: 1.5 }]}>Notif</Text>
                <Text style={[{ flex: 2 }]}>Coins</Text>
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
        padding: 10
    }
})