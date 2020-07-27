import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import globalstyles from '../styles/globalstyles'

function ReviewDetail({ route }){

    let { title, rating, review, description, image } = route.params;
    
    const ratings = () => {
        return (
            [...Array(rating)].map(() => <AntDesign key={Math.random()} name="star" size={24} color="#F4D03F" />)
            )
    }

    return(
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.movieImage} source ={{ uri: image }}/>
            </View>
            <View style={styles.movieContent}>
                <ScrollView>
                    <Text style={styles.title}> { title }</Text>
                    <View>
                        <Text style={{...styles.title, ...styles.description}}>Description</Text>
                        <Text style={styles.text}>{ description }</Text>
                    </View>
                    <View style={styles.ratingSection}>
                        <Text style={{...styles.title, ...styles.description}}>Rating</Text>
                        <View style={styles.stars}>{ratings()}</View>
                    </View>
                    <View style={styles.reviewContainer}>
                        <Text style={{...styles.title, ...styles.description}}>Review</Text>
                        <Text style={styles.text}>{review}</Text>
                    </View>
                    
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    imageContainer:{
       height: 200,
       backgroundColor: "#000",
    },
    movieImage:{
        width: "100%",
        height: "100%",
        resizeMode: "contain"
    },
    container: {
        flex: 1
    },
    movieContent: {
        flex: 1,
        backgroundColor: "#fff"
    },
    title:{
        fontSize: 24,
        fontWeight: "bold",
        color: "#2C3E50",
        marginVertical: 10
    },
    description:{
        fontSize: 18,
    },
    text:{
        paddingHorizontal: 10,
        textAlign: "justify"
    },
    stars: {
        flexDirection: "row"
    },
    ratingSection: {
        borderBottomWidth: 2,
        paddingBottom: 15,
        borderColor: "#D6DBDF"
        
    },
    reviewContainer:{
        marginBottom: 30
    }
})

export default ReviewDetail;