import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList, Image, TouchableHighlight, Modal, 
} from "react-native";
import Constants from "expo-constants";
import normalize from 'react-native-normalize';



const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 0,
    flexDirection: 'row',
    backgroundColor: '#231F20'
  },
  mainContainer: {
    flexDirection: 'row',
    marginTop: Constants.statusBarHeight,
    
    
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8
  },
  pictureContainer: {
    flex: 2,
  },
  firstPicture: {
    borderRadius: 5,
    borderColor: 'white',
    borderWidth: 0.5,
    flex: 1,
    width: normalize(140),
    height: normalize(180),
    marginLeft: '2%',
  },
  textContaner: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    textAlign: 'center'
    
    
  },
  nameTitle: {
    fontSize: normalize(22),
    fontWeight: 'bold',
    width: '90%',
    marginLeft: '5%',
    marginRight: '5%',
    color: 'white'
  },
  textPicture: {
    color: 'white',
    fontSize: normalize(20),
    marginLeft: '5%',
    marginTop: '5%'
  },
  textDate:{
    marginLeft: '5%',
    marginTop: '5%',
    color: 'white',
    fontSize: normalize(20),
  },
  flag: {
    width: normalize(30),
    height: normalize(20),
    
  },
  buttonsContainer: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    marginLeft: '5%',
  
  },
  highlightButton: {

    borderWidth: normalize(4),
    borderColor: 'white',
    borderRadius: normalize(5),
    padding: normalize(8),
    marginTop: '10%',
    marginRight: '5%'


  },
  buttonText:{
    color: 'white',
    borderRadius: normalize(5),
    fontSize: normalize(22)
  },

 
});





const DATA = [
  {
    title: "John Locke",
    data: [
      {key: '1', 
      country: 'Reino Unido',
      countryFlag: <Image style={styles.flag} source={require('../assets/fotosPersonajes/Banderas/banderareinounido.png')} />, 
      date: '1632-1704',
      bio: 'John Locke fue un filósofo y médico inglés, considerado como uno de los más influyentes pensadores del empirismo inglés y conocido como el Padre del Liberalismo Clásico. Su trabajo afectó en gran medida el desarrollo de la epistemología y la filosofía política. Sus escritos influyeron en Voltaire y Rosseau, pensadores de la ilustración francesa.',
      sentence: 'EL Gobierno no debe tener otra finalidad que la preservación de la propiedad',
      normalImage: <Image style={styles.firstPicture} source={require('../assets/fotosPersonajes/MarcoEstandar/johnlockee.jpg')} />,
      specialImage: <Image style={{width: '65%', height: '55%', marginTop: '5%', marginBottom: '5%',borderWidth: normalize(3), borderColor: 'white', borderRadius: normalize(5)}} source={require('../assets/fotosPersonajes/MarcoEspecial/johnlocke1.jpg')} />,
      linklibros: 'https://drive.google.com/drive/folders/18TtZvBp6DV9msNt-k_qMaLiMrIfxE3OV?usp=sharing'
     
     }
    ]
  },
  {
    title: "Adam Smith",
    data: [
      {key: '2', 
      country: 'Reino Unido', 
      countryFlag: <Image style={styles.flag} source={require('../assets/fotosPersonajes/Banderas/banderareinounido.png')} />,
      date: '1723-1790',
      bio: 'Adam Smith fue un economista y filósofo escocés, considerado uno de los mayores exponentes de la economía clásica y de la filosofía de la economía. Gracias a su obra "La Riqueza de las Naciones" se le conoce como el Padre de la Economía Moderna dado que fue el primer estudio completo y sistemático acerca de la creación y acumulación de la riqueza.',
      sentence: 'No puede haber una Sociedad floreciente y feliz cuando la mayor parte de sus miembors son pobres y desdichados',
      normalImage: <Image style={styles.firstPicture} source={require('../assets/fotosPersonajes/MarcoEstandar/adamsmithh.jpg')} />,
      specialImage: <Image style={{width: '65%', height: '55%', marginTop: '5%', marginBottom: '5%',borderWidth: normalize(3), borderColor: 'white', borderRadius: normalize(5)}} source={require('../assets/fotosPersonajes/MarcoEspecial/adamsmith1.jpg')} />,
      linklibros: 'https://drive.google.com/drive/folders/14QZpI4VX47Iw-93kHjmlRh6pgIbteDxE?usp=sharing'
     }
    ]
  }
];





const CharactersScreen = ({ navigation }) => {

  

    
    
    return(
    
    <SafeAreaView style={styles.container}>
        <SectionList
        sections={DATA}
        renderItem={({ item, section }) => 
        <View style={styles.mainContainer}>
            <View style={styles.pictureContainer}>
            {item.normalImage}
            </View>
            <View style={styles.textContaner}>
            <Text style={styles.nameTitle}>{section.title}</Text>
            <Text style={styles.textPicture}>{item.country}  {item.countryFlag}</Text>
            <Text style={styles.textDate}>{item.date}</Text>
            <View style={styles.buttonsContainer}>
                
                <TouchableHighlight 
                    style={styles.highlightButton}
                    activeOpacity={0.6}
                    underlayColor={'#ccc'}
                    onPress={() => {navigation.navigate('Info', {image: item.specialImage, frase: item.sentence, nombre: section.title, bio: item.bio, link: item.linklibros})}}>

                        <Text style={styles.buttonText}>DETALLES</Text>
                </TouchableHighlight>

                

            </View>
            </View>
        </View> 
        
        }
        renderSectionHeader={({}) => {}}
        />
        
    </SafeAreaView>
    )
};



export default CharactersScreen;
