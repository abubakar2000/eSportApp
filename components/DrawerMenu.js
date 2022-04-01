import { Button, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import React from 'react';
import { FontAwesome, FontAwesome5, Fontisto, MaterialCommunityIcons, MaterialIcons, SimpleLineIcons } from '@expo/vector-icons';
import profilePicture from '../assets/10.jpg'


const DrawerMenu = ({ navigation }) => {
    const onNavigate = (screen) => {
        navigation.navigate(screen)
    }
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={[styles.container]}>
                    <Image source={profilePicture} style={[styles.profilePicture]} />
                    <Text style={[styles.username]}>Ammie</Text>
                    <Text style={[styles.email]}>ammie78@gmail.com</Text>
                    <TouchableOpacity style={[styles.navTab]} onPress={() => onNavigate('Home')}>
                        <SimpleLineIcons style={[styles.tabIco]} name='home' size={22} />
                        <Text style={[styles.navTabText]}>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.navTab]} onPress={() => onNavigate('Wallet')}>
                        <SimpleLineIcons style={[styles.tabIco]} name='wallet' size={22} />
                        <Text style={[styles.navTabText]}>Wallet</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.navTab]} onPress={() => onNavigate('Matches')}>
                        <Fontisto style={[styles.tabIco]} name='prescription' size={22} />
                        <Text style={[styles.navTabText]}>My Matches</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.navTab]} onPress={() => onNavigate('Teams')}>
                        <FontAwesome5 style={[styles.tabIco]} name='users' size={22} />
                        <Text style={[styles.navTabText]}>My Teams</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.navTab]} onPress={() => onNavigate('Support')}>
                        <MaterialIcons style={[styles.tabIco]} name='support-agent' size={22} />
                        <Text style={[styles.navTabText]}>Support</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.navTab]} onPress={() => navigation.pop()}>
                        <MaterialIcons style={[styles.tabIco]} name='logout' size={22} />
                        <Text style={[styles.navTabText]}>Logout</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default DrawerMenu;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        height: '100%',
        width: '100%',
        paddingTop: 50,
    },
    profilePicture: {
        height: 100,
        width: 100,
        borderRadius: 50,
    },
    username: {
        marginTop: 15,
        marginBottom: 5,
        fontSize: 15,
    },
    email: {
        color: 'gray',
        fontSize: 13,
        marginBottom: 30,
    },
    navTab: {
        flexDirection: 'row',
        width: '90%',
        marginTop: 15,
        marginBottom: 15,
        paddingLeft: 20
    },
    navTabText: {
        height: '100%',
        backgroundColor: 'white',
        padding: 2,
    },
    tabIco: {
        width: '20%'
    }
});
