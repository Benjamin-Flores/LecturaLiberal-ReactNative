import React from 'react';
import {View, Text, ScrollView, StyleSheet, Image} from 'react-native';
import normalize from 'react-native-normalize';

const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: '#231F20'
    },
    scroll: {
        width: '100%',
        backgroundColor: '#231F20'
    },
    title:{
        color: 'white',
        fontSize: normalize(35),
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: normalize(10)

    },
    liberty:{
        width: normalize(120),
        height: normalize(260),
        alignSelf: 'center',
        marginTop: '10%'
    },
    greenarrow:{
        marginTop: '5%',
        width: normalize(50),
        height: normalize(50),
        alignSelf: 'center'
    },
    textLiberalismo:{
        color: 'white',
        fontSize: normalize(23),
        letterSpacing: 1,
        marginTop: '5%',
        textAlign: 'justify',
        width: '94%',
        marginLeft: '3%',
        marginRight: '3%'
    },
    subtitle: {
        color: 'white',
        fontSize: normalize(25),
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: '10%'
    },
    librecomercio: {
        width: normalize(210),
        height: normalize(140),
        alignSelf: 'center',
        marginTop: '5%'
    },
    textYellow:{
        color: 'yellow'
    }
})


const Liberalismo = () =>{
    return(
        <View style={styles.mainContainer}>
            <ScrollView style={styles.scroll}>
                <Text style={styles.title}>
                    LIBERALISMO
                </Text>
                <Image style={styles.liberty} source={require('../assets/liberty.png')} />
                <Text style={styles.textLiberalismo}>El <Text style={styles.textYellow}>Liberalismo</Text> es una <Text style={styles.textYellow}>filosofía </Text>política, económica y social que defiende la libertad del <Text style={styles.textYellow}>individuo</Text> con una intervención mínima del Estado en la vida social y económica. Este se basa en los siguientes pilares: </Text>
                <Image style={styles.greenarrow} source={require('../assets/greenarrow.png')} />
                <Text style={styles.subtitle}>LIBRE COMERCIO</Text>
                <Image style={styles.librecomercio} source={require('../assets/librecomercio.png')} />
                <Text style={styles.textLiberalismo}>El <Text style={styles.textYellow}>libre comercio</Text> es un enfoque económico que defiende la <Text style={styles.textYellow}>eliminación</Text> de las <Text style={styles.textYellow}>trabas</Text> a la actividad económica de los agentes. En el interior del país se traduce en libertad de empresa con mercado libre, y en el exterior, en libre cambio.</Text>
                <Image style={styles.greenarrow} source={require('../assets/greenarrow.png')} />
                <Text style={styles.subtitle}>INFLACIÓN CONTROLADA</Text>
                <Image style={styles.librecomercio} source={require('../assets/inflacion.png')} />
                
            </ScrollView>
        </View>
    )
}

export default Liberalismo;