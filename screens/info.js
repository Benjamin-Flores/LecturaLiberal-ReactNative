import React, {useEffect, useState} from 'react';
import { StyleSheet, View, Text, Modal, Image, TouchableHighlight} from 'react-native';
import normalize from 'react-native-normalize';
import withPreventDoubleClick from '../preventdoubletap';



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#231F20',
      alignItems: 'center',
      justifyContent: 'flex-start',
      width: '100%'
      
    },
    principalContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },  
    list: {
      alignSelf: 'stretch',
    },
    firstPicture: {
        borderRadius: 5,
        borderColor: 'white',
        borderWidth: 0.5,
        flex: 1,
        width: '80%',
        height: normalize(180),
        marginLeft: '2%',
      },
      optionsContainer: {
        width: '100%',
        justifyContent: 'center',
        
        
      },
      icons: {
          width: normalize(50),
          height: normalize(50),
          
         
      },
      fraseicon:{
        width: normalize(50),
        height: normalize(50),
        
        
        
        
      },
      typeContainer: {
          flexDirection: 'row',
          justifyContent:'flex-start',
          alignItems: 'center',
          

          
      },
      IconsContainer: {

        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'
      },
      iconsText: {
          color: '#333',
          alignSelf: 'center',
          fontSize: normalize(28),
          marginLeft: '2%',
          fontWeight: 'bold'

      },
      iconsButton: {

        backgroundColor: 'white',
        borderRadius: normalize(5),
        borderWidth: normalize(5),
        borderColor: '#aaaaaa',
        padding: normalize(10),
        marginBottom: '2%',
        height: normalize(70),
        width: '90%',
        marginLeft: '5%',
        marginRight: '5%'
        
         
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
        color:"#333",
        fontSize: normalize(25),
        backgroundColor: 'white',
        padding: normalize(10),
        paddingTop: normalize(20),
        paddingBottom: normalize(0),
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
        height: '80%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(239,244,0,0.5)',
      },

  });
  
  
    const ButtonPrevent = withPreventDoubleClick(TouchableHighlight)
  
  export default ({ navigation }) => {
    
    const [modalFrase, setModalFrase] = useState(false)
    const [modalBio, setModalBio] = useState(false)

    const image = navigation.getParam('image')
    const frase = navigation.getParam('frase')
    const nombre = navigation.getParam('nombre')
    const bio = navigation.getParam('bio')
    const link = navigation.getParam('link')
    
    
  
    return (
  
      <View style={styles.container}>
        <View style={styles.principalContainer}>
            {image}
            <View style={styles.optionsContainer}>
                <ButtonPrevent 
                style={styles.iconsButton}
                activeOpacity={0.6}
                underlayColor={'#ccc'}
                onPress={() => setModalBio(!modalBio)}
                
                >
                    <View style={styles.typeContainer}>
                        <View style={styles.IconsContainer}>
                            <Image style={styles.icons} source={require('../assets/icons/historia.png')}/>
                            <Text style={styles.iconsText}>BIOGRAFÍA</Text>
                        </View>
                    </View>
                    
                    
                    
                </ButtonPrevent>
                <ButtonPrevent
                style={styles.iconsButton}
                activeOpacity={0.6}
                underlayColor={'#ccc'}
                onPress={() => setModalFrase(!modalFrase)}
                >
                    <View style={styles.typeContainer}>
                        <View style={styles.IconsContainer}>
                            <Image style={styles.fraseicon} source={require('../assets/icons/citar.png')}/>
                            <Text style={styles.iconsText}>FRASE</Text>
                        </View> 
                    </View>
                    
                    
                
                </ButtonPrevent>
                <ButtonPrevent
                style={styles.iconsButton}
                activeOpacity={0.6}
                underlayColor={'#ccc'}
                onPress={() => {navigation.navigate('Webview', {link: link})}}
                >
                    <View style={styles.typeContainer}>
                        <View style={styles.IconsContainer}>
                            <Image style={styles.icons} source={require('../assets/icons/libro.png')}/>
                            <Text style={styles.iconsText}>LIBROS</Text>
                        </View>
                    </View>
                    
                    
                    
                </ButtonPrevent>
            </View>
            <Modal 
            animationType='fade'
            transparent={true}
            visible={modalFrase}
            >

              <View style={styles.center}>
                <View style={styles.modalContent}>
                  <Text style={styles.modalText}>{frase}</Text>
                  <Text style={styles.modalName}>~{nombre}</Text>
                    <TouchableHighlight 
                    style={styles.modalButton}
                    activeOpacity={0.6}
                    underlayColor="#DDDDDD" 
                    onPress={() => {setModalFrase(!modalFrase)}}
                    >
                      <Text style={styles.modalTextButton} >CERRAR</Text>
                    </TouchableHighlight>
                </View>
              </View>
            </Modal>

            <Modal 
            animationType='fade'
            transparent={true}
            visible={modalBio}
            >

              <View style={styles.center}>
                <View style={styles.modalContent}>
                  <Text style={styles.modalText}>{bio}</Text>
                  
                    <TouchableHighlight 
                    style={styles.modalButtonBio}
                    activeOpacity={0.6}
                    underlayColor="#DDDDDD" 
                    onPress={() => {setModalBio(!modalBio)}}
                    >
                      <Text style={styles.modalTextButton} >CERRAR</Text>
                    </TouchableHighlight>
                </View>
              </View>
            </Modal>
            
        </View>
        
      </View>
    );
    }
  
  
    