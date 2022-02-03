import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';
import React from 'react';

const Login = () => {
    return (
        <>
            <Text style={[styles.loginLabel]}>Login</Text>
            <TextInput style={[styles.inputField]} keyboardType='email-address' placeholder='Enter you email' />
            <TextInput style={[styles.inputField]} secureTextEntry={true} placeholder='Enter you password' />
            <TouchableOpacity style={[styles.loginButton]}>
                <Text>Login</Text>
            </TouchableOpacity>
        </>
    );
};

export default Login;

const styles = StyleSheet.create({
    loginLabel: {
        fontSize: 30,
        margin: 10,
        color:'rgb(120,120,120)',
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
    }

});