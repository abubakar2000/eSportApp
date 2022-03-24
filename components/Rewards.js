import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Dimensions } from 'react-native'
import { ScrollView } from 'react-native'
import { Image } from 'react-native'
const Rewards = () => {
    const [Rewards, setRewards] = useState([
        {
            name: 'b1',
            bg: 'blue',
            image: require('../assets/favicon.png'),
        },
        {
            name: 'b2',
            bg: 'pink',
            image: require('../assets/favicon.png'),
        },
        {
            name: 'b3',
            bg: 'yellow',
            image: require('../assets/favicon.png'),
        },
        {
            name: 'b4',
            bg: 'white',
            image: require('../assets/favicon.png'),
        },
        {
            name: 'b5',
            bg: 'red',
            image: require('../assets/favicon.png'),
        },
        {
            name: 'b6',
            bg: 'pink',
            image: require('../assets/favicon.png'),
        },
        {
            name: 'b7',
            bg: 'purple',
            image: require('../assets/favicon.png'),
        },
        {
            name: 'b8',
            bg: 'lighblue',
            image: require('../assets/favicon.png'),
        },
        {
            name: 'b9',
            bg: 'orange',
            image: require('../assets/favicon.png'),
        },
        {
            name: 'b10',
            bg: 'green',
            image: require('../assets/favicon.png'),
        },
    ])
    return (
        <View>
            <Text style={{ padding: 10 }}>My Rewards</Text>
            <ScrollView style={{height:Dimensions.get('screen').height-250}}>
                <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
                    {
                        Rewards.map(reward => (
                            <View key={reward.name} style={{ width: 160, height: 160, backgroundColor: reward.bg,
                             borderRadius: '10pt', margin: 5, justifyContent:'center',alignItems:'center' }}>
                                <Image source={reward.image} style={{height:50,width:50}} />
                            </View>
                        ))
                    }
                </View>
            </ScrollView>
        </View>
    )
}

export default Rewards

const styles = StyleSheet.create({})