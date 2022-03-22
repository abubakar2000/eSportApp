import react from "react";
import { View, StyleSheet, Image, Text } from 'react-native';

const Footer = () => {
    return (
        <View style={styles.container}>
            <View style={styles.containBlock}>
                <Image style={styles.img} source={require('../assets/trophy.png')} />
                <Text style={styles.text}>ESports</Text>
            </View>
            <View style={styles.containBlock}>
                <Image style={styles.img} source={require('../assets/joystick.png')} />
                <Text style={styles.text}>Games</Text>
            </View>
            <View style={styles.containBlock}>
                <Image style={styles.img}source={require('../assets/4squares.png')} />
                <Text style={styles.text}>Fantasy ESports</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 90
    },
    containBlock: {
        width: '33%',
        justifyContent: 'center',
        alignItems: "center"
    },
    img: {
        width: 28, 
        height: 28, 
        tintColor: '#5D5D5D',
    },
    text: {
        marginTop: 5,
        fontSize: 12,
        color: '#5D5D5D'
    }
});

export default Footer;


