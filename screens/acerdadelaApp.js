import React from 'react';
import {View, Text, StyleSheet, Image, Linking} from 'react-native';
import normalize from 'react-native-normalize';


const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: '#231F20',
        justifyContent: 'flex-start'
    },
    text: {
        color: 'white',
        fontSize: normalize(22),
        textAlign: 'center',
        marginTop: '5%'
    },
    image: {
        width: normalize(200),
        height: normalize(200),
        alignSelf: 'center',
        marginTop: '8%'
    },
    link: {
        color: 'white',
        fontSize: normalize(22),
        textAlign: 'center',
        marginTop: '5%',
        textDecorationLine: 'underline'

    }
})

const acerdadelaApp = () => {
    return(
        <View style={styles.mainContainer}>
            <Image style={styles.image} source={require('../assets/torchacercade.png')} />
            <Text style={styles.text}>Desarrollado por <Text style={{fontWeight: 'bold'}}>ElCapitalChile.</Text></Text>
            <Text style={styles.link}
                onPress={() => Linking.openURL('https://www.instagram.com/elcapitalchile/?hl=es')}>
                ¡Síguenos en Instagram! :D
            </Text>
        </View>
    )
}

export default acerdadelaApp;