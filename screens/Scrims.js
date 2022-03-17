import { View, Text, StyleSheet, Image, ScrollView, Dimensions } from 'react-native';
import React from 'react';
import Gif from '../components/Gif';
import Card from '../components/Card';
import BackMenu from '../components/BackMenu';

const dimensions = Dimensions.get('window');
const scrHeight = dimensions.height / 100 * 11;

const Scrims = (navigation) => {
    return (
        <View>
            <ScrollView>
                <View style={[styles.container, styles.center]}>
                    <BackMenu navigation={navigation} whereTo={'Home'}/>
                    <View style={{ width: '100%', }}>
                        <ScrollView style={{ backgroundColor: 'white', }} horizontal={true}>
                            <Gif />
                        </ScrollView>
                    </View>
                    <View style={styles.section2}>
                        <View style={{paddingBottom: 10}}>
                            <Text style={styles.text}>Scrims</Text>
                        </View>

                        <View>
                            <Card />
                        </View>
                    </View>
                    <View style={styles.section2}>
                        <View style={{paddingBottom: 10}}>
                            <Text style={styles.text}>Pro Matches</Text>
                        </View>

                        <View>
                            <Card />
                        </View>
                    </View>
                    <View style={styles.section2}>
                        <View style={{paddingBottom: 10}}>
                            <Text style={styles.text}>Tournaments</Text>
                        </View>

                        <View>
                            <Card />
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View>
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        width: '100%',
    },
    center: {
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    header: {
        width: '100%',
        paddingTop: 60,
        backgroundColor: '#fff',
        height: scrHeight,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    back: {
        height: scrHeight - 70,
        width: 30
    },
    section2: {
        flex: 1,
        backgroundColor: '#F4F5F9',
        width: '100%'
    },
    text: {
        justifyContent: 'center',
        marginLeft: 15,
        paddingTop: 20,
        fontSize: 14
    },
})

export default Scrims;