import { Image, ScrollView, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import AppBar from '../components/AppBar'
import image from '../assets/favicon.png';

const Matches = ({ navigation }) => {
    const [Matches, setMatches] = useState([
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

    const [SelectedTab, setSelectedTab] = useState(Tabs[0]);

    const [SelectedMatches, setSelectedMatch] = useState(Matches[0])

    const handleTabChange = (tab) => {
        setSelectedTab(tab);
    }
    const handleMatchChange = (singleMatch) => {
        setSelectedMatch(singleMatch)
    }
    return (
        <View style={[styles.root]}>
            <AppBar navigation={navigation} title={'My Matches'}
                showDrawer={false} whereTo={''} />
            <View style={[styles.container]}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={[styles.myMatchList]}>
                    {
                        Matches.map(singleMatch => {
                            return (
                                <TouchableOpacity key={singleMatch.name} onPress={() => handleMatchChange(singleMatch)}>
                                    <View
                                        style={[styles.matchItem, SelectedMatches.name === singleMatch.name ? styles.matchItemActive : null]}>
                                        <Image source={singleMatch.image} style={[styles.image]} />
                                        <Text>{singleMatch.name}</Text>
                                    </View>
                                </TouchableOpacity>
                            );
                        })
                    }
                </ScrollView>
                <View style={[styles.tabContainer]}>
                    {
                        Tabs.map(
                            tab => {
                                return (
                                    <TouchableOpacity key={tab} onPress={() => { handleTabChange(tab) }}>
                                        <View style={[styles.tab, tab === SelectedTab ? styles.tabActive : null]}>
                                            <Text style={[styles.tabText, tab === SelectedTab ? styles.tabTextActive : null]}>{tab}</Text>
                                        </View>
                                    </TouchableOpacity>
                                );
                            }
                        )
                    }
                </View>
            </View>
            <View>
                {
                    SelectedTab === Tabs[0] &&
                    <View>
                        <Text>LM</Text>
                    </View>
                }
                {
                    SelectedTab === Tabs[1] &&
                    <View>
                        <Text>uM</Text>
                    </View>
                }
                {
                    SelectedTab === Tabs[2] &&
                    <View>
                        <Text>cM</Text>
                    </View>
                }
            </View>
        </View>
    )
}

export default Matches

const styles = StyleSheet.create({
    root: {
        backgroundColor: 'rgb(240,240,240)',
        height: '100%'
    },
    container: {
        padding: 10,
    },
    myMatchList: {
        flexDirection: 'row',
        flexWrap: 'wrap',

    },
    matchItem: {
        backgroundColor: 'white',
        height: 80,
        width: 80,
        margin: 5,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'column'
    },
    matchItemActive: {
        borderWidth: 2,
        borderColor: 'blue',
    },
    image: {
        height: '60%',
        width: '60%',
        borderRadius: 50,
    },
    tabContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: "space-between",
        borderRadius: 10,
        marginTop: 10,
        width: '100%'
    },
    tab: {
        padding: 10,
        borderRadius: 10
    },
    tabText: {
        fontSize: 11,
    },
    tabActive: {
        backgroundColor: 'blue',
    },
    tabTextActive: {
        color: 'white'
    },
})