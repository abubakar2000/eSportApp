import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

const Login = ({ navigation }) => {

    const [Test, setTest] = useState({hello:"abubakar"});

    const onClickRegister = () => {
        // navigation.navigate('Register',{myTest:Test})
        navigation.push('Register',{myTest:Test})
    }

    return (
        <View style={{ flex: 9, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={[styles.loginLabel]}>Login</Text>
            <TextInput style={[styles.inputField]} keyboardType='email-address' placeholder='Enter you email' />
            <TextInput style={[styles.inputField]} secureTextEntry={true} placeholder='Enter you password' />
            <TouchableOpacity style={[styles.loginButton]} >
                <Text style={{ color: "white" }}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.registerButton]} onPress={onClickRegister}>
                <Text >Register</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Login;

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
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 10,
        width: '80%',
        margin: 10,
        alignItems: 'center',
    },
    registerButton: {
        backgroundColor: 'rgb(230,230,230)',
        padding: 10,
        borderRadius: 10,
        width: '80%',
        margin: 10,
        alignItems: 'center',
    },
});