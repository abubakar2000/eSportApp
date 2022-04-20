import react from 'react';
import { View, Image, StyleSheet, Dimensions, Text, TouchableOpacity } from 'react-native';
import ProfilePicture from '../assets/10.jpg';
import {MaterialCommunityIcons ,MaterialIcons} from '@expo/vector-icons';
const dimensions = Dimensions.get('window');
const scrHeight = dimensions.height / 100 * 11;

const BackMenu = ({navigation, whereTo, title}) => {

    const onProfileClicked = () => {
        if (whereTo) {
            navigation.navigate(whereTo)
        } else{
            navigation.openDrawer()
        }
    }

    const onPressBack = () => {
        navigation.goBack()
    }

    return (
        <View style={styles.header}>
            <View style={{paddingTop: 1}}>
                <TouchableOpacity onPress={() => onPressBack()}>
                    <MaterialIcons name='arrow-back-ios' size={24} />
                </TouchableOpacity>
            </View>
            <View style={{width:'70%'}}>
                <Text style={{fontSize:16, fontWeight:'500'}}>{title}</Text>
            </View>
            <View>
                <TouchableOpacity style={[styles.accountContainer]} onPress={onProfileClicked}>
                    <Image source={ProfilePicture} style={[styles.profilePicture]} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        paddingTop: 60,
        paddingRight: 30,
        paddingLeft: 25,
        backgroundColor: '#fff',
        height: scrHeight,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-between'
    },
    back: {
        height: scrHeight - 75,
        width: 25
    },
    accountContainer: {
        flex: 1,
        alignItems: 'flex-end'
    },
    profilePicture: {
        height: 30,
        width: 30,
        borderRadius: 50,
    }
})

export default BackMenu;