import { View, Text, StyleSheet, SafeAreaView, Image, ScrollView, useState } from 'react-native';
import React from 'react';
import Gif from '../components/Gif'
import AppBar from '../components/AppBar'
import { LinearGradient } from 'expo-linear-gradient'
import { Directions } from 'react-native-gesture-handler';

const LINKS = {
    image1: require("../assets/homepage/giphy.gif"),
    image2: require("../assets/homepage/giphy-2.gif")
  };

const Home = ({navigation}) => {
  
    return (
        <ScrollView>
            <SafeAreaView style={[styles.container, styles.center]}>
                <AppBar navigation={navigation} title={"HAEXR"} whereTo={'AccountInformation'} showDrawer={true}/>

                <View>
                    <ScrollView horizontal={true} style={{maxHeight: 330, paddingTop: 120}}>
                        <Gif />
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
                    </ScrollView>

                    <View style={styles.break_v}>
                    <Text style={styles.text}>Games & More</Text>
                    </View>
                </View>
            </SafeAreaView>
        </ScrollView>
    );
};

export default Home;

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
        width: 10
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
        marginRight: 15,
        marginLeft: 15,
        paddingTop: 20
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
        borderRadius: 30,
        padding: 20
    }
});
