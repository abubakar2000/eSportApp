import { StyleSheet, Text, ScrollView, View, Image, TouchableOpacity, Modal, Pressable, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Picker } from '@react-native-picker/picker'
import AppBar from '../components/AppBar';
import image from '../assets/favicon.png';
import FormInputComponent from '../components/FormInputComponent';
import ProfilePicture from '../assets/10.jpg';
import axios from 'axios';
import apiip from '../serverConfig';
import { Dimensions } from 'react-native';
import { Alert } from 'react-native';
import { useSelector } from 'react-redux';

const Teams = ({ navigation }) => {

    const GameCategory = [
        {
            title: "Solo",
            info: {
                players: 1, substitute: 0,
            }
        },
        {
            title: "Duo",
            info: {
                players: 2, substitute: 2,
            }
        },
        {
            title: "Trio",
            info: {
                players: 3, substitute: 2,
            }
        },
        {
            title: "Squad",
            info: {
                players: 4, substitute: 2,
            }
        },
        {
            title: "5v5",
            info: {
                players: 5, substitute: 2,
            }
        },
        {
            title: "6v6",
            info: {
                players: 6, substitute: 2,
            }
        },
        {
            title: "7v7",
            info: {
                players: 7, substitute: 2,
            }
        },
        {
            title: "8v8",
            info: {
                players: 8, substitute: 2,
            }
        },
    ]
    const [SelectedCategory, setSelectedCategory] = useState("")

    const [GameList, setGameList] = useState([
        {
            GameName: "",
            GameLogo: "../assets/favicon.png",
        }
    ])

    // Retrieve Games List from Database
    const [GamesList, setGamesList] = useState([])

    // Get User Team List from Database
    const [AllTeams, setAllTeams] = useState([])
    const [SelectedGameTeams, setSelectedGameTeams] = useState([])

    const [NewMember, setNewMember] = useState("")
    const [TeamName, setTeamName] = useState("")

    useEffect(() => {
        const CancelToken = axios.CancelToken;
        const source = CancelToken.source();
        setMyTeam([])


        axios.get(`${apiip}/enlistgames`, { cancelToken: source.token })
            .then(res => {
                setGamesList(res.data)
            })
            .catch(err => {
                if (axios.isCancel(err)) {
                    console.log("Successfully aborted");
                } else {
                    console.log("Could abort the request loop");
                }
            })

        axios.get(`${apiip}/getteams_whole`, { cancelToken: source.token })
            .then(res => {
                setAllTeams(res.data)
                // console.log(AllTeams)
            })
            .catch(err => {
                if (axios.isCancel(err)) {
                    console.log("Successfully aborted");
                } else {
                    console.log("Could abort the request loop");
                }
            })
        setTimeout(() => {
            axios.get(`${apiip}/enlistgames`, { cancelToken: source.token })
                .then(res => {
                    setGamesList(res.data)
                })
                .catch(err => {
                    if (axios.isCancel(err)) {
                        console.log("Successfully aborted");
                    } else {
                        console.log("Could abort the request loop");
                    }
                })

            axios.get(`${apiip}/getteams_whole`, { cancelToken: source.token })
                .then(res => {
                    setAllTeams(res.data)
                    // console.log(AllTeams)
                })
                .catch(err => {
                    if (axios.isCancel(err)) {
                        console.log("Successfully aborted");
                    } else {
                        console.log("Could abort the request loop");
                    }
                })
        }, 5000);

        return () => {
            source.cancel()
        }
    }, [axios])

    // Get Game Team Type and All Teamd for Selected Game from Fetched Data

    const [SelectedGame, setSelectedGame] = useState(GameList[0]);
    const [GameTeamType, setGameTeamType] = useState([]);
    const [defaultTeamType, setDefaultTeamType] = useState("")

    function getGameTypes(gameName) {
        for (let i = 0; i < GamesList.length; i++) {
            if (GamesList[i].GameName == gameName)
                setGameTeamType(GamesList[i].GameTeamType)
        }
    }

    function changeSelectedGame(game) {
        setSelectedGame(game);
        getGameTypes(game.GameName);
        setDefaultTeamType("Choose a Team Type");
        setSelected(false);

        axios.post(`${apiip}/getteambygameid`,
            {
                GameID: game.GameID
            }
        )
            .then(res => {
                // all the teams that are present in teams information
                let allTeams = res.data

                if (allTeams !== null) {
                    axios.post(`${apiip}/getuserinfo`, {
                        "Email": emailState
                    })
                        .then(res1 => {
                            // Current user querying the teams information
                            let queryingUser = res1.data
                            allTeams.forEach(team => {
                                if (team.UsersInTeam.findIndex(memb => memb.Email === queryingUser.Email) !== -1) {
                                    Alert.alert("Your team already exists")
                                    setMyTeam(team.UsersInTeam)
                                    setTeamName(team.TeamName)
                                    setDefaultTeamType(team.TeamType)
                                }
                            })

                            if (allTeams.findIndex(team => team.UsersInTeam === queryingUser.User_uuid) !== -1) {
                                Alert.alert("Attention", "You're already part of a team")
                            }
                        })
                        .catch(err => {
                            console.log(err);
                            Alert.alert("Error!", "Are we connected?")
                        })
                } else {
                    Alert.alert("Start creating your team")
                    setTeamName("")
                    setDefaultTeamType("")
                    setMyTeam([])
                }
            })
            .catch(err => {
                console.log(err);
                Alert.alert("Error!", "Are we connected?")
            })
    }

    // Modal Functionality

    const [modalVisible, setModalVisible] = useState(false);
    const [selected, setSelected] = useState(false);

    function changeLabel(type) {
        setModalVisible(!modalVisible);
        setSelected(true);
        setDefaultTeamType(type);
    }

    function checkOpen() {
        if (SelectedGame === GameList[0]) {
            alert("Please select a game!");
        }
        else {
            setModalVisible(true);
        }
    }

    const emailState = useSelector(state => state.appState.email)
    const passwordState = useSelector(state => state.appState.password)

    // Create Teams for Games

    const [MyTeam, setMyTeam] = useState([])
    const [ShowTeamSelectorModel, setShowTeamSelectorModel] = useState(false)

    return (
        <View>
            <ScrollView style={[{ backgroundColor: 'rgb(240,240,240)' }]}>
                <AppBar whereTo={''} profilePicture={ProfilePicture} title={'My Teams'} showDrawer={false} navigation={navigation} />
                <View style={[styles.container]}>
                    <Text style={[styles.grayText]}>Choose a game to continue:</Text>
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
                        <FormInputComponent valueMutator={setTeamName} value={TeamName}
                            placeholder='Enter Team Name' label='Team Name' />
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
                                    <ScrollView style={{ height: 300 }}>
                                        {
                                            GameTeamType.map(type => {
                                                return (
                                                    <Pressable
                                                        key={type}
                                                        onPress={() => {
                                                            changeLabel(type)
                                                        }}
                                                        style={[styles.TeamTypeSelection]}>
                                                        <Text style={styles.textStylePopup}>{defaultTeamType === type && <Text>✔️</Text>} {type}</Text>
                                                    </Pressable>
                                                )
                                            })
                                        }
                                    </ScrollView>
                                </View>
                            </View>
                        </Modal>
                        <Pressable
                            style={[styles.button, styles.buttonOpen]}
                            onPress={() => checkOpen()}
                        >
                            <Text style={[selected ? styles.textStyle1 : styles.textStyle]}>{defaultTeamType}</Text>
                        </Pressable>
                    </View>
                </View>

                {/* Teams Implementation */}

                <View style={{ margin: 20, backgroundColor: "#fff", borderRadius: 8, alignItems: 'center' }}>
                    {
                        <View style={{
                            minHeight: 50, alignItems: 'center', justifyContent: 'center',
                            backgroundColor: 'white', borderRadius: 10, flexDirection: 'row',
                            paddingTop: 10, paddingBottom: 10
                        }}>

                            {
                                MyTeam.map(teamMate => (
                                    <View key={teamMate.User_uuid} style={{
                                        flexDirection: 'column',
                                        alignItems: 'center', justifyContent: 'center', marginLeft: 5, marginRight: 5, flexWrap: 'wrap'
                                    }}>
                                        <Image source={{ uri: `${apiip}/${teamMate.ProfileImage}` }} style={{ height: 30, width: 30, borderRadius: 15 }} />
                                        <Text style={{ fontSize: 11, marginTop: 5 }}>{teamMate.Fname + " " + teamMate.Lname}</Text>
                                    </View>
                                ))
                            }


                            <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                <TouchableOpacity
                                    style={styles.addCircle}
                                    onPress={() => {
                                        setShowTeamSelectorModel(true)
                                    }}>
                                    <Image source={require('../assets/plus.png')} style={{ width: 10, height: 10 }} />
                                </TouchableOpacity>
                                <Text style={{ fontSize: 11, marginTop: 5 }}>Add New</Text>
                            </View>
                            <Modal
                                visible={ShowTeamSelectorModel}
                                transparent={true}
                                animationType="slide"
                            >
                                <View style={{
                                    height: Dimensions.get('screen').height,
                                    width: Dimensions.get('screen').width,
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <View style={{
                                        minHeight: 100, width: Dimensions.get('screen').width - 100,
                                        backgroundColor: 'white', shadowColor: 'gray', shadowOpacity: 0.5,
                                        shadowRadius: 5, shadowOffset: { width: 0, height: 10, }, borderRadius: 5,
                                        padding: 15, flexDirection: 'column', justifyContent: 'space-between'
                                    }}>

                                        <TextInput value={NewMember}
                                            onChangeText={e => setNewMember(e)}
                                            style={{ padding: 10, backgroundColor: 'rgb(240,240,240)', borderRadius: 5, marginBottom: 10 }}
                                            placeholder={"Enter ID of the user"} />
                                        <TouchableOpacity
                                            onPress={() => {

                                                axios.post(`${apiip}/getuserinfo`, {
                                                    Email: NewMember
                                                })
                                                    .then(res => {
                                                        console.log(res.data);
                                                        if (res.data.Email !== "") {
                                                            setMyTeam([...MyTeam, res.data])
                                                            setNewMember("")
                                                            setShowTeamSelectorModel(false)
                                                        } else {
                                                            Alert.alert("Wrong ID")
                                                        }
                                                    })
                                                    .catch(err => {
                                                        Alert.alert("General Error")
                                                    })


                                            }}
                                            style={{ padding: 10, backgroundColor: '#374e82', borderRadius: 5 }}
                                            placeholder={"Enter ID of the user"} >
                                            <Text style={{ color: 'white' }}>Add to team</Text>
                                        </TouchableOpacity>

                                    </View>
                                </View>
                            </Modal>
                        </View>
                    }
                </View>
                <View style={[styles.footerAndSave]}>
                    <Text style={[styles.notice]}>Make sure to fill proper details & avoid unecessary interruption.z</Text>
                    <View style={[styles.grow]}>
                        <View>
                            <TouchableOpacity
                                onPress={() => {

                                    if (TeamName !== "") {
                                        if (MyTeam.length !== 0) {
                                            axios.post(`${apiip}/addteam`,
                                                {
                                                    "TeamID": "Some id",
                                                    "TeamName": TeamName,
                                                    "TeamType": defaultTeamType,
                                                    "GameID": SelectedGame.GameID,
                                                    "UsersInTeam": MyTeam
                                                })
                                                .then(res => {
                                                    console.log(res.data);
                                                    tempUsers = []
                                                    navigation.navigate("Home")
                                                })
                                                .catch(err => {

                                                })
                                        } else {
                                            Alert.alert("Invalid team")
                                        }
                                    } else {
                                        Alert.alert("Please enter valid team name")
                                    }
                                }}
                                style={[styles.saveButton]}>
                                <Text style={[styles.saveButtonInside]}>
                                    Save Details
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={{ height: 400 }}></View>

            </ScrollView >
        </View >
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
        paddingLeft: 10,
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
        margin: 5
    },
    gameName: {
        marginTop: 10,
        marginBottom: 1,
        fontSize: 12,
    },
    selectionForm: {
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 20,
        marginRight: 20,
        flexDirection: 'row'
    },
    selectedGameTitle: {
        color: '#374E82'
    },
    footerAndSave: {
        padding: 20,
        flexDirection: 'row',
        flex: 1
    },
    notice: {
        flex: 3,
        padding: 5,
        fontSize: 12,
        color: 'gray'
    },
    grow: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    saveButton: {
        borderRadius: 5,
        backgroundColor: '#374E82',
    },
    saveButtonInside: {
        color: 'white',
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 20,
        paddingRight: 20,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 5,
        padding: 15,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        height: 300
    },
    button: {
        borderRadius: 5,
        padding: 10,
        elevation: 2,
        borderBottomColor: '#374E82',
        borderBottomWidth: 2,
    },
    TeamTypeSelection: {
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: "#fff",
        margin: 10
    },
    textStyle: {
        color: "#C6C6C8",
        fontSize: 14,
    },
    textStyle1: {
        color: "#000",
        fontSize: 14,
    },
    textStylePopup: {
        color: "#000",
        fontSize: 14,
        padding: 10,
        marginBottom: 10,
        backgroundColor: 'rgb(230,230,230)',
        width: Dimensions.get('screen').width - 150,
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
    },
    teamView: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        padding: 10,
        width: '90%'
    },
    teamViewDisabled: {
        display: 'none'
    },
    addCircle: {
        width: 30,
        height: 30,
        backgroundColor: '#DCDCDC',
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
    }
})