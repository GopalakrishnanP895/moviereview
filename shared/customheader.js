import React from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 
import { StatusBar } from 'expo-status-bar';


export default function AppHeader({title, navigation}){
    const toggleMenu = () => {
        navigation.openDrawer();
    }

    return(
        <View style={styles.header}>
            <TouchableOpacity style={styles.menu}  onPress={toggleMenu}>
                <Entypo  name="menu" size={32} color="#fff" />
            </TouchableOpacity>
            <View>
                <Text style={styles.titleText}>{title}</Text>
            </View>
            <StatusBar style="light" backgroundColor="#2E86C1"/>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{        
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#3498DB",
        height: "100%",
        width:Dimensions.get('screen').width,
    },
    titleText: {
        fontSize: 20,
        fontWeight: "bold",
        letterSpacing: 1,
        color: '#fff'
    },
    menu:{
        position: "absolute",
        left: 16,
    },
    statusbar:{
        backgroundColor: '#5DADE2'
    }
})