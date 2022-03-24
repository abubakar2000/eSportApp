import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React,{useState} from 'react'

const RoundsList = () => {
    const [Round, setRound] = useState([
        1,2,3
    ])
    return (
        <View>
            <>
                <View style={{
                    flexDirection: 'row', justifyContent: 'space-between',
                    width: '100%', marginTop: 20, marginBottom: 20
                }}>
                    <Text style={{ fontSize: 12 }}>Full Match Details</Text>
                    <Text style={{ fontSize: 12 }}>BGMI Match #7768</Text>
                </View>
                <View>
                    {
                        Round.map(dataArray => (
                            <View key={dataArray} style={{ flexDirection: 'row', backgroundColor: 'white', padding: 10, borderRadius: 10 }}>
                                <View style={{ flex: 1 }}>
                                    <Image source={require('../assets/favicon.png')} />
                                </View>
                                <View style={{ flex: 5, flexDirection: 'column', paddingLeft: 20 }}>
                                    <Text style={{ fontSize: 12, color: 'black' }}>Round 2</Text>
                                    <Text style={{ fontSize: 12, color: 'gray' }}>26/06/2020</Text>
                                    <Text style={{ fontSize: 12, color: 'gray' }}>Errangle TPP</Text>
                                </View>
                            </View>
                        ))

                    }
                </View>
            </>
        </View>
    )
}

export default RoundsList

const styles = StyleSheet.create({})