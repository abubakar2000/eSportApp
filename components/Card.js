import axios from 'axios';
import React, { useEffect } from 'react';
import { StyleSheet, View, Image, Text, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import apiip from '../serverConfig';

const dimensions = Dimensions.get('window');
const imageWidth = dimensions.width - 100;

const Card = ({ GameID, GameName, GameTeamType, GameLogo, GameCategory, navigation }) => {
    
    const onNavigate = (screen) => {
        navigation.navigate(screen,{
            GameID:GameID, 
            GameName:GameName, 
            GameTeamType:GameTeamType, 
            GameLogo:GameLogo, 
            GameCategory:GameCategory
        })
    }
    return (
        <TouchableOpacity onPress={() => onNavigate('Scrims')} style={styles.card}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 1 }}>
                <View style={styles.imgContainer}>
                    <Image
                        style={styles.img}
                        source={{ uri: `${apiip}/${GameLogo}` }}
                    />
                </View>
                <View style={{ width: '50%', justifyContent: 'center' }}>
                    <Text style={styles.heading}>{GameName}</Text>
                    <Text style={styles.text}>{GameTeamType}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 5, flex: 1 }}>
                    <View style={{}}>
                        <Image
                            style={styles.infoImg}
                            source={require('../assets/info.png')}
                        />
                    </View>
                    <View style={{ height: '100%', justifyContent: 'center' }}>
                        {GameCategory !== undefined &&
                            GameCategory.map(cat => (
                                <Text key={cat} style={styles.infoText}>{cat}</Text>
                            ))
                        }
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        marginLeft: 15,
        marginRight: 15,
        backgroundColor: '#fff',
        height: 100,
        borderRadius: 10,
        marginBottom: 15
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
        maxWidth: 130,
        paddingLeft: 5,
        fontSize: 12,
        color: '#8C8C8C'
    },
    img: {
        height: 55,
        width: 55,
        borderRadius: 40,
        resizeMode: 'contain'
    },
    infoImg: {
        maxHeight: 15,
        maxWidth: 15,
        borderRadius: 40,
    },
    imgContainer: {
        marginLeft: 1,
        height: '100%',
        width: '21%',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Card;