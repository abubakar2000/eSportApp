import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { TouchableOpacity } from 'react-native';

const DateAndTimeActionSheet = ({ TeamRegistrationObject }) => {
    useEffect(() => {
        const CancelToken = axios.CancelToken;
        const source = CancelToken.source();

        console.log("=====TreamReg=====");
        console.log(TeamRegistrationObject);
        return () => {
        }
    }, [axios])

    const [Date, setDate] = useState("")
    const [Time, setTime] = useState("")

    return (
        <View style={{ minHeight: 400 }}>
            <Text>
                Date slot
            </Text>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', flexWrap: 'wrap', paddingTop: 10, paddingBottom: 10 }}>
                {
                    TeamRegistrationObject.OptDates !== undefined &&
                    TeamRegistrationObject.OptDates.map(date => (
                        <TouchableOpacity
                            onPress={() => { setDate(date) }}
                            style={[{ backgroundColor: 'white', margin: 5, paddingTop: 10, paddingBottom: 10, paddingLeft: 20, paddingRight: 20, borderRadius: 10, },
                            date === Date ? { borderWidth: 1, borderColor: 'orange' } : { borderWidth: 1, borderColor: 'transparent' }]}>
                            <Text>{date}</Text>
                        </TouchableOpacity>
                    ))
                }
            </View>
            <Text>Time slot</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', flexWrap: 'wrap', paddingTop: 10, paddingBottom: 10 }}>
                {TeamRegistrationObject.OptTimes !== undefined &&
                    TeamRegistrationObject.OptTimes.map(time => (
                        <TouchableOpacity
                            onPress={() => setTime(time)}
                            style={[{ backgroundColor: 'white', margin: 5, paddingTop: 10, paddingBottom: 10, paddingLeft: 20, paddingRight: 20, borderRadius: 10, },
                            time === Time ? { borderWidth: 1, borderColor: 'orange' } : { borderWidth: 1, borderColor: 'transparent' }]}>
                            <Text>{time}</Text>
                        </TouchableOpacity>
                    ))
                }
            </View>
            <View>
                <TouchableOpacity
                    style={{ backgroundColor: "#384d83", borderRadius: 5,width:130 }}>
                    <Text
                        // onPress={registerForTournament}
                        style={{
                            fontSize: 15,
                            color: 'white', paddingTop: 10, paddingBottom: 10,
                            paddingLeft: 20, paddingRight: 20
                        }}>Book Slot</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default DateAndTimeActionSheet

const styles = StyleSheet.create({})