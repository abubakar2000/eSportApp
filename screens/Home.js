import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import React from 'react';
import AppBar from '../components/AppBar'

const Home = ({navigation}) => {
    return (
        <View style={[styles.container, styles.center]}>
            <AppBar navigation={navigation} title={"HAEXR"} whereTo={'AccountInformation'} showDrawer={true}/>
            <Text>Ayesha's code here</Text>
            <Text>swipe from left to open drawer</Text>
            <Text>Home component </Text>
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
        justifyContent: 'flex-start'
    }
});