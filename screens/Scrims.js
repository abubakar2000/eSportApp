import { View, Text, StyleSheet, ScrollView, Dimensions, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import Gif from '../components/Gif';
import Card from '../components/Card';
import BackMenu from '../components/BackMenu';
import { TouchableOpacity } from 'react-native-gesture-handler';
import apiip from '../serverConfig';
import { Image } from 'react-native';

const dimensions = Dimensions.get('window');
const scrHeight = dimensions.height / 100 * 11;

const Scrims = ({ navigation, route }) => {

    // Params that are being sent from the previous screen 😂
    // GameID, GameName, GameTeamType, GameLogo, GameCategory

    const [titles, settitles] = useState(route.params.GameCategory)

    const onNavigate = (screen, title) => {
        return
        // var sendTitle = 'BGMI ' + title;
        // var sendTitle = route.params.GameName
        // console.log("Going to");
        // console.log(screen);
        // console.log(title);
        // navigation.navigate(screen, sendTitle);
    }

    // const [cardData, setCardData] = useState([
    //     {title: titles[0], nextPage: 'ScrimsExt'},
    //     {title: titles[1], nextPage: 'ScrimsExt'},
    //     {title: titles[2], nextPage: 'ScrimsExt'}
    // ])
    useEffect(() => {
        settitles(route.params.GameCategory)
        return () => {
        }
    }, [route])


    return (
        <View>
            <View style={[styles.container, styles.center]}>
                <BackMenu navigation={navigation} whereTo={'Home'} title={route.params.GameName} />
                <View style={{ width: '100%', marginBottom: 40 }}>
                    <ScrollView style={{ backgroundColor: 'white', }} horizontal={true}>
                        <Gif />
                    </ScrollView>
                </View>

                {
                    route.params.GameCategory.map(cat => (
                        <View>
                            <Text style={{padding:10,marginLeft:10}}>{cat}</Text>
                            <TouchableOpacity onPress={() => onNavigate('Scrims')} style={styles.card}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 1 }}>
                                    <View style={styles.imgContainer}>
                                        <Image
                                            style={styles.img}
                                            source={{ uri: `${apiip}/${route.params.GameLogo}` }}
                                        />
                                    </View>
                                    <View style={{ width: '50%', justifyContent: 'center' }}>
                                        <Text style={styles.heading}>{route.params.GameName}</Text>
                                        <Text style={styles.text}>{route.params.GameTeamType}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 5, flex: 1 }}>
                                        <View style={{}}>
                                            <Image
                                                style={styles.infoImg}
                                                source={require('../assets/info.png')}
                                            />
                                        </View>
                                        <View style={{ height: '100%', justifyContent: 'center' }}>
                                            {route.params.GameCategory !== undefined &&
                                                // route.params.GameCategory.map(cat => (
                                                <Text key={cat} style={styles.infoText}>{cat}</Text>
                                                // ))
                                            }
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    ))
                }
                {/* <FlatList
                    data={titles}
                    style={{ width: dimensions.width }}
                    renderItem={({ item }) => (
                        <View style={styles.section2}>
                            <View style={{ paddingBottom: 10 }}>
                                <Text style={styles.text}>{item}</Text>
                            </View>
                           
                        </View>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                /> */}
            </View>
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


    // Card Styles
    card: {
        // marginTop:10,
        marginLeft: 15,
        marginRight: 15,
        backgroundColor: '#fff',
        height: 100,
        borderRadius: 10,
        marginBottom: 10,
        width: dimensions.width - 30

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

export default Scrims;