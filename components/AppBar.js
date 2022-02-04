import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

const AppBar = ({ title, navigation }) => {
    const openNav = () => {
        navigation.openDrawer()
    }
    return (
        <View style={[styles.container]}>
            <View style={[styles.containerContent]}>
                <MaterialIcons name='menu' size={28} onPress={openNav} style={styles.ico} />
                <Text style={[styles.headerText]}>{title}</Text>
            </View>
        </View>
    );
};

export default AppBar;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 60,
    },
    containerContent: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
    },
    headerText: {
        fontStyle: 'italic',
        fontWeight: 'bold',
        color: 'rebeccapurple',
        fontSize: 20
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    ico: {

    }

})