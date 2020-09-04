import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import normalize from 'react-native-normalize';
import { WebView } from 'react-native-webview';



const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: '#231F20',
    },
    web: {
        width: '100%',
        height: '100%'
    }
})

const documentos = ( {navigation})  => {
    const link = navigation.getParam('link')
   

    return(
        <View style={styles.mainContainer}>
            <WebView
            style={styles.web}
            source={{uri: link}} 
            />
        </View>
    )
}



export default documentos;