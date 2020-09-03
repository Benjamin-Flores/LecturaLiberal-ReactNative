import React from 'react';
import {View, Text, ScrollView, StyleSheet, Image, TouchableHighlight} from 'react-native';
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
        color: '#ffffff',
        fontSize: normalize(22),
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: '5%',
        marginBottom: '5%',
        width: '100%',
        
    },
    librecomercio: {
        width: normalize(210),
        height: normalize(140),
        alignSelf: 'center',
        marginTop: '5%'
    },
    textYellow:{
        color: 'yellow'
    },    
    buttonPilares: {
        alignItems: 'center',
        justifyContent: 'center',
        textAlignVertical: 'center',
        borderWidth: normalize(5),
        borderColor: 'yellow',
        borderRadius: normalize(5),
        width: '90%',
        marginLeft: '5%',
        marginRight: '5%',
        marginTop: '8%'
    },
    buttonPilares_last: {
        alignItems: 'center',
        justifyContent: 'center',
        textAlignVertical: 'center',
        borderWidth: normalize(4),
        borderColor: 'yellow',
        borderRadius: normalize(5),
        width: '90%',
        marginLeft: '5%',
        marginRight: '5%',
        marginTop: '8%',
        marginBottom: '8%'
    }
})





const Liberalismo = ({navigation}) =>{

    const DATA = {
        librecomercio: {
            title: 'LIBRE COMERCIO',
            definition: <Text style={{color: 'white',fontSize: normalize(23), letterSpacing: 1, marginTop: '5%', textAlign: 'justify', width: '94%', marginLeft: '3%', marginRight: '3%'}}>El <Text style={styles.textYellow}>libre comercio</Text> es un enfoque económico que defiende la <Text style={{color: 'yellow'}}>eliminación</Text> de las <Text style={{color: 'yellow'}}>trabas</Text> a la actividad económica de los agentes. En el interior del país se traduce en libertad de empresa con mercado libre, y en el exterior, en libre cambio.</Text>,
            image: <Image style={{width: normalize(180),height: normalize(120), alignSelf: 'center', marginTop: '5%'}} source={require('../assets/librecomercio.png')}/>
        },
        inflacion: {
            title: 'INFLACIÓN CONTROLADA',
            definition:  <Text style={{color: 'white',fontSize: normalize(23), letterSpacing: 1, marginTop: '5%', textAlign: 'justify', width: '94%', marginLeft: '3%', marginRight: '3%'}}>La inflación es el aumento general y sostenido de los precios de los bienes o servicios de un país, en un periodo prolongado, lo que produce que todo sea más caro. Inexorablemente los precios suben a lo largo del tiempo pero hay factores externos que pueden empeorar la situación de manera acelerada, por ejemplo la emisión en exceso por parte de los Gobiernos.</Text>,
            image: <Image style={{width: normalize(180),height: normalize(120), alignSelf: 'center', marginTop: '10%'}} source={require('../assets/inflacion.png')}/>
        },
        propiedad: {
            title: 'PROTECCIÓN DE DERECHOS DE PROPIEDAD',
            definition:  <Text style={{color: 'white',fontSize: normalize(23), letterSpacing: 1, marginTop: '5%', textAlign: 'justify', width: '94%', marginLeft: '3%', marginRight: '3%'}}>El <Text style={styles.textYellow}>libre comercio</Text> es un enfoque económico que defiende la <Text style={{color: 'yellow'}}>eliminación</Text> de las <Text style={{color: 'yellow'}}>trabas</Text> a la actividad económica de los agentes. En el interior del país se traduce en libertad de empresa con mercado libre, y en el exterior, en libre cambio.</Text>,
            image: <Image style={{width: normalize(120),height: normalize(260), alignSelf: 'center', marginTop: '10%'}} source={require('../assets/proteccionderechos.png')}/>
        },
        estadoEficiente: {
            title: 'ESTADO RAZONABLE Y EFICIENTE',
            definiton:  <Text style={{color: 'white',fontSize: normalize(23), letterSpacing: 1, marginTop: '5%', textAlign: 'justify', width: '94%', marginLeft: '3%', marginRight: '3%'}}>El <Text style={styles.textYellow}>libre comercio</Text> es un enfoque económico que defiende la <Text style={{color: 'yellow'}}>eliminación</Text> de las <Text style={{color: 'yellow'}}>trabas</Text> a la actividad económica de los agentes. En el interior del país se traduce en libertad de empresa con mercado libre, y en el exterior, en libre cambio.</Text>,
            image: <Image style={{width: normalize(120),height: normalize(260), alignSelf: 'center', marginTop: '10%'}} source={require('../assets/lamoneda.png')}/>
        },
        impuestos: {
            title: 'IMPUESTOS RAZONABLES',
            definition:  <Text style={{color: 'white',fontSize: normalize(23), letterSpacing: 1, marginTop: '5%', textAlign: 'justify', width: '94%', marginLeft: '3%', marginRight: '3%'}}>El <Text style={styles.textYellow}>libre comercio</Text> es un enfoque económico que defiende la <Text style={{color: 'yellow'}}>eliminación</Text> de las <Text style={{color: 'yellow'}}>trabas</Text> a la actividad económica de los agentes. En el interior del país se traduce en libertad de empresa con mercado libre, y en el exterior, en libre cambio.</Text>,
            image: <Image style={{width: normalize(120),height: normalize(260), alignSelf: 'center', marginTop: '10%'}} source={require('../assets/librecomercio.png')}/>
        },
        regulaciones: {
            title: 'REGULACIONES RAZONABLES',
            definition:  <Text style={{color: 'white',fontSize: normalize(23), letterSpacing: 1, marginTop: '5%', textAlign: 'justify', width: '94%', marginLeft: '3%', marginRight: '3%'}}>El <Text style={styles.textYellow}>libre comercio</Text> es un enfoque económico que defiende la <Text style={{color: 'yellow'}}>eliminación</Text> de las <Text style={{color: 'yellow'}}>trabas</Text> a la actividad económica de los agentes. En el interior del país se traduce en libertad de empresa con mercado libre, y en el exterior, en libre cambio.</Text>,
            image: <Image style={{width: normalize(120),height: normalize(260), alignSelf: 'center', marginTop: '10%'}} source={require('../assets/librecomercio.png')}/>
        }

    }
        
    return(
        <View style={styles.mainContainer}>
            <ScrollView style={styles.scroll}>
                <Text style={styles.title}>
                    LIBERALISMO
                </Text>
                <Image style={styles.liberty} source={require('../assets/liberty.png')} />
                <Text style={styles.textLiberalismo}>El <Text style={styles.textYellow}>Liberalismo</Text> es una <Text style={styles.textYellow}>filosofía </Text>política, económica y social que defiende la libertad del <Text style={styles.textYellow}>individuo</Text> con una intervención mínima del Estado en la vida social y económica. Este se basa en los siguientes pilares: </Text>
                <Image style={styles.greenarrow} source={require('../assets/greenarrow.png')} />

                <TouchableHighlight
                style={styles.buttonPilares}
                activeOpacity={0.6}
                underlayColor={'#ccc'}
                onPress={() => {navigation.navigate('detallesLiberalismo',{title: DATA.librecomercio.title, image: DATA.librecomercio.image, definition: DATA.librecomercio.definition})}}>
                
                    <Text style={styles.subtitle}>LIBRE COMERCIO</Text>
                </TouchableHighlight>
                
                
                <TouchableHighlight 
                style={styles.buttonPilares}
                activeOpacity={0.6}
                underlayColor={'#ccc'}
                onPress={() =>{navigation.navigate('detallesLiberalismo',{title: DATA.inflacion.title, image: DATA.inflacion.image, definition: DATA.inflacion.definition})}}>
                    <Text style={styles.subtitle}>INFLACIÓN CONTROLADA</Text>
                </TouchableHighlight>
              
                <TouchableHighlight 
                style={styles.buttonPilares}
                activeOpacity={0.6}
                underlayColor={'#ccc'}
                onPress={() =>{}}>
                    <Text style={styles.subtitle}>DERECHOS DE PROPIEDAD</Text>
                </TouchableHighlight>
                <TouchableHighlight
                style={styles.buttonPilares}
                activeOpacity={0.6}
                underlayColor={'#ccc'}
                onPress={() =>{}}>
                    <Text style={styles.subtitle}>ESTADO RAZONABLE Y EFICIENTE</Text>
                </TouchableHighlight>

                <TouchableHighlight
                style={styles.buttonPilares}
                activeOpacity={0.6}
                underlayColor={'#ccc'}
                onPress={() =>{}}>
                    <Text style={styles.subtitle}>IMPUESTOS RAZONABLES</Text>
                </TouchableHighlight>

                <TouchableHighlight
                style={styles.buttonPilares_last}
                activeOpacity={0.6}
                underlayColor={'#ccc'}
                onPress={() =>{}}>
                    <Text style={styles.subtitle}>REGULACIONES RAZONABLES</Text>
                </TouchableHighlight>
               
              
               
                
                
               
                
                
            </ScrollView>
        </View>
    )
}

export default Liberalismo;