import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const UploadScreenShots = ({dataArray}) => {
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
                        <View style={{ flexDirection: 'row', backgroundColor: 'white', padding: 10, borderRadius: 10 }}>
                            <View style={{ flex: 1 }}>
                                <Image source={require('../assets/favicon.png')} />
                            </View>
                            <View style={{ flex: 5, flexDirection: 'column', paddingLeft: 20 }}>
                                <Text style={{ fontSize: 12, color: 'black' }}>Round 2</Text>
                                <Text style={{ fontSize: 12, color: 'gray' }}>26/06/2020</Text>
                                <Text style={{ fontSize: 12, color: 'gray' }}>Errangle TPP</Text>
                            </View>
                            <View style={{ justifyContent: 'flex-end' }}>
                                <TouchableOpacity
                                    style={{
                                        backgroundColor: '#2B3963', color: 'white', paddingTop: 5,
                                        paddingBottom: 5, textAlign: 'center', paddingLeft: 20, paddingRight: 20,
                                        borderRadius: 5
                                    }}>
                                    <Text style={{
                                        color: 'white'
                                    }}>Upload</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    }
                </View>
            </>
        </View>
    )
}

export default UploadScreenShots

const styles = StyleSheet.create({})