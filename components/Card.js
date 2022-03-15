import React from 'react';
import { StyleSheet, View, Image, Text, Dimensions } from 'react-native';

const dimensions = Dimensions.get('window');
const imageWidth = dimensions.width - 100;

const Card = () => {
    return (
        <View style={styles.card}>
            <View style={{flexDirection: 'row'}}>
                <View style={styles.container}>
                    <Image
                        style={styles.img}
                        source={require('../assets/general/valorant.jpg')}     
                    />
                </View>
                <View style={styles.container}>
                    <Text style={styles.heading}>Battle Grounds Mobile India</Text>
                    <Text style={styles.text}>Battle Royale</Text>
                </View>
                <View>

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
        marginBottom: 10,
    },
    heading: {

    },
    text: {

    },
    img: {
        maxHeight: 55,
        maxWidth: 55,
        borderRadius: 40
    },
    container: {
        flex: 1,
        padding: 12,
        marginLeft: 4
    }
})

export default Card;