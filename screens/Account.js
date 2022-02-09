import React, { useState } from 'react'
import { Button, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { StyleSheet } from 'react-native'
import AppBar from '../components/AppBar'

import profilePicture from '../assets/10.jpg'
import gameImage from '../assets/favicon.png';

import FormInputComponent from '../components/FormInputComponent'
import GamelgnandidComponent from '../components/GamelgnandidComponent'

function Account({ navigation }) {

    const [FirstName, setFirstName] = useState("Amie");
    const [LastName, setLastName] = useState("Richards")
    const [Phone, setPhone] = useState("12345678")
    const [Email, setEmail] = useState("ammie78@gmail.com")
    const [Address, setAddress] = useState("House 79b, Gali 7, Kashmir Rd 51310, Punjab")



    return (
        <ScrollView style={[{ backgroundColor: 'rgb(240,240,240)' }]}>
            <AppBar title={"Profile"} showDrawer={false} navigation={navigation} whereTo={''} />
            <View style={[styles.topContainer]}>
                <View style={[styles.imageContainer]}>
                    <Image source={profilePicture} style={[styles.profilePicture]} />
                </View>
                <View style={[styles.usernameEmailContainer]}>
                    <Text style={[styles.username]}>Ammie</Text>
                    <Text style={[styles.email, styles.grayText]}>amie**@gmail.com</Text>
                </View>
            </View>
            <View style={[styles.secondContainer]}>
                <Text style={[styles.grayText]}>Personal Details</Text>
                <Text style={[styles.grayText]}>UID: GLPD098</Text>
            </View>

            <View style={[styles.inputGroupContainer]}>
                <FormInputComponent label='First name' placeholder={FirstName} keyboardType={'ascii-capable'} />
                <FormInputComponent label='Last name' placeholder={LastName} keyboardType={'ascii-capable'} />
                <FormInputComponent label='Phone' placeholder={Phone} keyboardType={'phone-pad'} />
                <FormInputComponent label='Email' placeholder={Email} keyboardType={'email-address'} />
                <FormInputComponent label='Address' placeholder={Address} keyboardType={'ascii-capable'} />
            </View>
            <View style={[styles.gamesDetailSection]}>
                <Text style={[styles.grayText, styles.padded]}>Game Details</Text>
                <Text style={[styles.blueText, styles.padded]}>Enter Game lgn & Id here</Text>
                <GamelgnandidComponent title={'BGMI'} gameImage={gameImage} />
                <GamelgnandidComponent title={'Free Fire'} gameImage={gameImage} />
                <GamelgnandidComponent title={'Call of Duty'} gameImage={gameImage} />
            </View>
            <View style={[styles.footerAndSave]}>
                <Text style={[styles.notice]}>Make sure to fill proper details & avoid unecessary interruption</Text>
                <View style={[styles.grow]}>
                    <View>
                        <TouchableOpacity style={[styles.saveButton]}>
                            <Text style={[styles.saveButtonInside]}>
                                Save Details
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={[{ height: 400, }]}></View>
        </ScrollView>
    )
}
export default Account

const styles = StyleSheet.create({
    topContainer: { width: '100%', flex: 1, flexDirection: 'row', },
    imageContainer: { flex: 1, },
    profilePicture: { borderRadius: 50, height: 100, width: 100, margin: 20, },
    usernameEmailContainer: { flex: 2, justifyContent: 'center', },
    username: { marginLeft: 20, fontSize: 15, },
    email: { marginLeft: 20, fontSize: 12, },
    secondContainer: { width: '100%', flexDirection: 'row', justifyContent: 'space-between', padding: 20, },
    grayText: { color: 'gray', },
    blueText: { color: 'blue', },
    inputGroupContainer: { paddingLeft: 10, paddingRight: 10, width: '100%', },
    gamesDetailSection: { width: '100%', padding: 10, },
    padded: { padding: 10, },
    footerAndSave: { padding: 20, flexDirection: 'row', flex: 1, },
    notice: { flex: 3, padding: 5, fontSize: 12, color: 'gray', },
    grow: { flex: 2, justifyContent: 'center', alignItems: 'center', },
    saveButton: { borderRadius: 5, backgroundColor: 'blue', },
    saveButtonInside: { color: 'white', paddingTop: 8, paddingBottom: 8, paddingLeft: 20, paddingRight: 20, },
});