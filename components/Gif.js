import React from 'react';
import { View, Image, StyleSheet, } from 'react-native';
import { Dimensions } from 'react-native';
const { height, width } = Dimensions.get('screen');
const Gif = (props) => {
    return (
        <View style={{ flexDirection: 'row' }}>
            {/* <View style={{ height: 300, backgroundColor: 'red', }}>
                
            </View> */}
             <View style={styles.section1}>
                <Image 
                    style={styles.gifSection}
                    source={require("../assets/homepage/giphy.gif")}
                    />
            </View>
            <View style={styles.section1}>
                <Image 
                    style={[styles.gifSection,]}
                    source={require("../assets/homepage/giphy-2.gif")}
                />
            </View> 
        </View>
    );
}

const styles = StyleSheet.create({
    section1: {
        // backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
        // height: '40%',
        padding: 15,
    },
    gifSection: {
        width: width-30,
        borderRadius:20,
        resizeMode: 'cover',
    }
})

export default Gif;