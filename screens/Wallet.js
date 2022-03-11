import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppBar from '../components/AppBar'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { ScrollView } from 'react-native'

const Wallet = ({ navigation }) => {
    return (
        <ScrollView>
            <AppBar navigation={navigation} title={"Wallet"}
                showDrawer={true} whereTo={"Account"}
                centerFocused={false}
            />
            <View style={{ paddingLeft: 10, paddingRight: 10 }}>
                <View style={{ paddingTop: 20, paddingBottom: 10, marginBottom: 10 }}>
                    <Text>Total Cash</Text>
                </View>
                <View style={{
                    flexDirection: 'row', justifyContent: 'space-between',
                    alignItems: 'flex-end', marginBottom: 20
                }}>
                    <Text style={styles.balance}>₹200</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <MaterialCommunityIcons style={{ marginRight: 5 }} name='information-outline' size={15} />
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={{ fontSize: 12 }}>Only Applicable</Text>
                            <Text style={{ fontSize: 12 }}>in Pro Matches</Text>
                        </View>
                    </View>
                </View>
                <View>
                    <View style={styles.box1 }>
                        <View style={{}}>
                            
                        </View>
                        <View>

                        </View>
                        <View>

                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default Wallet

const styles = StyleSheet.create({
    balance: {
        fontSize: 22,
        fontWeight: '600'
    },
    box1: {
        height: 80, width: '100%', backgroundColor: 'white'
        , marginTop: 10, marginBottom: 10, borderRadius: 10,
        flexDirection:'row'
    }
})