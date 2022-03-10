import { StyleSheet, Text, ScrollView, View, Image, TouchableOpacity, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import AppBar from '../components/AppBar';
import image from '../assets/favicon.png';
import FormInputComponent from '../components/FormInputComponent';

const Teams = ({ navigation }) => {
    const [GameList, setGameList] = useState([
        {
            name: "BGMI",
            icon: "../assets/favicon.png"
        },
        {
            name: "Free fire",
            icon: "../assets/favicon.png"
        },
        {
            name: "COD Mobile",
            icon: "../assets/favicon.png"
        },
        {
            name: "Prototype",
            icon: "../assets/favicon.png"
        },
        {
            name: "COD India",
            icon: "../assets/favicon.png"
        },
        {
            name: "BGMI2",
            icon: "../assets/10.jpg"
        },
    ])
    const [SelectedGame, setSelectedGame] = useState(GameList[0])
    return (
        <View>
            <ScrollView style={[{ backgroundColor: 'rgb(240,240,240)' }]}>
                <AppBar whereTo={''} title={'My Teams'} showDrawer={false} navigation={navigation} />
                <View style={[styles.container]}>
                    <Text style={[styles.grayText]}>Choose a game to continue</Text>
                    <View style={[styles.gameListContainer]}>
                        {
                            GameList.map(singleGame => {
                                return (
                                    <TouchableOpacity
                                        key={singleGame.name}
                                        onPress={() => setSelectedGame(singleGame)}
                                        style={[styles.gameStyle,
                                        singleGame.name === SelectedGame.name ? styles.gameStyleActive : null]}>
                                        <Image source={image} style={[styles.gameLogo]} />
                                        <Text style={[styles.grayText, styles.gameName]}>{singleGame.name}</Text>
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </View>
                    <View style={[styles.selectionForm]}>
                        <Text>Game Selected: </Text>
                        <Text style={[styles.selectedGameTitle]}>{SelectedGame.name} </Text>
                    </View>
                    <FormInputComponent placeholder='Enter Team Name' label='Team name' />
                    <FormInputComponent placeholder='Enter Team Type' label='Team Type' />
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
                <View style={{ height: 400 }}></View>

            </ScrollView>
        </View>
    )
}

export default Teams

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    grayText: {
        color: 'gray',
    },
    gameListContainer: {
        marginTop: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
    },
    gameStyle: {
        minHeight: 100,
        minWidth: 100,
        backgroundColor: 'white',
        margin: 5,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    gameStyleActive: {
        borderWidth: 2,
        borderColor: 'blue'
    },
    gameLogo: {
        height: 60,
        width: 60,
        borderRadius: 50,
    },
    gameName: {
        marginTop: 10,
        marginBottom: 1,
        fontSize: 12,
    },
    selectionForm: {
        margin: 20,
        flexDirection: 'row'
    },
    selectedGameTitle: {
        color: 'blue'
    },
    footerAndSave: { padding: 20, flexDirection: 'row', flex: 1 },
    notice: { flex: 3, padding: 5, fontSize: 12, color: 'gray' },
    grow: { flex: 2, justifyContent: 'center', alignItems: 'center', },
    saveButton: { borderRadius: 5, backgroundColor: 'blue', },
    saveButtonInside: { color: 'white', paddingTop: 8, paddingBottom: 8, paddingLeft: 20, paddingRight: 20, },
})