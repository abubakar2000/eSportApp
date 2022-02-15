import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useRef, useState } from 'react'
import AppBar from '../components/AppBar'
import image from '../assets/favicon.png';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';

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
    const [selectedCategory, setSelectedCategory] = useState();



    const pickerRef = useRef();

    const open = () => {
        pickerRef.current.focus();
    }

    const close = () => {
        pickerRef.current.blur();
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
            <View style={[styles.margined]}>
                {
                    SelectedTab === Tabs[0] &&
                    <View>
                        <View style={[styles.liveMatchItemContainer]}>
                            <View style={[styles.firstCont]}>
                                <Image source={image} style={[styles.imgCont]} />
                            </View>
                            <View style={[styles.secCont]}>
                                <Text style={{ fontSize: 13, marginTop: 4, marginBottom: 4, }}>BGMI Scrims #6652</Text>
                                <Text style={{ fontSize: 11, marginTop: 4, marginBottom: 4, color: 'gray' }}>Slot 13</Text>
                                <Text style={{ fontSize: 13, marginTop: 4, marginBottom: 4, }}>Eagle</Text>
                                <Text style={{ fontSize: 11, marginTop: 4, marginBottom: 4, color: 'gray' }}>Tier 3</Text>
                                <Text style={{ fontSize: 11, marginTop: 4, marginBottom: 4, }}>ID: 1234</Text>
                                <Text style={{ fontSize: 11, marginTop: 4, marginBottom: 4, }}>Password: 1234567</Text>
                            </View>
                            <View style={[styles.thirdCont]}>
                                <Text style={{ fontSize: 10, marginTop: 4, marginBottom: 4, }}>03:00PM 06/06/2020</Text>
                                <Text style={{ fontSize: 10, marginTop: 4, marginBottom: 4, }}>Scrims</Text>
                                <Text>Logo here</Text>
                            </View>
                        </View>
                    </View>
                }
                {
                    SelectedTab === Tabs[1] &&
                    <View>
                        <View style={[styles.UMSlideContainer]}>
                            <View style={[styles.liveMatchItemContainerUM]}>
                                <View style={[styles.firstCont]}>
                                    <Image source={image} style={[styles.imgCont]} />
                                </View>
                                <View style={[styles.secCont]}>
                                    <Text style={{ fontSize: 13, marginTop: 4, marginBottom: 4, }}>BGMI Scrims #6652</Text>
                                    <Text style={{ fontSize: 11, marginTop: 4, marginBottom: 4, color: 'gray' }}>Slot 13</Text>
                                    <Text style={{ fontSize: 13, marginTop: 4, marginBottom: 4, }}>Eagle</Text>
                                    <Text style={{ fontSize: 11, marginTop: 4, marginBottom: 4, color: 'gray' }}>Tier 3</Text>
                                    <Text style={{ fontSize: 11, marginTop: 4, marginBottom: 4, }}>ID: 1234</Text>
                                    <Text style={{ fontSize: 11, marginTop: 4, marginBottom: 4, }}>Password: 1234567</Text>
                                </View>
                                <View style={[styles.thirdCont]}>
                                    <Text style={{ fontSize: 10, marginTop: 4, marginBottom: 4, }}>03:00PM 06/06/2020</Text>
                                    <Text style={{ fontSize: 10, marginTop: 4, marginBottom: 4, }}>Scrims</Text>
                                    <View style={[styles.paidSectionIndicator]}>
                                        <MaterialCommunityIcons name="ticket-confirmation-outline" size={24} color="black" />
                                        <Text style={[styles.paidIndicatorText]}>Paid</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={[styles.lowerSectionUM]}>
                                <Text>Round 1</Text>
                                <AntDesign name="down-square-o" size={20} color="black" />
                            </View>
                        </View>
                    </View>
                }
                {
                    SelectedTab === Tabs[2] &&
                    <View>
                        <View>
                            {/* <Picker
                            ref={pickerRef}
                                selectedValue={selectedCategory}
                                onValueChange={(itemValue, itemIndex) =>
                                    {
                                        setSelectedCategory(itemValue)
                                    }
                                }
                            >
                                <Picker.Item label="HEllo" value="haha2"></Picker.Item>
                                <Picker.Item label="HEllo" value="haha"></Picker.Item>
                            </Picker> */}
                            <View style={[styles.MatchSlideCM]}>
                                <View style={[styles.liveMatchItemContainer]}>
                                    <View style={[styles.firstCont]}>
                                        <Image source={image} style={[styles.imgCont]} />
                                    </View>
                                    <View style={[styles.secCont]}>
                                        <Text style={{ fontSize: 13, marginTop: 4, marginBottom: 4, }}>BGMI Scrims #6652</Text>
                                        <Text style={{ fontSize: 11, marginTop: 4, marginBottom: 4, color: 'gray' }}>Slot 13</Text>
                                        <Text style={{ fontSize: 13, marginTop: 4, marginBottom: 4, }}>Eagle</Text>
                                        <Text style={{ fontSize: 11, marginTop: 4, marginBottom: 4, color: 'gray' }}>Tier 3</Text>
                                        <Text style={{ fontSize: 11, marginTop: 4, marginBottom: 4, }}>ID: 1234</Text>
                                        <Text style={{ fontSize: 11, marginTop: 4, marginBottom: 4, }}>Password: 1234567</Text>
                                    </View>
                                    <View style={[styles.thirdCont]}>
                                        <Text style={{ fontSize: 10, marginTop: 4, marginBottom: 4, }}>03:00PM 06/06/2020</Text>
                                        <Text style={{ fontSize: 10, marginTop: 4, marginBottom: 4, }}>Scrims</Text>
                                        <Text>Logo here</Text>
                                    </View>
                                </View>
                                <TouchableOpacity style={[styles.uploadButton]}><Text>Upload Screenshots</Text></TouchableOpacity>
                            </View>
                        </View>
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
        borderRadius: 5,
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
        borderRadius: 5,
        marginTop: 10,
        width: '100%'
    },
    tab: {
        padding: 10,
        borderRadius: 5
    },
    tabText: {
        fontSize: 11,
    },
    tabActive: {
        backgroundColor: 'blue',
    },
    tabTextActive: {
        color: 'white',
    },
    liveMatchItemContainer: {
        backgroundColor: 'white',
        flexDirection: 'row',
        borderRadius: 5,
        padding: 10,
    },

    liveMatchItemContainerUM: {
        flexDirection: 'row',
    },
    UMSlideContainer: {
        borderRadius: 5,
        backgroundColor: 'white',
        borderBottomWidth: 2,
        borderBottomColor: 'blue',
        padding: 10
    },

    MatchSlideCM: {
        backgroundColor: 'white',
        flexDirection: 'column',
        padding:10,
        borderRadius:8
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
        justifyContent: 'flex-end'
    },
    margined: {
        margin: 10,
    },
    lowerSectionUM: {
        justifyContent: 'space-between',
        flexDirection: 'row'
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
        justifyContent:'center',
        alignItems:'center',
        paddingTop:10,
        paddingBottom:10,
        backgroundColor:'rgb(240,240,240)',
        marginLeft:15,
        marginRight:15,
        borderRadius:8
    },
})