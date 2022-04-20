import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import AppBar from '../components/AppBar';
import ProfilePicture from '../assets/10.jpg';
import Gif from '../components/Gif'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialCommunityIcons, MaterialIcons, AntDesign } from '@expo/vector-icons'
import { Animated } from 'react-native';
import ActionSheet from '../components/ActionSheet';
import axios from 'axios';
import apiip from '../serverConfig';
import { Dimensions } from 'react-native';
import { useSelector } from 'react-redux';
import { Alert } from 'react-native';

const RoundsInformation = ({ navigation, route }) => {

    const [Tournament, setTournament] = useState(route.params.Tournament)
    const [GameInformation, setGameInformation] = useState(null)

    const emailState = useSelector(state => state.appState.email)

    const [OthersInWallet, setOthersInWallet] = useState([
        {
            othersImage: require('../assets/wallet/transaction.png'),
            othersTitle: 'Schedule'
        },
        {
            othersImage: require('../assets/wallet/reward.png'),
            othersTitle: 'Winnings'
        },
        {
            othersImage: require('../assets/wallet/coupons.png'),
            othersTitle: 'Rules'
        },
    ])

    // Action Sheet
    const [alignment, setAlignment] = useState(new Animated.Value(0));
    const showActionSheet = () => {
        Animated.timing(alignment, {
            toValue: 1,
            duration: 500,
            useNativeDriver: false
        }).start();

    }


    const registerForTournament = () => {
        if (GameInformation !== null) {
            axios.post(`${apiip}/getteambygameid`,
                {
                    GameID: GameInformation.GameID
                })
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
                                        // setMyTeam(team.UsersInTeam)
                                        // setTeamName(team.TeamName)
                                        // setDefaultTeamType(team.TeamType)
                                        console.log(team);

                                        axios.post(`${apiip}/addteamintournamentgroup`,
                                            {
                                                "Tournament": Tournament.Title,
                                                "Qualifier": route.params.GameRound,
                                                "Group": {
                                                    "GroupID": "string222",
                                                    "MatchID": "string",
                                                    "Group": "string",
                                                    "Teams": [],
                                                    "Rounds": [],
                                                    "Results": [],
                                                    "StartingAtTime": "1:00",
                                                    "Duration": "1",
                                                    "StartingAtDate": "5/3/2022",
                                                    "RoomID": "NA",
                                                    "Password": "NA"
                                                },
                                                "Team": {
                                                    "TeamID": "string aa",
                                                    "TeamName": "string",
                                                    "GameID": GameInformation.GameID,
                                                    "UsersInTeam": team
                                                }
                                            }
                                        )
                                            .then(res => {
                                                Alert.alert("Successfully Added")
                                            })
                                            .catch(err => {
                                                console.log(err);
                                            })



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
                        Alert.alert("Make your team first please")
                        // setTeamName("")
                        // setDefaultTeamType("")
                        // setMyTeam([])
                    }
                })
                .catch(err => {
                    console.log(err);
                    Alert.alert("Error!", "Are we connected?")
                })
        }
    }

    useEffect(() => {


        console.log(")))))))))))))))))))))))))))))");
        console.log(route.params);
        console.log("(((((((((((((((((((((((((((((");
        console.log("-> Tournaments");
        console.log(route.params.Tournament.Title);
        console.log("-> Qualifier");
        console.log(route.params.GameRound.QualifierName);


        setTournament(route.params.Tournament)

        const CancelToken = axios.CancelToken;
        const source = CancelToken.source();

        setTournament(route.params.Tournament)

        axios.post(`${apiip}/getgameinfo`, {
            "gameid": route.params.Tournament.GameID
        }, { cancelToken: source.token })
            .then(res => {
                setGameInformation(res.data)
                // console.log(`${apiip}/${GameInformation.GameLogo}`);
            })
            .catch(err => {
                if (axios.isCancel(err)) {
                    // console.log("Successfully aborted");
                } else {
                    // console.log("Could abort the request loop");
                }
            })



        return () => {
        }
    }, [route, axios])

    const onNavigateToRoundsInformation = (roundObject) => {
        console.log(roundObject);
        navigation.navigate("RoundsInformation", {
            GameRound: roundObject,
            GameID: Tournament.GameID
        })
    }

    return (
        <ScrollView>
            {
                (GameInformation !== undefined && GameInformation !== null && GameInformation.GameName !== undefined && GameInformation.GameName !== null) &&
                <AppBar centerFocused={false} navigation={navigation} profilePicture={ProfilePicture} title={GameInformation.GameName}
                    showDrawer={false} whereTo={''} />
            }
            <View style={{ width: '100%', }}>
                <ScrollView style={{}} horizontal={true} >
                    <TouchableOpacity>
                        <Gif />
                    </TouchableOpacity>
                </ScrollView>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', marginRight: 15, }}>
                <Text style={{ textAlign: 'right', marginRight: 5, }}>Swipe to see more</Text>
                <MaterialIcons name='navigate-next' size={22} />
            </View>
            <View style={{ flexDirection: 'row', width: '100%', padding: 15 }}>
                <View style={{ flex: 1 }}>
                    <Text style={{ marginBottom: 5, fontSize: 18 }}>BGMI Match #7768</Text>
                    <Text style={{ marginBottom: 5, fontSize: 16 }}>Haexr Esports</Text>
                    <Text style={{ marginBottom: 5, fontSize: 12, color: 'gray' }}>Registrations Ends on 06/06/2020</Text>
                </View>
                <View style={{ flex: 1, alignItems: 'flex-end', }}>
                    <View style={{ flexDirection: "row", alignItems: 'center', marginBottom: 5 }}>
                        <MaterialCommunityIcons name='trophy' size={22} style={{ marginRight: 5 }} />
                        <Text style={{ fontSize: 16 }}>100007₹ Prizepool</Text>
                    </View>
                    <Text style={{ fontSize: 12, marginBottom: 10 }}>Entry Fee: 230 Coins</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15 }}>
                        <AntDesign name='team' size={22} style={{ marginRight: 5 }} />
                        <Text>69/1000</Text>
                    </View>
                    <TouchableOpacity style={{ backgroundColor: "#384d83", borderRadius: 5 }}>
                        <Text
                            onPress={registerForTournament}
                            style={{
                                fontSize: 15,
                                color: 'white', paddingTop: 10, paddingBottom: 10,
                                paddingLeft: 20, paddingRight: 20
                            }}>Book Slot</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{ flexDirection: 'row', flexWrap: 'wrap', padding: 15 }}>
                {
                    OthersInWallet.map(other => (
                        <TouchableOpacity
                            onPress={showActionSheet}
                            key={other.othersTitle} style={{
                                height: 90, width: 90, backgroundColor: 'white', borderRadius: 10,
                                flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
                                marginRight: 10, marginBottom: 10
                            }}>
                            <Image source={other.othersImage} style={{ height: 40, width: 40, resizeMode: 'contain' }} />
                            <Text style={{ marginTop: 8, fontSize: 12 }}>{other.othersTitle}</Text>
                        </TouchableOpacity>
                    ))
                }
            </View>
            <View style={{ padding: 15 }}>
                <Text style={{ marginBottom: 15 }}>My Group</Text>

                {
                    <View style={{
                        minHeight: 100, backgroundColor: 'white', flexDirection: 'row',
                        borderRadius: 10, padding: 15, alignItems: 'center', justifyContent: 'space-between'
                    }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            {(GameInformation !== undefined && GameInformation !== null && GameInformation.GameLogo !== undefined && GameInformation.GameLogo !== null) &&
                                <Image
                                    source={{ uri: `${apiip}/${GameInformation.GameLogo}` }}
                                    style={{
                                        height: 60, width: 60, borderRadius: 30,
                                        marginRight: 20
                                    }}
                                />
                            }
                            <View style={{ marginLeft: 10 }}>
                                <Text>Qualifier</Text>
                                <Text style={{ color: 'gray', fontSize: 12 }}>Group 1</Text>
                            </View>
                        </View>
                        <View>
                            <Text style={{ fontSize: 11, color: 'gray', marginBottom: 10 }}>200 Teams</Text>
                            <TouchableOpacity style={{
                                backgroundColor: 'rgb(220,220,220)', paddingLeft: 30, paddingRight: 30, paddingTop: 10,
                                paddingBottom: 10, borderRadius: 5
                            }}>
                                <Text style={{ fontSize: 13, textAlign: 'center' }}>Open</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                }
            </View>
            <View style={{}}>
                <Text style={{ marginBottom: 10, paddingLeft: 15 }}>Other Groups</Text>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', }}>
                    <View style={{ width: Dimensions.get('screen').width / 2, padding: 15, height: 120 }}>
                        <View style={{
                            height: '100%', width: '100%', backgroundColor: 'white', borderRadius: 10,
                            alignItems: 'center', flexDirection: 'row'
                        }}>
                            {(GameInformation !== undefined && GameInformation !== null && GameInformation.GameLogo !== undefined && GameInformation.GameLogo !== null) &&
                                <Image
                                    source={{ uri: `${apiip}/${GameInformation.GameLogo}` }}
                                    style={{
                                        height: 60, width: 60, borderRadius: 30,
                                        marginLeft: 15, marginRight: 10
                                    }}
                                />
                            }
                            <View>
                                <Text style={{ fontSize: 13, color: 'black' }}>Group 20</Text>
                                <Text style={{ fontSize: 11, color: 'gray' }}>Qualifier</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <ActionSheet showActionSheetMethod={showActionSheet}
                alignment={alignment}
                setAlignment={setAlignment}
                content={"Rewards"}
            />
        </ScrollView>

    )
}

export default RoundsInformation

const styles = StyleSheet.create({})