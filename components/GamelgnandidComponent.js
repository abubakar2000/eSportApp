import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

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
                <Image source={gameImage} style={[styles.gameImageStyle]} />
                <View style={[styles.inputGroup]}>
                    <View style={[styles.inputFieldContainer]}>
                        <TextInput onChange={LoginChangeHandler} placeholder='Login' style={[styles.inputField]} />
                    </View>
                    <View style={[styles.inputFieldContainer]}>
                        <TextInput onChange={IDChangeHandler} placeholder='Id' style={[styles.inputField]} />
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
        marginLeft: 70, //10 + diameter of game image
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
        borderBottomColor: 'blue',
        borderBottomWidth: 2,
        borderRadius: 5,
    },
})