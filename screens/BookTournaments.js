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

const BookTournaments = ({ navigation, route }) => {
    const [Tournament, setTournament] = useState(route.params)
    const [GameInformation, setGameInformation] = useState(null)

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

    useEffect(() => {
        const CancelToken = axios.CancelToken;
        const source = CancelToken.source();

        setTournament(route.params)
        console.log("Getting for " + Tournament.GameID);
        axios.post(`${apiip}/getgameinfo`, {
            "gameid": Tournament.GameID
        }, { cancelToken: source.token })
            .then(res => {
                console.log(res.data);
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

    return (
        <View>
            <AppBar navigation={navigation} showDrawer={true} centerFocused={false} title={Tournament.Title} profilePicture={ProfilePicture} />
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
                        <Text style={{
                            fontSize: 18,
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
                <Text>Rounds</Text>

                <View style={{ backgroundColor: 'white', height: 130, marginTop: 10, borderRadius: 10 }}>
                    {/* <Image source={} */}
                </View>
            </View>


            {/* <Text>{Tournament.Banner}</Text>
            <Text>{Tournament.Entrancefee}</Text>
            <Text>{Tournament.GameID}</Text>
            <Text>{Tournament.RegistrationLastDate}</Text>
            <Text>{Tournament.RegistrationStartDate}</Text>
            <Text>{Tournament.Sponsor}</Text>
            <Text>{Tournament.Title}</Text>
            <Text>{Tournament.TotalTeams}</Text>
            <Text>{Tournament.TournamentEndDate}</Text>
            <Text>{Tournament.TournamentStartDate}</Text>
            <Text>{Tournament.TournamentsTeamType}</Text>
            <Text>{Tournament.Winnings}</Text> */}

            <ActionSheet showActionSheetMethod={showActionSheet}
                alignment={alignment}
                setAlignment={setAlignment}
                content={"Rewards"}
            />
        </View>
    )
}

export default BookTournaments

const styles = StyleSheet.create({})