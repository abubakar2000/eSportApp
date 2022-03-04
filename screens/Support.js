import { Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import AppBar from "../components/AppBar";
import Picture from '../assets/favicon.png'
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
const Support = ({ navigation }) => {
    return (
        <SafeAreaView>
            <AppBar title={"Support"} showDrawer={false} navigation={navigation} whereTo={''} />
            <View style={{ backgroundColor: 'rgb(245,245,245)', height: '100%', width: '100%' }}>
                <View>
                    <Text style={{ padding: 20 }}>Social Handles</Text>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{
                            height: 80, width: 80, backgroundColor: 'white',
                            margin: 5, borderRadius: 5, justifyContent: 'center', alignItems: 'center'
                        }}>
                            <Image source={Picture} style={{ width: 30, height: 30 }} />
                            <Text style={{ fontSize: 12, marginTop: 10 }}>Dicord</Text>
                        </View>
                        <View style={{
                            height: 80, width: 80, backgroundColor: 'white',
                            margin: 5, borderRadius: 5, justifyContent: 'center', alignItems: 'center'
                        }}>
                            <Image source={Picture} style={{ width: 30, height: 30 }} />
                            <Text style={{ fontSize: 12, marginTop: 10 }}>YouTube</Text>
                        </View>
                        <View style={{
                            height: 80, width: 80, backgroundColor: 'white',
                            margin: 5, borderRadius: 5, justifyContent: 'center', alignItems: 'center'
                        }}>
                            <Image source={Picture} style={{ width: 30, height: 30 }} />
                            <Text style={{ fontSize: 12, marginTop: 10 }}>Instagram</Text>
                        </View>
                        <View style={{
                            height: 80, width: 80, backgroundColor: 'white',
                            margin: 5, borderRadius: 5, justifyContent: 'center', alignItems: 'center'
                        }}>
                            <Image source={Picture} style={{ width: 30, height: 30 }} />
                            <Text style={{ fontSize: 12, marginTop: 10 }}>Facebook</Text>
                        </View>
                    </View>
                </View>
                <View>
                    <Text style={{ padding: 20 }}>Related Topics</Text>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{
                            height: 80, width: 80, backgroundColor: 'white',
                            margin: 5, borderRadius: 5, justifyContent: 'center', alignItems: 'center'
                        }}>
                            <Image source={Picture} style={{ width: 30, height: 30 }} />
                            <Text style={{ fontSize: 12, marginTop: 10 }}>T&C</Text>
                        </View>
                        <View style={{
                            height: 80, width: 80, backgroundColor: 'white',
                            margin: 5, borderRadius: 5, justifyContent: 'center', alignItems: 'center'
                        }}>
                            <Image source={Picture} style={{ width: 30, height: 30 }} />
                            <Text style={{ fontSize: 12, marginTop: 10 }}>Recent Chats</Text>
                        </View>
                        <View style={{
                            height: 80, width: 80, backgroundColor: 'white',
                            margin: 5, borderRadius: 5, justifyContent: 'center', alignItems: 'center'
                        }}>
                            <Image source={Picture} style={{ width: 30, height: 30 }} />
                            <Text style={{ fontSize: 12, marginTop: 10 }}>Rules</Text>
                        </View>
                        <View style={{
                            height: 80, width: 80, backgroundColor: 'white',
                            margin: 5, borderRadius: 5, justifyContent: 'center', alignItems: 'center'
                        }}>
                            <Image source={Picture} style={{ width: 30, height: 30 }} />
                            <Text style={{ fontSize: 12, marginTop: 10 }}>Rules</Text>
                        </View>
                    </View>
                </View>
                <View>
                    <Text style={{ padding: 20 }}>Popular Articles</Text>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        {
                            <TouchableOpacity style={{  width: '90%', backgroundColor: 'white',
                            justifyContent:'space-between',padding:15,borderRadius:5,flexDirection:'row',
                            alignItems:'center',marginTop:5,marginBottom:5 }}>
                                <Text style={{}}>How to create a Team</Text>
                                <MaterialIcons name="arrow-drop-down" size={22} />
                            </TouchableOpacity>
                        }
                        {
                            <TouchableOpacity style={{  width: '90%', backgroundColor: 'white',
                            justifyContent:'space-between',padding:15,borderRadius:5,flexDirection:'row',
                            alignItems:'center',marginTop:5,marginBottom:5 }}>
                                <Text style={{}}>How to create a Team</Text>
                                <MaterialIcons name="arrow-drop-down" size={22} />
                            </TouchableOpacity>
                        }
                        {
                            <TouchableOpacity style={{  width: '90%', backgroundColor: 'white',
                            justifyContent:'space-between',padding:15,borderRadius:5,flexDirection:'row',
                            alignItems:'center',marginTop:5,marginBottom:5 }}>
                                <Text style={{}}>How to create a Team</Text>
                                <MaterialIcons name="arrow-drop-down" size={22} />
                            </TouchableOpacity>
                        }
                        {
                            <TouchableOpacity style={{  width: '90%', backgroundColor: 'white',
                            justifyContent:'space-between',padding:15,borderRadius:5,flexDirection:'row',
                            alignItems:'center',marginTop:5,marginBottom:5 }}>
                                <Text style={{}}>How to create a Team</Text>
                                <MaterialIcons name="arrow-drop-down" size={22} />
                            </TouchableOpacity>
                        }
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default Support;
