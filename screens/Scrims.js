import { View, Text, StyleSheet, ScrollView, Dimensions, FlatList } from 'react-native';
import React, {useState} from 'react';
import Gif from '../components/Gif';
import Card from '../components/Card';
import BackMenu from '../components/BackMenu';
import { TouchableOpacity } from 'react-native-gesture-handler';

const dimensions = Dimensions.get('window');
const scrHeight = dimensions.height / 100 * 11;

const Scrims = ({navigation}) => {

    const titles = ['Scrims', 'Pro Matches', 'Tournaments'];

    const onNavigate = (screen, title) => {
        var sendTitle = 'BGMI ' + title;
        navigation.navigate(screen, sendTitle);
    }

    const [cardData, setCardData] = useState([
        {title: titles[0], nextPage: 'ScrimsExt'},
        {title: titles[1], nextPage: 'ScrimsExt'},
        {title: titles[2], nextPage: 'ScrimsExt'}
    ])

    return (
        <View>
            <ScrollView>
                <View style={[styles.container, styles.center]}>
                    <BackMenu navigation={navigation} whereTo={'Home'} title={'Battle Grounds Mobile India'} />
                    <View style={{ width: '100%', }}>
                        <ScrollView style={{ backgroundColor: 'white', }} horizontal={true}>
                            <Gif />
                        </ScrollView>
                    </View>

                    <FlatList
                        data={cardData}
                        style={{width:dimensions.width}}
                        scrollEnabled={false}
                        renderItem={({item}) => (
                            <View style={styles.section2}>
                                <View style={{paddingBottom: 10}}>
                                    <Text style={styles.text}>{item.title}</Text>
                                </View>

                                <TouchableOpacity onPress={() => onNavigate(item.nextPage, item.title)}>
                                    <Card />
                                </TouchableOpacity>
                            </View>
                        )}
                    />
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