import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import apiip from '../serverConfig'

const GamelgnandidComponent = ({
    title,
    gameImage,
}) => {

    const LoginChangeHandler = (e) => {

    }

    const IDChangeHandler = (e) => {

    }

    return (
        <View style={[styles.container]}>
            <Text style={[styles.gameTitle]}>{title}</Text>
            <View style={[styles.rootContainer]}>
                <Image source={ {uri: `${apiip}/${gameImage}`}} style={[styles.gameImageStyle]} />
                <View style={[styles.inputGroup]}>
                    <View style={[styles.inputFieldContainer]}>
                        <TextInput onChange={LoginChangeHandler} placeholder='IGN' style={[styles.inputField]} />
                    </View>
                    <View style={[styles.inputFieldContainer]}>
                        <TextInput onChange={IDChangeHandler} placeholder='ID' style={[styles.inputField]} />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default GamelgnandidComponent

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        marginBottom: 10,
    },
    rootContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    gameTitle: {
        marginTop: 15,
        marginBottom: 5,
        marginLeft: 70,
        color: 'gray',
    },
    gameImageStyle: {
        height: 60,
        width: 60,
        borderRadius: 30,
    },
    inputGroup: {
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row'
    },
    inputFieldContainer: {
        flex: 1,
        justifyContent: 'center',
        padding: 10
    },
    inputField: {
        fontSize: 12,
        padding: 10,
        backgroundColor: 'white',
        borderBottomColor: 'rgb(57 ,78 ,131)',
        borderBottomWidth: 2,
        borderRadius: 5,
    },
})