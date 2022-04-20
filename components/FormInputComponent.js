import React from 'react'
import { Text, TextInput, View } from 'react-native'
import { StyleSheet } from 'react-native'

const FormInputComponent = (
    {
        label = "label here",
        placeholder = "placeholder here",
        value,
        valueMutator,
        keyboardType
    }
) => {

    const handleInputChnage = (e) => {
        valueMutator(e)
    }

    return (
        <View style={[styles.container]}>
            <Text
                style={[styles.labelContainer]}>
                {label} {value}
            </Text>
            <TextInput
                keyboardType={keyboardType}
                onChangeText={handleInputChnage}
                value={value}
                placeholder={placeholder}
                style={[styles.inputField]} />
        </View>
    )
}

export default FormInputComponent

const styles = StyleSheet.create({
    container: {
        padding: 12,
    },
    labelContainer: {
        margin: 10,
        color: 'gray',
        fontSize: 12,
    },
    inputField: {
        fontSize: 14,
        padding: 10,
        width: '100%',
        backgroundColor: 'white',
        borderBottomColor: '#374E82',
        borderBottomWidth: 2,
        borderRadius: 5,
    },
});