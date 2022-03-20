import React from 'react';
import { StyleSheet, View, Image, Text, Dimensions } from 'react-native';

const dimensions = Dimensions.get('window');
const imageWidth = dimensions.width - 100;

const Card = () => {
    return (
        <View style={styles.card}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={styles.imgContainer}>
                    <Image
                        style={styles.img}
                        source={require('../assets/general/valorant.jpg')}     
                    />
                </View>
                <View style={{paddingTop:22, width:'50%'}}>
                    <Text style={styles.heading}>Battle Grounds Mobile India</Text>
                    <Text style={styles.text}>Battle Royale</Text>
                </View>
                <View style={{paddingTop:20, flexDirection:'row', paddingLeft: 5}}>
                    <Image 
                        style={styles.infoImg}
                        source={require('../assets/info.png')}  
                    />
                    <Text style={styles.infoText}>Pro Matches & Scrims</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        marginLeft: 15,
        marginRight: 15,
        backgroundColor: '#fff',
        height: 80,
        borderRadius: 10,
        marginBottom: 10
    },
    heading: {
        maxHeight: 20,
        fontSize: 13,
        paddingBottom: 5
    },
    text: {
        maxHeight: 20,
        fontSize: 12,
        color: '#8C8C8C'
    },
    infoText: {
        maxWidth: 70,
        paddingLeft: 5,
        fontSize: 12,
        color: '#8C8C8C'
    },
    img: {
        maxHeight: 55,
        maxWidth: 55,
        borderRadius: 40,
    },
    infoImg: {
        maxHeight: 15,
        maxWidth: 15,
        borderRadius: 40,
    },
    imgContainer: {
        padding: 12,
        marginLeft: 1
    }
})

export default Card;