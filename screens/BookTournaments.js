import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AppBar from '../components/AppBar';
import ProfilePicture from '../assets/10.jpg';
import Gif from '../components/Gif'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

const BookTournaments = ({ navigation, route }) => {
    const [Tournament, setTournament] = useState(route.params)
    console.log(Tournament);
    useEffect(() => {
        console.log(Tournament);
        return () => {
        }
    }, [])

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

            <Text>{Tournament.Banner}</Text>
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
            <Text>{Tournament.Winnings}</Text>
        </View>
    )
}

export default BookTournaments

const styles = StyleSheet.create({})