import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';

const Register = ({ navigation }) => {

    // const data = navigation.getParam('myTest');

    const onSignInPressed = () => {
        // navigation.goBack();
        navigation.pop();
    }

    return (
        <View style={{ flex: 9, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={[styles.loginLabel]}>Still working on Register</Text>
            <TextInput style={[styles.inputField]} keyboardType='email-address' placeholder='Enter you email' />
            <TextInput style={[styles.inputField]} secureTextEntry={true} placeholder='Enter you password' />
            <TouchableOpacity style={[styles.loginButton]}>
                <Text>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.signininstead]} onPress={onSignInPressed}>
                <Text>Sign in Instead </Text>
                {/* {navigation.getParam('myTest').hello} */}
            </TouchableOpacity>
        </View>
    );
};

export default Register;

const styles = StyleSheet.create({
    loginLabel: {
        fontSize: 30,
        margin: 10,
        color: 'rgb(120,120,120)',
    },
    inputField: {
        borderWidth: 1,
        padding: 10,
        borderColor: 'rgb(200,200,200)',
        borderRadius: 10,
        width: '80%',
        margin: 10,
    },
    loginButton: {
        backgroundColor: 'rgb(230,230,230)',
        padding: 10,
        borderRadius: 10,
        width: '80%',
        margin: 10,
        alignItems: 'center',
    },
    signininstead: {
        backgroundColor: 'rgb(230,230,230)',
        padding: 10,
        borderRadius: 10,
        width: '80%',
        margin: 10,
        alignItems: 'center',
    }
});