import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

const AppBar = ({ title, navigation, whereTo, showDrawer, profilePicture,centerFocused = true }) => {
    const openNav = () => {
        navigation.openDrawer()
    }
    const onProfileClicked = () => {
        if (whereTo) {
            navigation.navigate(whereTo)
        } else {
            navigation.openDrawer()
        }
    }
    const onPressBack = () => {
        navigation.goBack()
    }
    
    return (
        <View style={[styles.container]}>
            <View style={[styles.containerContent]}>
                {
                    showDrawer === true &&
                    <TouchableOpacity style={styles.ico}>
                        <MaterialIcons name='menu' size={28} onPress={openNav} />
                    </TouchableOpacity>
                }
                {
                    showDrawer === false &&
                    <TouchableOpacity style={styles.ico}>
                        <MaterialIcons name='arrow-back-ios' size={24} onPress={onPressBack} />
                    </TouchableOpacity>
                }

                {
                    centerFocused === true &&
                    <Text style={[styles.headerText]}>{title}</Text>
                }
                {
                    centerFocused === false &&
                    <Text style={[styles.headerText2]}>{title}</Text>
                }

                <TouchableOpacity style={[styles.accountContainer]} onPress={onProfileClicked}>
                    <Image source={profilePicture} style={[styles.profilePicture]} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default AppBar;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 80,
        backgroundColor:'white',
        paddingTop:35
    },
    containerContent: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
    },
    headerText: {
        color: 'rebeccapurple',
        fontSize: 20,
        flex: 4,
        textAlign: 'center'
    },
    headerText2: {
        color: 'black',
        fontSize: 20,
        flex: 4,
        textAlign: 'left'
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    ico: {
        flex: 1,
    },
    accountContainer: {
        flex: 1,
        alignItems: 'flex-end'
    },
    profilePicture: {
        height: 30,
        width: 30,
        borderRadius: 50,
    }


})