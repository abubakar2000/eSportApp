import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import AppBar from '../components/AppBar';

const Wallet = ({ navigation }) => {
    return (
        <View>
            <AppBar navigation={navigation} title={"Wallet"} showDrawer={false}/>
            <Text>My Wallet</Text>
        </View>
    );
};

export default Wallet;

const styles = StyleSheet.create({});
