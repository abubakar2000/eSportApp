import { Animated, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import AppBar from '../components/AppBar'
import image from '../assets/favicon.png';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import ActionSheet from '../components/ActionSheet';
import ProfilePicture from '../assets/10.jpg';
import axios from 'axios';
import apiip from '../serverConfig';
import { Dimensions } from 'react-native';

/**
 * Matches can be Scrims Pro Match and Tournament
 * Can also be a Paid or not
 */

const Tournaments = ({ navigation, route }) => {

    // Data state maintenance
    const [Games, setGames] = useState([])
    const [Tabs, setTabs] = useState([
        'Live Matches',
        'Upcoming Matches',
        'Completed Matches'
    ])


    // Whatever the selected game is selected shows here
    const [StateObject, setStateObject] = useState(
        [
            {
                Category: 'Live Matches',
                Matches: [
                    {
                        name: "BGMI Scrims #6652",
                        slot: 12,
                        teamName: 'Eagle',
                        tier: 3,
                        id: "1223",
                        password: "axyygz",
                        datetime: "03:00PM 06/06/2020",
                        type: "Scrims",
                        image: image,
                        paid: true,
                        game: "BGMI",
                    },
                    {
                        name: "COD Scrims #6653",
                        slot: 13,
                        teamName: 'Tigers',
                        tier: 3,
                        id: "1225",
                        password: "Paxyygz",
                        datetime: "03:00PM 06/06/2020",
                        type: "Pro Match",
                        image: image,
                        paid: false,
                        game: "COD",
                    },
                    {
                        name: "Freefire Scrims #665344",
                        slot: 13,
                        teamName: 'Dolphons',
                        tier: 3,
                        id: "1229",
                        password: "Paxyygz",
                        datetime: "03:00PM 06/06/2020",
                        type: "Pro Match",
                        image: image,
                        paid: false,
                        game: "Free fire",
                    },
                ]
            },
            {
                Category: 'Upcoming Matches',
                Matches: [
                    {
                        name: "BGMI Scrims #6652",
                        slot: 12,
                        teamName: 'Eagle',
                        tier: 3,
                        id: "1223",
                        password: "axyygz",
                        datetime: "03:00PM 06/06/2020",
                        type: "Scrims",
                        image: image,
                        paid: true,
                        game: "BGMI",
                        round: 1,
                    },
                    {
                        name: "COD Scrims #6653",
                        slot: 13,
                        teamName: 'Tigers',
                        tier: 3,
                        id: "1225",
                        password: "Paxyygz",
                        datetime: "03:00PM 06/06/2020",
                        type: "Pro Match",
                        image: image,
                        paid: false,
                        game: "COD",
                        round: 2,
                    },
                ]
            },
            {
                Category: 'Completed Matches',
                Matches: [
                    {
                        name: "BGMI Scrims #6652",
                        slot: 12,
                        teamName: 'Eagle',
                        tier: 3,
                        id: "1223",
                        password: "axyygz",
                        datetime: "03:00PM 06/06/2020",
                        type: "Scrims",
                        image: image,
                        paid: true,
                        game: "BGMI"
                    },
                    {
                        name: "COD Scrims #6653",
                        slot: 13,
                        teamName: 'Tigers',
                        tier: 3,
                        id: "1225",
                        password: "Paxyygz",
                        datetime: "03:00PM 06/06/2020",
                        type: "Pro Match",
                        image: image,
                        paid: false,
                        game: "COD"
                    },
                    {
                        name: "valorant Scrims #6657",
                        slot: 13,
                        teamName: 'Tigers',
                        tier: 3,
                        id: "1225",
                        password: "Paxyygz",
                        datetime: "03:00PM 06/06/2020",
                        type: "Pro Match",
                        image: image,
                        paid: false,
                        game: "valorant 2"
                    },
                ]
            },
        ]
    )

    // UI States maintenance
    const [SelectedTab, setSelectedTab] = useState(Tabs[0]);
    const [SelectedGame, setSelectedGame] = useState({
        GameCategory: route.params.GameCategory,
        GameID: route.params.GameID,
        GameLogo: route.params.GameLogo,
        GameName: route.params.GameName,
        GameTeamType: route.params.GameTeamType,
    })
    const handleMatchChange = (singleMatch) => {
        setSelectedGame(singleMatch)
        LoadGameTournaments(singleMatch.GameID)
    }

    const [selectedCategory, setSelectedCategory] = useState();
    const [alignment, setAlignment] = useState(new Animated.Value(0));
    const showActionSheet = () => {
        Animated.timing(alignment, {
            toValue: 1,
            duration: 500,
            useNativeDriver: false
        }).start();

    }

    // which Action sheet to show
    const [ActionSheetCategory, setActionSheetCategory] = useState("Round")


    // The tournaments list, this changes depending what game is selecting
    // localhost:3000/gettournamentbygame {GameID:""} is the body format
    const [Tournaments, setTournaments] = useState([])
    useEffect(() => {
        // setSelectedGame(route.params)

        const CancelToken = axios.CancelToken;
        const source = CancelToken.source();

        // Getting all the games
        axios.get(`${apiip}/enlistgames`, { cancelToken: source.token })
            .then(res => {
                setGames(res.data)
                LoadGameTournaments(SelectedGame.GameID)
            })
            .catch(err => {
                if (axios.isCancel(err)) {
                    console.log("Successfully aborted");
                } else {
                    console.log("Could abort the request loop");
                }
            })
        return () => {
        }
    }, [route, axios, LoadGameTournaments])

    const LoadGameTournaments = (gid) => {
        setTournaments([])
        axios.post(`${apiip}/gettournamentbygame`, {
            "GameID": gid
        })
            .then(res => {
                // You click on the game icon on the top and this will fetch the tournaments of that game
                setTournaments(res.data)
            })
            .catch(err => {
                if (axios.isCancel(err)) {
                    console.log("Successfully aborted");
                } else {
                    console.log("Could abort the request loop");
                }
            })
    }

    const onNavigateToBookTournamentSlot = (tournament) => {
        navigation.navigate( "BookTournaments",tournament)
    }

    return (
        <View>
            <View>
                <ScrollView style={[styles.root]}>
                    <AppBar centerFocused={false} navigation={navigation} profilePicture={ProfilePicture} title={`${SelectedGame.GameName}`}
                        showDrawer={false} whereTo={''} />
                    <View style={[styles.container]}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={[styles.myMatchList]}>
                            <View style={{ width: 5 }}></View>
                            {
                                Games.map(singleMatch => {
                                    return (
                                        <TouchableOpacity key={singleMatch.GameName} onPress={() => handleMatchChange(singleMatch)}>
                                            <View
                                                style={[styles.matchItem, SelectedGame.GameName === singleMatch.GameName ? styles.matchItemActive : null]}>
                                                <Image source={{ uri: `${apiip}/${singleMatch.GameLogo}` }} style={[styles.image]} />
                                                <Text style={{ color: 'black', fontSize: 13 }}>{singleMatch.GameName}</Text>
                                            </View>
                                        </TouchableOpacity>
                                    );
                                })
                            }
                            <View style={{ width: 5 }}></View>
                        </ScrollView>
                        <View style={[styles.tabContainer]}>
                            {
                                StateObject.map(tabItem => {
                                    return (
                                        <TouchableOpacity
                                            key={tabItem.Category}
                                            onPress={() => setSelectedTab(tabItem.Category)}
                                            style={[styles.tab, tabItem.Category === SelectedTab
                                                ? styles.tabActive : null]}>
                                            <Text
                                                style={[styles.tabText, tabItem.Category === SelectedTab
                                                    ? styles.tabTextActive : { color: 'black' }]}>{tabItem.Category}</Text>
                                        </TouchableOpacity>
                                    );
                                })
                            }
                        </View>
                    </View>
                    <View style={[styles.margined]}>
                        {
                            SelectedTab === Tabs[0] &&
                            <View style={{ flexDirection: 'row', justifyContent: Tournaments.length === 1 ? "flex-start" : "flex-start", flexWrap: 'wrap' }}>
                                {
                                    Tournaments.map(tournament => (
                                        <TouchableOpacity
                                            onPress={() => onNavigateToBookTournamentSlot(tournament)}
                                            key={tournament.Title} style={{
                                                width: Dimensions.get('screen').width / 2 - 20, height: Dimensions.get('screen').width / 2 - 20,
                                                backgroundColor: 'white', borderRadius: 5, margin: 5,
                                                shadowRadius: 5, shadowOpacity: 0.5, shadowColor: 'gray'
                                            }}>
                                            <Image source={{ uri: `${apiip}/${tournament.Banner}` }}
                                                style={{ height: '60%', width: '100%', borderTopRightRadius: 5, borderTopLeftRadius: 5, resizeMode: 'stretch' }} />
                                            <View style={{ width: '100%', height: '40%', flexDirection: 'row', paddingLeft: 5 }}>
                                                <View style={{ flex: 1.5, borderBottomLeftRadius: 10, padding: 5, justifyContent: 'center', }}>
                                                    <Text style={{ fontSize: 13 }}>{tournament.Title}</Text>
                                                    <Text style={{ fontSize: 11, color: 'gray', marginTop: 3, marginBottom: 3 }}>{tournament.Sponsor}</Text>
                                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                        <AntDesign name='infocirlceo' size={11} style={{ marginRight: 5 }} />
                                                        <Text style={{ fontSize: 10 }}>{tournament.Entrancefee} Coins</Text>
                                                    </View>
                                                </View>
                                                <View style={{ flex: 1, borderBottomLeftRadius: 5, padding: 5, justifyContent: 'center', }}>
                                                    <Text style={{ fontSize: 10, color: 'gray', marginTop: 3, marginBottom: 3 }}>{tournament.TournamentStartDate}</Text>
                                                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                                        <AntDesign name='team' size={10} />
                                                        <Text style={{ fontSize: 10, marginTop: 3, marginBottom: 3 }}>0/{tournament.TotalTeams}</Text>
                                                    </View>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    ))
                                }
                            </View>
                        }
                        {
                            SelectedTab === Tabs[1] &&
                            <View>
                                {
                                    StateObject[1].Matches
                                        .filter(m => m.game.toLowerCase() === SelectedGame.GameName.toLocaleLowerCase())
                                        .map(match => {
                                            return (
                                                <View key={match}>
                                                    <View style={[styles.UMSlideContainer]}>
                                                        <View style={[styles.liveMatchItemContainerUM]}>
                                                            <View style={[styles.firstCont]}>
                                                                <Image source={match.image} style={[styles.imgCont]} />
                                                            </View>
                                                            <View style={[styles.secCont]}>
                                                                <Text style={{ fontSize: 13, marginTop: 4, marginBottom: 4, }}>{match.name}</Text>
                                                                <Text style={{ fontSize: 11, marginTop: 4, marginBottom: 4, color: 'gray' }}>Slot {match.slot}</Text>
                                                                <Text style={{ fontSize: 13, marginTop: 4, marginBottom: 4, }}>Eagle</Text>
                                                                <Text style={{ fontSize: 11, marginTop: 4, marginBottom: 4, color: 'gray' }}>Tier {match.tier}</Text>
                                                                {/* <Text style={{ fontSize: 11, marginTop: 4, marginBottom: 4, }}>ID: {match.id}</Text> */}
                                                                {/* <Text style={{ fontSize: 11, marginTop: 4, marginBottom: 4, }}>Password: {match.password}</Text> */}
                                                            </View>
                                                            <View style={[styles.thirdCont]}>
                                                                <Text style={{ fontSize: 10, marginTop: 4, marginBottom: 4, }}>{match.datetime}</Text>
                                                                <Text style={{ fontSize: 10, marginTop: 4, marginBottom: 4, }}>{match.type}</Text>
                                                                {
                                                                    match.paid &&
                                                                    <View style={[styles.paidSectionIndicator]}>
                                                                        <MaterialCommunityIcons name="ticket-confirmation-outline" size={20} color="orange" />
                                                                        <Text style={[styles.paidIndicatorText]}>Paid</Text>
                                                                    </View>
                                                                }
                                                            </View>
                                                        </View>
                                                        <TouchableOpacity
                                                            onPress={() => {
                                                                setActionSheetCategory("Rounds")
                                                                showActionSheet();
                                                            }}
                                                            style={[styles.lowerSectionUM, { marginTop: 10 }]}>
                                                            <Text style={{ color: 'white' }}>Round {match.round}</Text>
                                                            {/* <AntDesign name="down-square-o" size={20} color="black" /> */}
                                                        </TouchableOpacity>
                                                    </View>
                                                </View>
                                            );
                                        })
                                }
                            </View>

                        }
                        {
                            SelectedTab === Tabs[2] &&
                            <View>
                                {
                                    StateObject[2].Matches
                                        .filter(m => m.game.toLowerCase() === SelectedGame.GameName.toLocaleLowerCase())
                                        .map(match => {
                                            return (
                                                <View key={match}>
                                                    <View style={[styles.MatchSlideCM]}>
                                                        <View style={[styles.liveMatchItemContainer]}>
                                                            <View style={[styles.firstCont]}>
                                                                <Image source={match.image} style={[styles.imgCont]} />
                                                            </View>
                                                            <View style={[styles.secCont]}>
                                                                <Text style={{ fontSize: 13, marginTop: 4, marginBottom: 4, }}>{match.name}</Text>
                                                                <Text style={{ fontSize: 11, marginTop: 4, marginBottom: 4, color: 'gray' }}>Slot {match.slot}</Text>
                                                                <Text style={{ fontSize: 13, marginTop: 4, marginBottom: 4, }}>Eagle</Text>
                                                                <Text style={{ fontSize: 11, marginTop: 4, marginBottom: 4, color: 'gray' }}>Tier {match.tier}</Text>
                                                                {/* <Text style={{ fontSize: 11, marginTop: 4, marginBottom: 4, }}>ID: {match.id}</Text> */}
                                                                {/* <Text style={{ fontSize: 11, marginTop: 4, marginBottom: 4, }}>Password: {match.password}</Text> */}
                                                            </View>
                                                            <View style={[styles.thirdCont]}>
                                                                <Text style={{ fontSize: 10, marginTop: 4, marginBottom: 4, }}>{match.datetime}</Text>
                                                                <Text style={{ fontSize: 10, marginTop: 4, marginBottom: 4, }}>{match.type}</Text>
                                                            </View>
                                                        </View>
                                                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                                                            <TouchableOpacity style={[styles.uploadButton2]}
                                                                onPress={() => {
                                                                    setActionSheetCategory("ViewResults")
                                                                    showActionSheet();
                                                                }}
                                                            ><Text style={{ color: 'blue' }} >View Result</Text></TouchableOpacity>
                                                            <TouchableOpacity style={[styles.uploadButton]}
                                                                onPress={() => {
                                                                    setActionSheetCategory("UploadScreenshots")
                                                                    showActionSheet()
                                                                }}
                                                            ><Text style={{ color: 'white' }}>Upload Screenshots</Text></TouchableOpacity>
                                                        </View>
                                                    </View>
                                                </View>
                                            );
                                        })
                                }

                            </View>
                        }
                    </View>
                </ScrollView>
            </View >
            <ActionSheet showActionSheetMethod={showActionSheet}
                content={ActionSheetCategory}
                alignment={alignment} setAlignment={setAlignment} />
        </View >
    )
}

export default Tournaments

const styles = StyleSheet.create({
    root: {
        backgroundColor: 'rgb(240,240,240)',
        height: '100%'
    },
    container: {

    },
    myMatchList: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 10,
    },
    matchItem: {
        backgroundColor: 'white',
        height: 80,
        width: 80,
        margin: 5,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'column'
    },
    matchItemActive: {
        borderWidth: 2,
        borderColor: 'rgb(54, 79, 130)',
    },
    image: {
        height: '60%',
        width: '60%',
        borderRadius: 50,
    },
    tabContainer: {
        margin: 10,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 5,
        marginTop: 10,
        alignItems: 'center',
    },
    tab: {
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 5,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    tabText: {
        fontSize: 11,
    },
    tabActive: {
        backgroundColor: 'rgb(54, 79, 130)',
    },
    tabTextActive: {
        color: 'white',
    },
    liveMatchItemContainer: {
        backgroundColor: 'white',
        flexDirection: 'row',
        borderRadius: 5,
        padding: 10,
        marginTop: 10
    },

    liveMatchItemContainerUM: {
        flexDirection: 'row',
    },
    UMSlideContainer: {
        borderRadius: 5,
        backgroundColor: 'white',
        padding: 10
    },

    MatchSlideCM: {
        backgroundColor: 'white',
        flexDirection: 'column',
        padding: 10,
        borderRadius: 8
    },
    imgCont: {
        backgroundColor: 'black',
        borderRadius: 50,
    },
    firstCont: {
        flex: 1,

        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    secCont: {
        flex: 3
    },
    thirdCont: {
        flex: 3,
        justifyContent: 'flex-start',
        alignItems: 'flex-end'
    },
    margined: {
        margin: 10,
    },
    lowerSectionUM: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: 'rgb(54, 79, 130)',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
        borderRadius: 5
    },
    paidSectionIndicator: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 2,
        marginBottom: 2
    },
    paidIndicatorText: {
        fontSize: 12
    },
    uploadButton: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: 'rgb(54, 79, 130)',
        // marginLeft: 15,
        // marginRight: 15,
        borderRadius: 8,
        width: '45%'

    },
    uploadButton2: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        borderWidth: 1,
        borderColor: 'rgb(54, 79, 130)',
        // marginLeft: 15,
        // marginRight: 15,
        borderRadius: 8,
        width: '45%'

    },
})