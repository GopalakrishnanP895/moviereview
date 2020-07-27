import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

function About(){

    return(
        <View style={styles.container}>
            <Text style={styles.about}>Hai, Am Gopala Krishnan I develop web Apps and mobile apps and this App contains movie reviews.It was developed for learning purpose only not to promote or disgrading anthing. If you want any app like this</Text>
            <Text style={styles.contact}>conatct@krishnan.gopal895.gk@gamil.com</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding: 20
    },
    about:{
        fontSize: 18,
        textAlign: "justify"
    },
    contact:{
        fontSize:16,
        color: "blue"
    }
})

export default About;