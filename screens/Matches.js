import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppBar from '../components/AppBar'

const Matches = ({ navigation }) => {
    return (
        <View>
            <AppBar navigation={navigation} title={'My Matches'} showDrawer={false} whereTo={''} />
            <Text>Matches</Text>
        </View>
    )
}

export default Matches

const styles = StyleSheet.create({})