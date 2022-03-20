import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, ScrollView, useState } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'

const GradientCard = ({colorGrad}) => {
    return (
        <View>
            <View>
                <LinearGradient 
                    colors={[colorGrad,'#E5E5E5', '#F4F5F9']}
                    locations={[0,0.7,1]}
                    style={styles.boxes}
                >
                    <View style={{alignItems:'center'}}>
                        <View style={{flexDirection:'row', margin: 14, paddingTop: 5}}>
                            <View>
                                <Image style={styles.img} source={require('../assets/general/valorant.jpg')}/>
                            </View>
                            <View>
                                <Text style={styles.text}>Nerd Tier 2 Pro Scrims</Text>
                            </View>
                        </View>
                        <View style={{width:'80%'}}>
                            <Text style={{color:'#505151'}}>Sponsor</Text>
                            <Text style={{color:'#394D84'}}>Haexr Tournaments</Text>
                        </View>
                        <View style={{flexDirection:'row', marginTop: 22, justifyContent:'space-between', width:'85%'}}>
                            <View>
                                <Image source={require('../assets/info.png')} style={styles.infoImg}/>
                            </View>
                            <View style={{width:60}}>
                                <Text style={{color:'#515051'}}>Scrims</Text>
                            </View>
                            <View>
                                <Image source={require('../assets/cup.png')} style={styles.infoImg}/>
                            </View>
                            <View>
                                <Text>5290000</Text>
                            </View>
                        </View>
                    </View>
                </LinearGradient>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    boxes: {
        height: 180,
        width: 190,
        borderRadius: 30,
        margin: 5
    },
    break_h: {
        width: 20,
    },
    img: {
        height: 50,
        width: 50,
        borderRadius: 50
    },
    text: {
        width: 100,
        marginLeft: 10,
        marginTop: 5,
        color: '#fff'
    },
    infoImg: {
        maxHeight: 15,
        maxWidth: 15,
        borderRadius: 40,
    },
})

export default GradientCard;
