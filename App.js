import React, { useState } from 'react';
import { Image, StyleSheet,Button, Text, View, TouchableHighlight} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator, TransitionPresets } from 'react-navigation-stack';
import CharactersScreen from './screens/characters';
import normalize from 'react-native-normalize';
import infoScreen from './screens/info';
import webviewScreen from './screens/webview';
import InfoPoliticas from './screens/info_politicas';
import Liberalismo from './screens/liberalismo';
import detallesLiberalismo from './screens/detallesLiberalismo';
import documentos from './screens/documentos';

const styles = StyleSheet.create({
  headerTitle: {
    height: normalize(40),
    width: normalize(150)
  },
  containerHeaderRight: {
    height: '100%',
    flexDirection: 'row',
    alignContent: 'flex-start',
    marginRight: normalize(15),
    justifyContent: 'flex-start'
  },
  iconShare: {
    height: '80%',
    
    marginRight: normalize(10),
    justifyContent: 'flex-start',
    borderRadius: normalize(10)
  
  },
  iconInfo: {
    height: '80%',
    
    justifyContent: 'flex-start',
    borderRadius: normalize(10)
    
  },
  headerIcons: {
    width: normalize(45),
    height: normalize(45)
  }
  
})

webviewScreen.navigationOptions = () => {
  return {
    headerShown: false,
  }
}





CharactersScreen.navigationOptions = ( { navigation } ) => {
  return {
    headerRight: () =>
    <View style={styles.containerHeaderRight}>
      <TouchableHighlight
      style={styles.iconShare}
      activeOpacity={0.6}
      underlayColor={'#eff400'}
      onPress={() =>{}}
      >
        <Image style={styles.headerIcons} source={require('./assets/shareicon.png')} />
      </TouchableHighlight>
     <TouchableHighlight
     style={styles.iconInfo}
     activeOpacity={0.6}
     underlayColor={'#eff400'}
     onPress={() => navigation.navigate('InfoPoliticas')}
     >
       <Image style={styles.headerIcons} source={require('./assets/infoicon.png')} />
     </TouchableHighlight>
    </View>
      
    
    
  }
}

const AppNavigator = createStackNavigator({
  

  Characters: {
    screen: CharactersScreen,
  },
  Info: {
    screen: infoScreen
  },
  Webview: {
    screen: webviewScreen
  },
  InfoPoliticas: {
    screen: InfoPoliticas
  },
  Liberalismo: {
    screen: Liberalismo
  },
  detallesLiberalismo: {
    screen: detallesLiberalismo
  },
  documentos: {
    screen: documentos
  }
}, 
{
  initialRouteName: 'Characters',

  defaultNavigationOptions: {
    ...TransitionPresets.SlideFromRightIOS,
    headerStyle: {
      backgroundColor: '#eff400'
    },
    headerTitle: () => 
      <Image style={styles.headerTitle} source={require('./assets/lecturaliberal.png')}/>
    ,
    
  },

  
},

);

export default createAppContainer(AppNavigator)

