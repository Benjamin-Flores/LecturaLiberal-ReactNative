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
        marginBottom: '5%',
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
            definition: <Text style={styles.textLiberalismo}>El <Text style={styles.textYellow}>libre comercio</Text> es un enfoque económico que defiende la <Text style={styles.textYellow}>eliminación</Text> de las <Text style={styles.textYellow}>trabas</Text> a la actividad económica de los agentes. En el interior del país se traduce en <Text style={styles.textYellow}>libertad</Text> de empresa con <Text style={styles.textYellow}>mercado libre</Text>, y en el exterior, en libre cambio.</Text>,
            image: <Image style={{width: normalize(180),height: normalize(120), alignSelf: 'center', marginTop: '5%'}} source={require('../assets/librecomercio.png')}/>
        },
        inflacion: {
            title: 'INFLACIÓN CONTROLADA',
            definition:  <Text style={styles.textLiberalismo}>La <Text style={styles.textYellow}>inflación </Text>es el aumento general y sostenido de los <Text style={styles.textYellow}>precios</Text> de los <Text style={styles.textYellow}>bienes</Text> o <Text style={styles.textYellow}>servicios</Text> de un país, en un periodo prolongado, lo que produce que todo sea <Text style={styles.textYellow}>más caro</Text>. <Text style={styles.textYellow}>Inexorablemente </Text>los precios suben a lo largo del tiempo pero hay factores externos que pueden empeorar la situación de manera acelerada, por ejemplo la emisión en exceso por parte de los Gobiernos.</Text>,
            image: <Image style={{width: normalize(180),height: normalize(120), alignSelf: 'center', marginTop: '10%'}} source={require('../assets/inflacion.png')}/>
        },
        propiedad: {
            title: 'PROTECCIÓN DE DERECHOS DE PROPIEDAD',
            definition:  <Text style={styles.textLiberalismo}>Tener una <Text style={styles.textYellow}>eficiente</Text> definición, <Text style={styles.textYellow}>garantía</Text> y <Text style={styles.textYellow}>protección</Text> de los derechos privados de <Text style={styles.textYellow}>propiedad</Text> es crucial para tener un proceso sostenido de  <Text style={styles.textYellow}>desarrollo</Text> económico.{"\n"}{"\n"} Cuatro son los componentes: el derecho a la <Text style={styles.textYellow}>posesión de bienes</Text> y <Text style={styles.textYellow}>recursos productivos</Text>, el derecho a la<Text style={styles.textYellow}> libre utilización</Text> de éstos respetando los derechos de terceros, la <Text style={styles.textYellow}>libre transferencia de derechos</Text> en transacciones enteramente voluntarias en mercados que operen en competencia y la <Text style={styles.textYellow}>protección de estos tres</Text> por parte de un poder judicial independiente, <Text style={styles.textYellow}>imparcial</Text>, <Text style={styles.textYellow}>eficiente</Text> y <Text style={styles.textYellow}>expedito</Text>. Países en los cuales rige más íntegramente el <Text style={styles.textYellow}>estado de derecho</Text>, son también aquellos con mayor nivel de desarrollo económico.</Text>,
            image: <Image style={{width: normalize(180),height: normalize(120), alignSelf: 'center', marginTop: '10%'}} source={require('../assets/proteccionderechos.png')}/>
        },
        estadoEficiente: {
            title: 'ESTADO PEQUEÑO Y EFICIENTE',
            definiton:  <Text style={styles.textLiberalismo}>El <Text style={styles.textYellow}>Estado</Text> debe estar al <Text style={styles.textYellow}>servicio</Text> de los <Text style={styles.textYellow}>ciudadanos</Text> y no los ciudadanos al servicio del Estado, este debe ser nuestro centinela por ello su <Text style={styles.textYellow}>poder</Text> debe estar <Text style={styles.textYellow}>limitado</Text>. Asegurar la <Text style={styles.textYellow}>igualdad ante la Ley</Text>, defender el <Text style={styles.textYellow}>derecho de propiedad</Text> de los individuos, proteger los proyectos de vida de los ciudadanos sin intevenir en los mismos y <Text style={styles.textYellow}>no transgredir</Text> los <Text style={styles.textYellow}>derechos naturales</Text> del hombre planteados por John Locke.  </Text>,
            image: <Image style={{width: normalize(180),height: normalize(120), alignSelf: 'center', marginTop: '10%'}} source={require('../assets/lamoneda.png')}/>
        },
        impuestos: {
            title: 'IMPUESTOS RAZONABLES',
            definition:  <Text style={styles.textLiberalismo}><Text style={styles.textYellow}>Dependiendo</Text> de la <Text style={styles.textYellow}>sociedad</Text> donde nos encontremos, veremos distintos tipos de <Text style={styles.textYellow}>impuestos</Text>, sin embargo el que existan muchos impuestos <Text style={styles.textYellow}>no</Text> es sinónimo de <Text style={styles.textYellow}>mayor eficiencia</Text> del <Text style={styles.textYellow}>Estado</Text>. Estos deben ser<Text style={styles.textYellow}> razonables</Text> para no asfixiar a los <Text style={styles.textYellow}>ciudadanos</Text> </Text>,
            image: <Image style={{width: normalize(180),height: normalize(120), alignSelf: 'center', marginTop: '10%'}} source={require('../assets/impuesto.png')}/>
        },
        regulaciones: {
            title: 'REGULACIONES RAZONABLES',
        definition:  <Text style={styles.textLiberalismo}>Para <Text style={styles.textYellow}>asegurar</Text> un <Text style={styles.textYellow}>desarrollo económico</Text> y <Text style={styles.textYellow}>social</Text>, es necesario facilitar el <Text style={styles.textYellow}>emprendimiento</Text> a los ciudadanos, <Text style={styles.textYellow}>agilizar procesos</Text> que en su mayoría es papeleo burocrático que sólo busca exprimirte algo de dinero en el camino. {"\n"}{"\n"} <Text style={styles.textYellow}>Además</Text> al dar <Text style={styles.textYellow}>facilidades</Text> para empender, esto traerá necesariamente el <Text style={styles.textYellow}>aumento </Text>de empleos e <Text style={styles.textYellow}>inversión</Text> al país.</Text>,
            image: <Image style={{width: normalize(180),height: normalize(120), alignSelf: 'center', marginTop: '10%'}} source={require('../assets/ley.png')}/>
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
                onPress={() =>{navigation.navigate('detallesLiberalismo',{title: DATA.propiedad.title, image: DATA.propiedad.image, definition: DATA.propiedad.definition})}}>
                    <Text style={styles.subtitle}>DERECHOS DE PROPIEDAD</Text>
                </TouchableHighlight>
                <TouchableHighlight
                style={styles.buttonPilares}
                activeOpacity={0.6}
                underlayColor={'#ccc'}
                onPress={() =>{navigation.navigate('detallesLiberalismo',{title: DATA.estadoEficiente.title, image: DATA.estadoEficiente.image, definition: DATA.estadoEficiente.definiton})}}>
                    <Text style={styles.subtitle}>ESTADO RAZONABLE Y EFICIENTE</Text>
                </TouchableHighlight>

                <TouchableHighlight
                style={styles.buttonPilares}
                activeOpacity={0.6}
                underlayColor={'#ccc'}
                onPress={() =>{navigation.navigate('detallesLiberalismo',{title: DATA.impuestos.title, image: DATA.impuestos.image, definition: DATA.impuestos.definition})}}>
                    <Text style={styles.subtitle}>IMPUESTOS RAZONABLES</Text>
                </TouchableHighlight>

                <TouchableHighlight
                style={styles.buttonPilares_last}
                activeOpacity={0.6}
                underlayColor={'#ccc'}
                onPress={() =>{navigation.navigate('detallesLiberalismo',{title: DATA.regulaciones.title, image: DATA.regulaciones.image, definition: DATA.regulaciones.definition})}}>
                    <Text style={styles.subtitle}>REGULACIONES RAZONABLES</Text>
                </TouchableHighlight>
               
              
               
                
                
               
                
                
            </ScrollView>
        </View>
    )
}

export default Liberalismo;