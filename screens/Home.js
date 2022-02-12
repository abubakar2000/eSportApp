import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native';
import React from 'react';
import AppBar from '../components/AppBar'
import { LinearGradient } from 'expo-linear-gradient'
import { ScrollView } from 'react-native-web';

const Home = ({ navigation }) => {
    return (
        <View style={[styles.container, styles.center]}>
            <AppBar navigation={navigation} title={"HAEXR"} whereTo={'AccountInformation'} showDrawer={true} />

            <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', height: '35%',flexDirection:'row', }}>
                <Image
                    style={{ width: '95%', borderRadius: 20, height: '95%' }}
                    source={require('../assets/homepage/giphy.gif')}
                />
                <Image
                    style={{ width: '95%', borderRadius: 20, height: '95%' }}
                    source={require('../assets/homepage/giphy.gif')}
                />
            </View>

            <View style={styles.section2}>
                <Text style={styles.text}>Ongoing Tournaments & Pro Matches</Text>
                <View style={styles.section3}>
                    <View>
                        <LinearGradient
                            colors={['#691B31', '#F4F5F9']}
                            style={styles.boxes}
                        />
                    </View>
                    <View style={styles.break_h}></View>
                    <View>
                        <LinearGradient
                            colors={['#7E897C', '#F4F5F9']}
                            style={styles.boxes}
                        />
                    </View>
                    <View style={styles.break_h}></View>
                    <View>
                        <LinearGradient
                            colors={['#447EAB', '#F4F5F9']}
                            style={styles.boxes}
                        />
                    </View>
                </View>
            </View>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        width: '100%',
        backgroundColor: 'rgb(230,230,230)',
    },
    center: {
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    break_h: {
        width: 10
    },
    gif: {
        resizeMode: 'stretch',
        width: 370,
        borderRadius: 10
    },
    section1: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        height: '40%',
    },
    section2: {
        flex: 1,
        backgroundColor: '#F4F5F9',
        width: '100%'
    },
    section3: {
        flexDirection: 'row',
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
        width: 170,
        borderRadius: 10,
        padding: 20
    }
});