import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableHighlight, Image, Modal} from 'react-native';
import normalize from 'react-native-normalize';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#231F20',
        flexDirection: 'column',
        height: '100%',
        width: '100%'
    },
   
    text: {
        fontSize: normalize(22),
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        height: normalize(80),
        alignSelf: 'flex-start',
        textAlignVertical: 'center',
        marginLeft: '15%'
    
        
        
    },
    buttons: {
        width: '100%',
        paddingBottom: normalize(20),
        borderBottomColor: 'white',
        borderBottomWidth: normalize(3),
        height: normalize(80),
        justifyContent: 'center',
        
        
        
    },
    antorcha: {
        width: normalize(45),
        height: normalize(45),
        backgroundColor: 'white',
        
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: '100%',
        alignItems: 'flex-start',
        borderBottomColor: 'white',
        borderBottomWidth: normalize(3),
    },  

    //MODAL 

    modalContent: {
        width: '95%',
        borderRadius: 5,
        padding: 0,
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 3,
        borderColor: '#333',
      
      },
    
      modalText: {
        fontWeight: 'bold',
        fontSize: normalize(25),
        backgroundColor: 'white',
        padding: normalize(10),
        paddingTop: normalize(20),
        marginBottom: normalize(20),
        width:'100%',
        justifyContent: 'center',
        textAlign: "justify",
        alignSelf: 'center',
        borderRadius: 5,
      },
      modalName: {
        fontWeight: 'bold',
        fontSize: normalize(25),
        alignSelf: 'flex-end',
        padding: normalize(10),
        paddingBottom: normalize(40),
      },
      modalButton: {
        borderRadius: 5,
        backgroundColor: '#222',
        width: '30%',
        marginBottom: normalize(20),
        padding: normalize(10),
      },
      modalButtonBio: {
        borderRadius: 5,
        backgroundColor: '#222',
        width: '30%',
        marginTop: normalize(25),
        marginBottom: normalize(20),
        padding: normalize(10),
      },
      modalTextButton: {
        color: 'white',
        fontWeight: 'bold',
        alignSelf: 'center',
      }, 
      center: {
        height: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(239,244,0,0.5)',
      },
      politicas:{
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center'
      },    
      policies:{
        borderRadius: 5,
        backgroundColor: '#222',
        width: '70%',
        marginBottom: normalize(10),
        padding: normalize(10),
      }

})

const InfoPoliticas = ({ navigation }) => {

    const [modalPoliticas, setModalPoliticas] = useState(false)

    const DATA_POLITICAS = {
        privacidad: {
            link: 'https://drive.google.com/file/d/13vZnknWibOMj2Zm3R-T66qC8oKJIQAli/view?usp=sharing'
        },
        terminos: {
           link: 'https://drive.google.com/file/d/1qTNWwYXs49GHe4ndJVNxfv0U49ToRzMI/view?usp=sharing'
        }
    }

    return(
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <TouchableHighlight
                style={styles.buttons}
                activeOpacity={0.6}
                underlayColor={'#ccc'}
                onPress={() =>{
                    navigation.navigate('Liberalismo')
                }}
                >
                    
                    <Text style={styles.text}><Image style={styles.antorcha} source={require('../assets/antorcha.png')}/>  ¿Qué es el Liberalismo?</Text>
                </TouchableHighlight>
            </View>
            <View style={styles.buttonContainer}>  
                <TouchableHighlight
                style={styles.buttons}
                activeOpacity={0.6}
                underlayColor={'#ccc'}
                onPress={() =>{
                    setModalPoliticas(!modalPoliticas)
                }}
                >
                    <Text style={styles.text}><Image style={styles.antorcha} source={require('../assets/informacion.png')}/>  Políticas de la Aplicación</Text>
                </TouchableHighlight>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableHighlight
                style={styles.buttons}
                activeOpacity={0.6}
                underlayColor={'#ccc'}
                onPress={() =>{
                    alert('hola')
                }}
                >
                    <Text style={styles.text}><Image style={styles.antorcha} source={require('../assets/torchcrack.png')}/>  Acerca de la Aplicación</Text>
                </TouchableHighlight>
            </View>
            <Modal 
            animationType='fade'
            transparent={true}
            visible={modalPoliticas}
            >

              <View style={styles.center}>
                <View style={styles.modalContent}>
                  <Text style={styles.modalText}>A continuación puedes leer las políticas de nuestra aplicación si lo deseas, están en Inglés para mayor formalidad.</Text>
                    <View style={styles.politicas}>
                        <TouchableHighlight 
                        style={styles.policies}
                        activeOpacity={0.6}
                        underlayColor="#DDDDDD" 
                        onPress={() => {navigation.navigate('documentos', {link: DATA_POLITICAS.terminos.link}),setModalPoliticas(!modalPoliticas)}}
                        >
                            <Text style={styles.modalTextButton} >TÉRMINOS & CONDICIONES</Text>
                        </TouchableHighlight>
                        <TouchableHighlight 
                        style={styles.policies}
                        activeOpacity={0.6}
                        underlayColor="#DDDDDD" 
                        onPress={() => {navigation.navigate('documentos', {link: DATA_POLITICAS.privacidad.link}, setModalPoliticas(!modalPoliticas))}}
                        >
                            <Text style={styles.modalTextButton} >POLÍTICAS DE PRIVACIDAD</Text>
                        </TouchableHighlight>
                    </View>
                    <TouchableHighlight 
                    style={styles.modalButtonBio}
                    activeOpacity={0.6}
                    underlayColor="#DDDDDD" 
                    onPress={() => {setModalPoliticas(!modalPoliticas)}}
                    >
                      <Text style={styles.modalTextButton} >CERRAR</Text>
                    </TouchableHighlight>
                </View>
              </View>
            </Modal>
          
            
            
        </View>
    )
}

export default InfoPoliticas;