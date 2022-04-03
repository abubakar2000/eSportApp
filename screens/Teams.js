import { StyleSheet, Text, ScrollView, View, Image, TouchableOpacity, Picker } from 'react-native'
import React, { useState, useEffect } from 'react'
import AppBar from '../components/AppBar';
import image from '../assets/favicon.png';
import FormInputComponent from '../components/FormInputComponent';
import ProfilePicture from '../assets/10.jpg';
import axios from 'axios';
import apiip from '../serverConfig';

const Teams = ({ navigation }) => {
    const [GameList, setGameList] = useState([
        {
            GameName: "BGMI",
            GameLogo: "../assets/favicon.png"
        }
    ])

    // Retrieve Games List from Database
    const [GamesList, setGamesList] = useState([])

    useEffect(() => {
        const CancelToken = axios.CancelToken;
        const source = CancelToken.source();

        axios.get(`${apiip}/enlistgames`,{cancelToken:source.token})
            .then(res => {
                setGamesList(res.data)
            })
            .catch(err => {
                if (axios.isCancel(err)) {
                    console.log("Successfully aborted");
                } else{
                    console.log("Could abort the request loop");
                }
            })  
        return () => {
            source.cancel()
        }
    }, [axios, GamesList, setGamesList])

    // Get Game Team Type from Fetched Data

    const [SelectedGame, setSelectedGame] = useState(GameList[0]);
    const [GameTeamType, setGameTeamType] = useState([]);

    function getGameTypes(gameName) {
        for(let i = 0; i < GamesList.length; i++) {
            if (GamesList[i].GameName == gameName)
                setGameTeamType(GamesList[i].GameTeamType)
        }
    }

    function changeSelectedGame(game) {
        setSelectedGame(game);
        getGameTypes(game.GameName);
    }

    // Dropdown Menu Selection

    const [selectedLabel, setSelectedLabel] = useState("");

    function show(value) {
        setSelectedLabel(value)
    }

    function loadDropdownValues() {
        return (
            GameTeamType.map(type => {
                return (
                    <Picker.Item label={type} value={type} />
                )
            })
        )
    }

    return (
        <View>
            <ScrollView style={[{ backgroundColor: 'rgb(240,240,240)' }]}>
                <AppBar whereTo={''} profilePicture={ProfilePicture} title={'My Teams'} showDrawer={false} navigation={navigation} />
                <View style={[styles.container]}>
                    <Text style={[styles.grayText]}>Choose a game to continue</Text>
                    <View style={[styles.gameListContainer]}>
                        {
                            GamesList.map(singleGame => {
                                return (
                                    <TouchableOpacity
                                        key={singleGame.GameID}
                                        onPress={() => changeSelectedGame(singleGame)}
                                        style={[styles.gameStyle,
                                        singleGame.GameName === SelectedGame.GameName ? styles.gameStyleActive : null]}>
                                        <Image source={{ uri: `${apiip}/${singleGame.GameLogo}` }} style={[styles.gameLogo]} />
                                        <Text style={[styles.grayText, styles.gameName]}>{singleGame.GameName}</Text>
                                    </TouchableOpacity> 
                                )
                            })
                        }
                    </View>
                    <View style={[styles.selectionForm]}>
                        <Text>Game Selected: </Text>
                        <Text style={[styles.selectedGameTitle]}>{SelectedGame.GameName} </Text>
                    </View>
                    <View>
                        <FormInputComponent placeholder='Enter Team Name' label='Team Name' />
                    </View>
                    <View>
                        <Picker
                            selectedValue={selectedLabel}
                            onValueChange={show.bind()}
                        >
                                <Picker.Item label="Solo" value="0" />
                                <Picker.Item label="Duo" value="1" />
                                <Picker.Item label="Squad" value="2" />
                        </Picker>
                    </View>
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
    dropdownContainer: {
        paddingTop: 40,
        alignItems: "center"
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
        borderColor: '#374E82'
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
        color: '#374E82'
    },
    footerAndSave: { padding: 20, flexDirection: 'row', flex: 1 },
    notice: { flex: 3, padding: 5, fontSize: 12, color: 'gray' },
    grow: { flex: 2, justifyContent: 'center', alignItems: 'center', },
    saveButton: { borderRadius: 5, backgroundColor: '#374E82', },
    saveButtonInside: { color: 'white', paddingTop: 8, paddingBottom: 8, paddingLeft: 20, paddingRight: 20, },
})