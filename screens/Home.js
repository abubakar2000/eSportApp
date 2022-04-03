import { View, Text, StyleSheet, SafeAreaView, Image, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import Gif from '../components/Gif'
import AppBar from '../components/AppBar'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Card from '../components/Card';
import GradientCard from '../components/GradientCard';
import Footer from '../components/Footer';
import axios from 'axios';
import apiip from '../serverConfig';
import ProfilePicture from '../assets/10.jpg';

const LINKS = {
    image1: require("../assets/homepage/giphy.gif"),
    image2: require("../assets/homepage/giphy-2.gif")
};

const Home = ({ navigation }) => {

    const [GamesList, setGamesList] = useState([])

    useEffect(() => {
        const CancelToken = axios.CancelToken;
        const source = CancelToken.source();
        // setInterval(() => {
        axios.get(`${apiip}/enlistgames`,{cancelToken:source.token})
            .then(res => {
                setGamesList(res.data)
            })
            .catch(err => {
                if (axios.isCancel(err)) {
                    console.log("Successfully aborted");
                }else{
                    console.log("Could abort the request loop");
                }
            })
        // }, 3000);
        return () => {
            source.cancel()
        }
    }, [axios, GamesList, setGamesList])


    var colorArr = ['#691B31', '#7E897C', '#447EAB'];

    const onNavigate = (screen) => {
        navigation.navigate(screen)
    }


    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
                <View style={[styles.container, styles.center]}>
                    <AppBar navigation={navigation} profilePicture={ProfilePicture} title={"HAEXR"} whereTo={'Account'} showDrawer={true} />
                    <View style={{ width: '100%', }}>
                        <ScrollView style={{ backgroundColor: 'white', }} horizontal={true} >
                            <TouchableOpacity onPress={() => onNavigate('Scrims')}>
                                <Gif />
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                    <View style={styles.section2}>
                        <Text style={styles.text}>Ongoing Tournaments & Pro Matches</Text>
                        <ScrollView horizontal={true} style={styles.section3}>
                            <GradientCard colorGrad={colorArr[0]} />
                            <GradientCard colorGrad={colorArr[1]} />
                            <GradientCard colorGrad={colorArr[2]} />
                            <View style={styles.break_h}></View>
                        </ScrollView>
                    </View>

                    <View style={styles.section2}>
                        <View style={{ paddingBottom: 20 }}>
                            <Text style={styles.text}>Games & More</Text>
                        </View>

                        <View style={{ paddingBottom: 20 }}>
                            {
                                GamesList.map(game => {
                                    return (
                                        <Card
                                            key={game.GameID}
                                            GameID={game.GameID}
                                            GameLogo={game.GameLogo}
                                            GameName={game.GameName}
                                            GameTeamType={game.GameTeamType}
                                        />
                                    )
                                })
                            }
                        </View>
                    </View>
                </View>
            </ScrollView>
            <Footer />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        width: '100%',
    },
    center: {
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    break_h: {
        width: 20,
    },
    break_v: {
        paddingTop: 10
    },
    section2: {
        flex: 1,
        backgroundColor: '#F4F5F9',
        width: '100%'
    },
    section3: {
        paddingLeft: 10,
        paddingRight: 15,
        paddingTop: 20,
        height: 210
    },
    text: {
        justifyContent: 'center',
        marginLeft: 15,
        paddingTop: 20,
        fontSize: 14
    },
    boxes: {
        height: 170,
        width: 165,
        borderRadius: 20,
        padding: 20
    }
});

export default Home;
