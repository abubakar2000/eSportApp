import { View, Text, StyleSheet, SafeAreaView, Image, ScrollView, useState } from 'react-native';
import React from 'react';
import Gif from '../components/Gif'
import AppBar from '../components/AppBar'
import { LinearGradient } from 'expo-linear-gradient'
import { Directions, TouchableOpacity } from 'react-native-gesture-handler';
import Card from '../components/Card';

const LINKS = {
    image1: require("../assets/homepage/giphy.gif"),
    image2: require("../assets/homepage/giphy-2.gif")
};

const Home = ({ navigation }) => {

    const onNavigate = (screen) => {
        navigation.navigate(screen)
    }

    return (
        <ScrollView>
            <View style={[styles.container, styles.center]}>
                <AppBar navigation={navigation} title={"HAEXR"} whereTo={'Account'} showDrawer={true} />
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
                        <View>
                            <LinearGradient 
                                colors={['#691B31', '#F4F5F9']}
                                style={styles.boxes}
                            >
                                
                            </LinearGradient>
                        </View>
                        <View style={styles.break_h}></View>
                        <View>
                            <LinearGradient 
                                colors={['#7E897C', '#F4F5F9']}
                                style={styles.boxes}
                            >

                            </LinearGradient>
                        </View>
                        <View style={styles.break_h}></View>
                        <View>
                            <LinearGradient 
                                colors={['#447EAB', '#F4F5F9']}
                                style={styles.boxes}
                            >

                            </LinearGradient>
                        </View>
                        <View style={{width:50}}></View>
                    </ScrollView>
                </View>

                <View style={styles.section2}>
                    <View style={{paddingBottom: 20}}>
                        <Text style={styles.text}>Games & More</Text>
                    </View>

                    <View style={{paddingBottom: 20}}>
                        <Card />
                        <Card />
                        <Card />
                    </View>
                </View>
            </View>
        </ScrollView>
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
        width: 10,
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
        paddingLeft:15,
        paddingRight:15,
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
        borderRadius:20,
        padding: 20
    }
});

export default Home;
