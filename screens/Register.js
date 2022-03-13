import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const Register = ({ navigation }) => {

    // const data = navigation.getParam('myTest');

    const onSignInPressed = () => {
        // navigation.goBack();
        navigation.pop();
    }

    const onLoginPressed = () => {
        navigation.navigate("AppDrawer")
    }

    return (
        <ScrollView style={{}}>
            <View style={{
                flex: 9, width: '100%', justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Text style={[styles.registerLabel]}>Haexr</Text>
                <Text style={styles.labelFieldStyle}>First Name</Text>
                <TextInput style={[styles.inputField]} placeholder='Enter you first name' />
                <Text style={styles.labelFieldStyle}>Last Name</Text>
                <TextInput style={[styles.inputField]} placeholder='Enter you last name' />
                <Text style={styles.labelFieldStyle}>Email</Text>
                <TextInput style={[styles.inputField]} keyboardType='email-address' placeholder='Enter you email' />
                <Text style={styles.labelFieldStyle}>Password</Text>
                <TextInput style={[styles.inputField]} secureTextEntry={true} placeholder='Enter you password' />
                <Text style={styles.labelFieldStyle}>Confirm Password</Text>
                <TextInput style={[styles.inputField]} secureTextEntry={true} placeholder='confirm password' />
                <View style={{ marginTop: 40, marginBottom: 10 }}>
                    <Text style={{ fontSize: 11, textAlign: 'center' }}>By Continuing you agree to Clossum's</Text>
                    <Text style={{ fontSize: 11, textAlign: 'center' }}>Terms of use and Privacy Policy</Text>
                </View>
                <TouchableOpacity
                    onPress={onLoginPressed}
                    style={{
                        paddingTop: 10, paddingBottom: 10, backgroundColor: '#394D82',
                        borderRadius: 5, paddingLeft: 25, paddingRight: 25
                    }}>
                    <Text style={{ color: 'white' }}>Create a New Account</Text>
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, marginBottom: 10 }}>
                    <View style={{ flex: 5, borderWidth: 0.5, height: 1 }}></View>
                    <Text style={{ flex: 1, textAlign: 'center', }}>OR</Text>
                    <View style={{ flex: 5, borderWidth: 0.5, height: 1 }}></View>
                </View>
                <Text style={{ margin: 10 }}>Continue with</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity style={styles.signupservicecontainer}>
                        <MaterialCommunityIcons style={styles.signupservice} name='google' color={'red'} size={30} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.signupservicecontainer}>
                        <MaterialCommunityIcons style={styles.signupservice} name='facebook' color={'#057EE8'} size={30} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.signupservicecontainer}>
                        <MaterialCommunityIcons style={styles.signupservice} name='twitter' color={'#47ABDF'} size={30} />
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                    <Text style={{ padding: 15, color: '#554F82' }}>Existing User? </Text>
                    <TouchableOpacity style={[styles.registerButton]} onPress={onSignInPressed}>
                        <Text >Log In</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ height: 100 }}></View>
            </View>
        </ScrollView>
    );
};

export default Register;

const styles = StyleSheet.create({
    registerLabel: {
        fontSize: 37,
        marginBottom: 10,
        marginTop: 100,
        color: 'rgb(120,120,120)',
    },
    labelFieldStyle: {
        width: '90%',
        textAlign: 'left',
        marginTop: 10
    },
    inputField: {
        borderWidth: 1,
        padding: 10,
        borderColor: '#394D82',
        borderRadius: 5,
        width: '90%',
        margin: 5,
    },
    loginButton: {
        backgroundColor: 'rgb(230,230,230)',
        padding: 10,
        borderRadius: 10,
        width: '100%',
        margin: 10,
        alignItems: 'center',
    },
    signininstead: {
        backgroundColor: 'rgb(230,230,230)',
        padding: 10,
        borderRadius: 5,
        width: '100%',
        margin: 10,
        alignItems: 'center',
    },
    cancelRegistrationBtn: {

        width: '100%',
        alignItems: 'flex-end',
        padding: 10
    },
    cancelText: {
        color: 'rebeccapurple',
        fontWeight: 'bold'
    },
    signupservice: {
    },
    signupservicecontainer: {
        borderWidth: 1,
        margin: 5,
        padding: 3,
        borderColor: 'rgb(200,200,200)',
        borderRadius: 100
    },
    registerButton: {
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        borderWidth: 1,
        width: '50%',
        borderColor: '#394D82'
    },
});