import React from 'react';
import {Text, Image, View, StyleSheet, ScrollView} from 'react-native';
import normalize from 'react-native-normalize';

const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: '#231F20'
    },
    title: {
        color: '#ffffff',
        fontSize: normalize(25),
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: '5%',
        marginBottom: '5%',
        width: '100%',
    },
    textLiberalismo:{
        color: 'white',
        fontSize: normalize(23),
        letterSpacing: 1,
        marginTop: '5%',
        marginBottom: '5%',
        textAlign: 'justify',
        width: '94%',
        marginLeft: '3%',
        marginRight: '3%'
    },
    scroll: {
        width: '100%',
        height: '100%',
        backgroundColor: '#231F20'

    }
})

const detallesLiberalismo = ({navigation}) =>{
    const title = navigation.getParam('title');
    const image = navigation.getParam('image');
    const definition = navigation.getParam('definition');
    return(
        <ScrollView style={styles.scroll}>
        <View style={styles.mainContainer}>
            
        <Text style={styles.title}>{title}</Text>
        {image}
        
        <Text style={styles.textLiberalismo}>{definition}</Text>
       
       
        </View>
        </ScrollView>
    )
}


export default detallesLiberalismo;