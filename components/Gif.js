import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Gif = (props) => {
    return (
        <View style={{flexDirection: 'row'}}>
            <View style={styles.section1}>
                <Image 
                    style={styles.gif}
                    source={require("../assets/homepage/giphy.gif")}
                />
            </View>

            <View style={styles.section1}>
                <Image 
                    style={styles.gif}
                    source={require("../assets/homepage/giphy-2.gif")}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    section1: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        height: '40%',
        padding: 10
    },
    gif: {
        resizeMode: 'stretch',
        width: 370,
        borderRadius: 10
    }
})

export default Gif;