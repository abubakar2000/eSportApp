import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import AppBar from '../components/AppBar';

const Wallet = ({ navigation }) => {
    return (
        <SafeAreaView>
            <AppBar navigation={navigation} title={"Wallet"} showDrawer={false}/>
            <Text>My Wallet</Text>
        </SafeAreaView>
    );
};

export default Wallet;

const styles = StyleSheet.create({});
