import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ScrollView } from 'react-native';
import axios from 'axios';
import apiip from '../serverConfig';
import { Modal } from 'react-native';
import { Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setEmailState, setPasswordState } from '../data/stateSlice';




const Login = ({ navigation }) => {
    const emailState = useSelector(state => state.appState.email);
    const passwordState = useSelector(state => state.appState.password);
    const dispatch = useDispatch()

    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    const onClickRegister = () => {
        // navigation.navigate('Register',{myTest:Test})
        navigation.push('Register')
    }
    const OpenDrawer = () => {
        navigation.openDrawer()
    }

    const onLoginPressed = () => {
        axios.post(`${apiip}/login`, {
            "Email": Email,
            "Password": Password,
        })
            .then(res => {
                console.log(res.data);
                if (res.data === "OK") {
                    setMessage("Successfully Logged In")
                    dispatch(setEmailState(Email))
                    dispatch(setPasswordState(Password))
                    navigation.navigate("AppDrawer");
                    setShowMessage(true)
                    setTimeout(() => {
                        setShowMessage(false)

                    }, 100);
                } else {
                    setMessage("Incorrect Email or Password")
                    setShowMessage(true)
                    setTimeout(() => {
                        setShowMessage(false)
                    }, 1500);
                    console.log("Error 1");
                }
            })
            .catch(err => {
                console.log(err);
                setMessage("Incorrect Email or Password")
                setShowMessage(true)
                setTimeout(() => {
                    setShowMessage(false)
                }, 1500);
            })
    }
    const [ShowMessage, setShowMessage] = useState(false)
    const [Message, setMessage] = useState("")
    return (
        <ScrollView style={{}}>
            <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', }}>
                <Modal
                    transparent={true}
                    visible={ShowMessage}
                    animationType="fade"
                >
                    <View style={{
                        height: Dimensions.get("screen").height, width: '100%',
                        alignItems: 'center', justifyContent: 'center'
                    }}>
                        <View style={{
                            backgroundColor: 'white', padding: 15, shadowColor: 'gray',
                            shadowOffset: { width: 0, height: 0 }, shadowOpacity: 1, shadowRadius: 5, elevation: 5,
                            borderRadius: 10
                        }}>
                            <Text style={{ fontSize: 20 }}>{Message}</Text>
                        </View>
                    </View>
                </Modal>
                <Text style={{ fontSize: 37, color: 'gray', marginTop: 170 }}
                    onPress={() => {
                        axios.get("http://localhost:3000/test")
                            .then(res => {
                                console.log(res.data);
                            })
                            .catch(err => {
                                console.log(err);
                            })
                    }}
                >Haexr</Text>
                <Text style={styles.inputFieldLabel}>Email</Text>
                <TextInput
                    onChangeText={text => setEmail(text)}
                    value={Email}
                    style={[styles.inputField]}
                    keyboardType='email-address'
                    placeholder='Enter you email'
                />
                <Text style={styles.inputFieldLabel}>Password</Text>
                <TextInput
                    value={Password}
                    onChangeText={text => setPassword(text)}
                    style={[styles.inputField]} secureTextEntry={true} placeholder='Enter you password' />
                <TouchableOpacity
                    onPress={onLoginPressed}
                    style={[styles.loginButton]} >
                    <Text style={{ color: "white" }}>Login</Text>
                </TouchableOpacity>
                <Text style={{ marginTop: 10 }}>Need help? <Text style={{ color: '#394D82', }}>Click here</Text></Text>
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
                    <Text style={{ padding: 15, color: '#554F82' }}>New User? </Text>
                    <TouchableOpacity style={[styles.registerButton]} onPress={onClickRegister}>
                        <Text >Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

export default Login;

const styles = StyleSheet.create({
    inputFieldLabel: {
        textAlign: 'left',
        width: '90%'
    },
    inputField: {
        borderWidth: 1,
        padding: 10,
        borderColor: '#394D82',
        borderRadius: 5,
        width: '90%',
        margin: 10,
    },
    loginButton: {
        backgroundColor: '#394D82',
        padding: 10,
        borderRadius: 5,
        width: '30%',
        margin: 10,
        alignItems: 'center',
    },
    registerButton: {
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        borderWidth: 1,
        width: '50%',
        borderColor: '#394D82'
    },
    DrawerOpener: {
        margin: 10,
        paddingRight: 10,
        width: '90%',
        alignItems: 'flex-end'
    },
    signupservice: {
    },
    signupservicecontainer: {
        borderWidth: 1,
        margin: 5,
        padding: 3,
        borderColor: 'rgb(200,200,200)',
        borderRadius: 100
    }
});