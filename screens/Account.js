import React from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import { StyleSheet } from 'react-native'
import AppBar from '../components/AppBar'

import profilePicture from '../assets/10.jpg'

function Account({ navigation }) {
    return (
        <ScrollView >
            <AppBar navigation={navigation} whereTo={'Login'} showDrawer={false} title={"Profile"} />

            <View style={[styles.imageViewContainer]}>
                <Image source={profilePicture} style={[styles.profilePicture]} />
                <View style={[styles.emailUsernameContainer]}>
                    <Text style={[styles.usernameText]}>Amie</Text>
                    <Text style={[styles.userEmailText]}>am**8@gmail.com</Text>
                </View>
            </View>
        </ScrollView>
    )
}
export default Account

const styles = StyleSheet.create({
    imageViewContainer: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: 25,
        paddingTop:10,
    },
    profilePicture: {
        height: 80,
        width: 80,
        borderRadius: 50,
    },
    emailUsernameContainer: {
        justifyContent: 'center',
        flexDirection: 'column',
        margin: 20,
    },
    usernameText: {
        fontSize: 15,
        color: 'black',
        margin: 2
    },
    userEmailText: {
        fontSize: 12,
        color: 'gray',
        margin: 2
    }
});