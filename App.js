import React, { useState } from 'react';
import { Image, StyleSheet,Share, View, TouchableHighlight} from 'react-native';
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
import acercadelaApp from './screens/acerdadelaApp';
import withPreventDoubleClick from './preventdoubletap';

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

documentos.navigationOptions = () => {
  return {
    headerShown: false,
  }
}





CharactersScreen.navigationOptions = ( { navigation } ) => {
  return {
    headerRight: () =>
    <View style={styles.containerHeaderRight}>
      <ButtonPrevent
      style={styles.iconShare}
      activeOpacity={0.6}
      underlayColor={'#eff400'}
      onPress={() =>{onShare()}}
      >
        <Image style={styles.headerIcons} source={require('./assets/shareicon.png')} />
      </ButtonPrevent>
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

const ButtonPrevent = withPreventDoubleClick(TouchableHighlight)


const onShare = async () => {
try {
  const result = await Share.share({
    message:
      'Descarga Lectura Liberal, aplicación donde encontrarás distintos autores de la corriente filosófica liberal.',
  });
  if (result.action === Share.sharedAction) {
    if (result.activityType) {
      // shared with activity type of result.activityType
    } else {
      // shared
    }
  } else if (result.action === Share.dismissedAction) {
    // dismissed
  }
} catch (error) {
  alert(error.message);
}
};


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
  },
  acercadelaApp: {
    screen: acercadelaApp
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

