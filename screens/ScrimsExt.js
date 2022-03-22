import React, { useState } from 'react';
import { Animated, View, StyleSheet, Image, ScrollView, Text, TouchableOpacity } from "react-native";
import AppBar from '../components/AppBar';
import image from '../assets/favicon.png';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ActionSheet from '../components/ActionSheet';
import BackMenu from '../components/BackMenu';

const ScrimsExt = ({ navigation, route: { params } }) => {

    var header = params;

    // Data state maintenance
    const [Games, setGames] = useState([
        {
            name: "BGMI",
            image: image,
        },
        {
            name: "Free fire",
            image: image,
        },
        {
            name: "Cod",
            image: image,
        },
        {
            name: "Valorant 2",
            image: image,
        },
        {
            name: "Valorant",
            image: image,
        },
    ])
    const [Tabs, setTabs] = useState([
        'Live Matches',
        'Upcoming Matches',
        'Completed Matches'
    ])
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
    const [SelectedGame, setSelectedGame] = useState(Games[0])
    const handleMatchChange = (singleMatch) => {
        setSelectedGame(singleMatch)
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

    return (
        <View>
            <View>
                <ScrollView style={[styles.root]}>
                    <BackMenu navigation={navigation} whereTo={'Scrims'} title={header}/>
                    <View style={[styles.container]}>
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
                            <View>
                                {
                                    StateObject[0].Matches
                                        .filter(m => m.game.toLowerCase() === SelectedGame.name.toLocaleLowerCase())
                                        .map(match => {
                                            return (
                                                <View
                                                    key={match.id}
                                                    style={[styles.liveMatchItemContainer]}>
                                                    <View style={[styles.firstCont]}>
                                                        <Image source={match.image} style={[styles.imgCont]} />
                                                    </View>
                                                    <View style={[styles.secCont]}>
                                                        <Text style={{ fontSize: 13, marginTop: 4, marginBottom: 4, }}>{match.name}</Text>
                                                        <Text style={{ fontSize: 11, marginTop: 4, marginBottom: 4, color: 'gray' }}>{match.slot}</Text>
                                                        <Text style={{ fontSize: 13, marginTop: 4, marginBottom: 4, }}>{match.teamName}</Text>
                                                        <Text style={{ fontSize: 11, marginTop: 4, marginBottom: 4, color: 'gray' }}>Tier {match.tier}</Text>
                                                        <Text style={{ fontSize: 11, marginTop: 4, marginBottom: 4, }}>ID: {match.id}</Text>
                                                        <Text style={{ fontSize: 11, marginTop: 4, marginBottom: 4, }}>Password: {match.password}</Text>
                                                    </View>
                                                    <View style={[styles.thirdCont]}>
                                                        <Text style={{ fontSize: 10, marginTop: 4, marginBottom: 4, }}>{match.datetime}</Text>
                                                        <Text style={{ fontSize: 10, marginTop: 4, marginBottom: 4, }}>{match.type}</Text>
                                                        {match.paid &&
                                                            <View style={[styles.paidSectionIndicator]}>
                                                                <MaterialCommunityIcons name="ticket-confirmation-outline" size={20} color="orange" />
                                                                <Text style={[styles.paidIndicatorText]}>Paid</Text>
                                                            </View>
                                                        }
                                                        <Text>Logo here</Text>
                                                    </View>
                                                </View>
                                            );
                                        })
                                }
                            </View>
                        }
                        {
                            SelectedTab === Tabs[1] &&
                            <View>
                                {
                                    StateObject[1].Matches
                                        .filter(m => m.game.toLowerCase() === SelectedGame.name.toLocaleLowerCase())
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
                                                            onPress={showActionSheet}
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
                                        .filter(m => m.game.toLowerCase() === SelectedGame.name.toLocaleLowerCase())
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
                                                            <TouchableOpacity style={[styles.uploadButton]}><Text style={{ color: 'white' }} onPress={showActionSheet}>View Result</Text></TouchableOpacity>
                                                            <TouchableOpacity style={[styles.uploadButton]}><Text style={{ color: 'white' }} onPress={showActionSheet}>Upload Screenshots</Text></TouchableOpacity>
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
            </View>
            <ActionSheet showActionSheetMethod={showActionSheet}
                content={"Rounds"}
                alignment={alignment} setAlignment={setAlignment} />
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        backgroundColor: 'rgb(240,240,240)',
        height: '100%'
    },
    container: {

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
        backgroundColor: '#374E82',
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
        backgroundColor: '#374E82',
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
        backgroundColor: '#374E82',
        // marginLeft: 15,
        // marginRight: 15,
        borderRadius: 8,
        width: '45%'

    },
})

export default ScrimsExt;