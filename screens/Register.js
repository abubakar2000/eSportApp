import { View, Text, StyleSheet, TextInput, TouchableOpacity, Picker } from 'react-native';
import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import axios from 'axios';
import apiip from '../serverConfig';
import { Modal } from 'react-native';
import { Dimensions } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const Register = ({ navigation }) => {

    // const data = navigation.getParam('myTest');

    const onSignInPressed = () => {
        // navigation.goBack();
        navigation.pop();
    }

    const onLoginPressed = () => {
        if (Fname === "" || LName === "" || Email === "" || Password === "" || ConfirmedPassword === "") {
            setMessage("Fill all the fields")
            if (Password !== ConfirmedPassword) {
                setMessage("Password Must Match")
            }
            setShowSuccess(true)
            setTimeout(() => {
                setShowSuccess(false)
            }, 2000);
        } else {
            handleRegister();
        }
    }
    const [ShowSuccess, setShowSuccess] = useState(false)
    const [Message, setMessage] = useState("")


    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [ConfirmedPassword, setConfirmedPassword] = useState("")
    const [Fname, setFname] = useState("")
    const [LName, setLName] = useState("")
    const [Telephone, setTelephone] = useState("")
    const [Address, setAddress] = useState("")
    const [Country, setCountry] = useState("India")
    const [ProfileImage, setProfileImage] = useState("")
    const [PreferredGames, setPreferredGames] = useState([])
    const [UserWallet, setUserWallet] = useState({
        "Wallet_id": "some random waller id",
        "Deposit_cash": 0,
        "Winning_cash": 0,
        "Bonus_cash": 0
    })
    const [UserGamesInformation, setUserGamesInformation] = useState([])

    const [showCountryModal, setShowCountryModal] = useState(true)
    const [CountriesList, setCountriesList] = useState([
        "India", "Pakistan", "Canada", "Germany", "Denmark", "Sri Lanka"
    ])

    const handleRegister = () => {
        axios.post(`${apiip}/register`,
            {
                "User_uuid": "some random id", //TODO
                "Email": Email,
                "Password": Password,
                "Fname": Fname,
                "Lname": LName,
                "Telephone": Telephone,
                "Address": Address,
                "Country": Country,
                "ProfileImage": "string", //TODO
                "PreferredGames": [],
                "UserWallet": {
                    "Wallet_id": UserWallet.Wallet_id,
                    "Deposit_cash": UserWallet.Deposit_cash,
                    "Winning_cash": UserWallet.Winning_cash,
                    "Bonus_cash": UserWallet.Bonus_cash
                },
                "UsersGamesInformation": []
            }
        )
            .then(res => {
                console.log(res.data);
                setMessage("Successfully Registered")
                setShowSuccess(true)
                setTimeout(() => {
                    setShowSuccess(false)
                    navigation.navigate("Login")
                }, 2000);
            })
            .catch(err => {
                setMessage("Couldn't Register")
                setShowSuccess(true)
                setTimeout(() => {
                    setShowSuccess(false)
                }, 2000);
            })
    }
    return (
        <ScrollView style={{}}>
            <View style={{
                flex: 9, width: '100%', justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Modal
                    visible={showCountryModal}
                    animationType='slide'
                    transparent={true}
                >
                    <View style={{
                        width: '100%', height: Dimensions.get('screen').height,
                        alignItems: 'center', justifyContent: 'center'
                    }}>
                        <View style={{ padding: 10, backgroundColor: 'white', width: '80%',height:Dimensions.get('screen').height/3,
                        shadowOffset:{height:0,width:0},shadowColor:'gray',shadowRadius:5,shadowOpacity:0.5,elevation:10 }}>
                            <Text style={{padding:10,color:'gray'}}>Scroll to find you country</Text>
                            <ScrollView>
                                {
                                    CountriesList.map(country => (
                                        <TouchableOpacity
                                            onPress={() => setCountry(country)}
                                            key={country}>
                                            <View style={{ padding: 5, margin: 5, alignItems: 'stretch', flexDirection: 'row', justifyContent: 'space-between' }}>
                                                <Text>{country}</Text>
                                                <Text style={{ textAlign: 'left' }}>{country === Country ? '✔' : ''}</Text>
                                            </View>
                                        </TouchableOpacity>
                                    ))
                                }
                            </ScrollView>
                            <TouchableOpacity
                                onPress={() => setShowCountryModal(false)}
                            ><Text style={{
                                textAlign: 'center', padding: 10, backgroundColor: '#394D82',
                                color: 'white', marginTop: 20
                            }}>
                                    OK
                                </Text></TouchableOpacity>
                        </View>
                    </View>
                </Modal>
                <Modal
                    animationType='fade'
                    transparent={true}
                    visible={ShowSuccess}
                    onDismiss={() => setShowSuccess(false)}
                >
                    <View style={{ height: Dimensions.get('screen').height, width: '100%', position: 'absolute', justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ backgroundColor: 'white', padding: 15, shadowColor: 'gray', shadowOffset: { width: 0, height: 0 }, shadowOpacity: 10, borderRadius: 10, elevation: 10 }}>
                            <Text style={{ fontSize: 20 }} onPress={() => setShowSuccess(false)}>{Message}</Text>
                        </View>
                    </View>
                </Modal>
                <Text style={[styles.registerLabel]}>Haexr</Text>
                <Text style={styles.labelFieldStyle}>First Name</Text>
                <TextInput
                    value={Fname}
                    onChangeText={text => {
                        setFname(text)
                    }}
                    style={[styles.inputField]} placeholder='Enter you first name' />
                <Text style={styles.labelFieldStyle}>Last Name</Text>
                <TextInput
                    value={LName}
                    onChangeText={text => {
                        setLName(text)
                    }}
                    style={[styles.inputField]} placeholder='Enter you last name' />
                <Text style={styles.labelFieldStyle}>Email</Text>
                <TextInput
                    value={Email}
                    onChangeText={text => {
                        setEmail(text)
                    }}
                    style={[styles.inputField]} keyboardType='email-address' placeholder='Enter you email' />
                <Text style={styles.labelFieldStyle}>Password</Text>
                <TextInput
                    value={Password}
                    onChangeText={text => {
                        setPassword(text)
                    }}
                    style={[styles.inputField]} secureTextEntry={true} placeholder='Enter you password' />
                <Text style={styles.labelFieldStyle}>Confirm Password</Text>
                <TextInput
                    value={ConfirmedPassword}
                    onChangeText={text => {
                        setConfirmedPassword(text)
                    }}
                    style={[styles.inputField]} secureTextEntry={true} placeholder='confirm password' />
                <Text style={styles.labelFieldStyle}>Country</Text>
                <TextInput
                    
                    onPressIn={() => {
                        setShowCountryModal(true)
                    }}
                    value={Country}
                    // onChangeText={text => {
                    // setConfirmedPassword(text)
                    // }}
                    style={[styles.inputField]} placeholder='confirm password' />
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
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, marginBottom: 5 }}>
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
        marginBottom: 0,
        marginTop: 25,
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