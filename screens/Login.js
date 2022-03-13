import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { ScrollView } from 'react-native';
const Login = ({ navigation }) => {

    const [Test, setTest] = useState({ hello: "abubakar" });

    const onClickRegister = () => {
        // navigation.navigate('Register',{myTest:Test})
        navigation.push('Register', { myTest: Test })
    }
    const OpenDrawer = () => {
        // navigation.navigate('Register',{myTest:Test})
        navigation.openDrawer()
    }

    const onLoginPressed = () => {
        navigation.navigate("AppDrawer");
    }

    return (
        <ScrollView style={{ }}>
            <View style={{width:'100%',justifyContent:'center',alignItems:'center',}}>
                <Text style={{ fontSize: 37, color: 'gray',paddingTop:130 }}>Haexr</Text>
                <Text style={styles.inputFieldLabel}>Email</Text>
                <TextInput style={[styles.inputField]} keyboardType='email-address' placeholder='Enter you email' />
                <Text style={styles.inputFieldLabel}>Password</Text>
                <TextInput style={[styles.inputField]} secureTextEntry={true} placeholder='Enter you password' />
                <TouchableOpacity 
                onPress={onLoginPressed}
                style={[styles.loginButton]} >
                    <Text style={{ color: "white" }}>Login</Text>
                </TouchableOpacity>
                <Text style={{ marginTop: 10 }}>Need help? <Text style={{ color: '#394D82', }}>Click here</Text></Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20,marginBottom:10 }}>
                    <View style={{ flex: 5, borderWidth: 0.5, height: 1 }}></View>
                    <Text style={{ flex: 1, textAlign: 'center', }}>OR</Text>
                    <View style={{ flex: 5, borderWidth: 0.5, height: 1 }}></View>
                </View>
                <Text style={{margin:10}}>Continue with</Text>
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
                    <Text style={{padding:15,color:'#554F82'}}>New User? </Text>
                    <TouchableOpacity style={[styles.registerButton]} onPress={onClickRegister}>
                        <Text >Register</Text>
                    </TouchableOpacity>
                </View>
                {/* <TouchableOpacity style={[styles.DrawerOpener]} onPress={OpenDrawer}>
                <Text>Menu</Text>
            </TouchableOpacity> */}
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
        borderColor:'#394D82'
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