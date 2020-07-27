import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Splash(){

    return (
        <View style={Styles.conatiner}>
            <Text style={Styles.title}>Movie Review</Text>
        </View>
    )
} 

const Styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#3498DB"
    },
    title:{
        fontSize: 20,
        color: "#fff",
        fontWeight: "bold"
    }
})