import { StyleSheet, Text, ScrollView, View, Image, TouchableOpacity, Modal, Pressable } from 'react-native'
import React, { useState, useEffect } from 'react'
import {Picker} from '@react-native-picker/picker'
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
        },
        {
            GameName: "BGMI",
            GameLogo: "../assets/favicon.png"
        },
        {
            GameName: "BGMI",
            GameLogo: "../assets/favicon.png"
        },
        {
            GameName: "BGMI",
            GameLogo: "../assets/favicon.png"
        },
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
    const [defaultTeamType, setDefaultTeamType] = useState("Choose a Team Type");

    function getGameTypes(gameName) {
        for(let i = 0; i < GamesList.length; i++) {
            if (GamesList[i].GameName == gameName)
                setGameTeamType(GamesList[i].GameTeamType)
        }
    }

    function changeSelectedGame(game) {
        setSelectedGame(game);
        getGameTypes(game.GameName);
        setDefaultTeamType("Choose a Team Type");
    }

    // Modal Functionality

    const [modalVisible, setModalVisible] = useState(false);
    const [selected, setSelected] = useState(false);

    function changeLabel (type) {
        setModalVisible(!modalVisible);
        setSelected(true);
        setDefaultTeamType(type);
    }

    return (
        <View>
            <ScrollView style={[{ backgroundColor: 'rgb(240,240,240)' }]}>
                <AppBar whereTo={''} profilePicture={ProfilePicture} title={'My Teams'} showDrawer={false} navigation={navigation} />
                <View style={[styles.container]}>
                    <Text style={[styles.grayText]}>Choose a game to continue</Text>
                    <ScrollView horizontal={true} style={[styles.gameListContainer]}>
                        {
                            GamesList.map(singleGame => {
                                return (
                                    <TouchableOpacity
                                        key={singleGame.GameID}
                                        onPress={() => changeSelectedGame(singleGame)}
                                        style={[styles.gameStyle,
                                        singleGame.GameName === SelectedGame.GameName ? styles.gameStyleActive : null]}>
                                        <Image source={{ uri: `${apiip}/${singleGame.GameLogo}` }} style={[styles.gameLogo]} />
                                        <Text style={[styles.grayText2, styles.gameName]}>{singleGame.GameName}</Text>
                                    </TouchableOpacity> 
                                )
                            })
                        }
                      
                    </ScrollView>
                    <View style={[styles.selectionForm]}>
                        <Text>Game Selected: </Text>
                        <Text style={[styles.selectedGameTitle]}>{SelectedGame.GameName} </Text>
                    </View>
                    <View>
                        <FormInputComponent placeholder='Enter Team Name' label='Team Name' />
                    </View>
                    <View>
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={modalVisible}
                            onRequestClose={() => {
                            Alert.alert("Modal has been closed.");
                            setModalVisible(!modalVisible);
                            }}
                        >
                            <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <Text style={styles.modalText}>title</Text>
                                {
                                    GameTeamType.map(type => {
                                        return (
                                            <Pressable
                                                key={type}
                                                onPress={() => changeLabel(type)}
                                                style={[styles.button, styles.buttonClose]}>
                                                <Text style={styles.textStyle}>{type}</Text>
                                            </Pressable> 
                                        )
                                    })
                                }
                            </View>
                            </View>
                        </Modal>
                        <Pressable
                            style={[styles.button, styles.buttonOpen]}
                            onPress={() => setModalVisible(true)}
                        >
                            <Text style={[styles.textStyle, selected ? styles.textStyle1 : null]}>{defaultTeamType}</Text>
                        </Pressable>
                    </View>
                </View>
                <View style={[styles.footerAndSave]}>
                    <Text style={[styles.notice]}>Make sure to fill proper details & avoid unecessary interruption.z</Text>
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
        padding: 0,
    },
    dropdownContainer: {
        paddingTop: 0,
        alignItems: "center"
    },
    grayText: {
        color: 'gray',
        margin: 20
    },
    grayText2: {
        color: 'gray',
        padding: 0
    },
    gameListContainer: {
        marginBottom: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingLeft:10,
    },
    gameStyle: {
        minHeight: 100,
        minWidth: 100,
        backgroundColor: 'white',
        margin: 5,
        padding: 10,
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
        margin:5
    },
    gameName: {
        marginTop: 10,
        marginBottom: 1,
        fontSize: 12,
    },
    selectionForm: {
        marginTop: 10,
        marginBottom: 10,
        marginLeft:20,
        marginRight:20,
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

    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 5,
        padding: 10,
        elevation: 2,
        borderBottomColor: '#374E82',
        borderBottomWidth: 2,
      },
      buttonOpen: {
        backgroundColor: "#fff",
        margin:10
      },
      buttonClose: {
      },
      textStyle: {
        color: "#C6C6C8",
        fontSize: 14,
      },
      textStyle1: {
          color: "#000",
        fontSize: 14,
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      }
})