import { StyleSheet, Text, View, Image, Animated } from 'react-native'
import React, { useState } from 'react'
import AppBar from '../components/AppBar'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import { ScrollView, TouchableOpacity } from 'react-native'
import ActionSheet from '../components/ActionSheet'

const InformationBox = ({ typeIndex = 2, Cash = 200, applicableIn = ["Scrims"] }) => {
    const [CashType, setCashType] = useState([
        { type: "Add Cash" },
        { type: "Withdraw" },
        { type: "Bonus Cash" },
    ])

    return (
        <View style={styles.box1}>
            <View style={styles.insideBox}>
                <View style={styles.imageRound}>
                    <Image style={styles.imageItself} source={require('../assets/favicon.png')} />
                </View>
                <View>
                    <Text style={{ color: 'gray', fontSize: 14 }}>{CashType[typeIndex].type}</Text>
                    <Text style={{ fontSize: 14, marginTop: 5 }}>₹{Cash}</Text>
                </View>
            </View>
            <View style={styles.rightSection}>
                {(typeIndex !== 2) &&
                    <TouchableOpacity>
                        <Text style={{ textDecorationLine: 'underline', color: '#444E64' }}>{CashType[typeIndex].type}</Text>
                    </TouchableOpacity>
                }
                {(typeIndex === 2) &&
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start' }}>
                        <MaterialCommunityIcons name="information-outline" color={'#444E64'} size={15} />
                        <View style={{ width: 80, marginLeft: 5 }}>
                            <Text style={{ fontSize: 10, color: '#444E64' }}>
                                Only Applicable in {applicableIn.map((type, index) => (
                                    <Text key={type}>{type}{index !== applicableIn.length - 1 ? " & " : ""}</Text>
                                ))}
                            </Text>
                        </View>
                    </View>
                }
            </View>
        </View>
    );
}
const ReferralBox = ({ image = require('../assets/favicon.png'), Title = "title", SubTitle = "subtitle" }) => {
    return (
        <TouchableOpacity style={styles.box1}>
            <View style={styles.insideBox}>
                <View style={styles.imageRound}>
                    <Image style={styles.imageItself} source={image} />
                </View>
                <View>
                    <Text style={{ color: 'gray', fontSize: 14 }}>{Title}</Text>
                    <Text style={{ fontSize: 12, marginTop: 5 }}>{SubTitle}</Text>
                </View>
            </View>
            <View style={styles.rightSection}>
                <MaterialIcons name='navigate-next' size={30} color={'rgb(80,80,80)'} />
            </View>
        </TouchableOpacity>
    );
}

const Wallet = ({ navigation }) => {
    const [OthersInWallet, setOthersInWallet] = useState([
        {
            othersImage: require('../assets/favicon.png'),
            othersTitle: 'Rewards'
        },
        {
            othersImage: require('../assets/favicon.png'),
            othersTitle: 'Transactions'
        },
        {
            othersImage: require('../assets/favicon.png'),
            othersTitle: 'Coupons'
        },
    ])

    // Action Sheet
    const [alignment, setAlignment] = useState(new Animated.Value(0));
    const showActionSheet = () => {
        Animated.timing(alignment, {
            toValue: 1,
            duration: 500,
            useNativeDriver: false
        }).start();

    }
    return (
        <View>
            <ScrollView>
                <AppBar navigation={navigation} title={"Wallet"}
                    showDrawer={false} whereTo={"Account"}
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
                        <InformationBox Cash={200} typeIndex={0} />
                        <InformationBox Cash={12000} typeIndex={1} />
                        <InformationBox Cash={1222} typeIndex={2} applicableIn={["Scrims", "Tournaments"]} />
                    </View>
                    <View>
                        <Text style={{ paddingTop: 15, paddingBottom: 15 }}>Others</Text>
                    </View>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                        {
                            OthersInWallet.map(other => (
                                <TouchableOpacity
                                    onPress={showActionSheet}
                                    key={other.othersTitle} style={{
                                        height: 90, width: 90, backgroundColor: 'white', borderRadius: 10,
                                        flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
                                        marginRight: 10, marginBottom: 10
                                    }}>
                                    <Image source={other.othersImage} style={{ height: 40, width: 40 }} />
                                    <Text style={{ marginTop: 8, fontSize: 12 }}>{other.othersTitle}</Text>
                                </TouchableOpacity>
                            ))
                        }
                    </View>
                    <View>
                        <Text style={{ paddingTop: 15, paddingBottom: 15 }}>Referral</Text>
                    </View>
                    <ReferralBox Title='Watch Ad' SubTitle='Watch Ad to earn bonus' image={require('../assets/favicon.png')} />
                    <ReferralBox Title='Refer a friend' SubTitle='Refer a friend to earn bonus cash' image={require('../assets/favicon.png')} />
                </View>
            </ScrollView>
            <ActionSheet showActionSheetMethod={showActionSheet}
                alignment={alignment}
                setAlignment={setAlignment}
                content={"Rewards"}
                />
        </View>
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
        flexDirection: 'row', justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 20, paddingRight: 20
    },
    insideBox: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    imageRound: {
    },
    imageItself: {
        height: 50,
        width: 50,
        borderRadius: 25,
        marginRight: 20
    },
    rightSection: {

    }
})