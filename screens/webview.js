import React from 'react';
import {  View, Text, StyleSheet} from 'react-native';
import { WebView } from 'react-native-webview';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
    },
    web: {
        width: '100%',
        height:'100%',
        
    }
}) 
    


export default( { navigation }) => {
    const link = navigation.getParam('link')
    return(
        <View style={styles.container} >
            <WebView
            style={styles.web}
            source={{ uri: link }} 
            />
        </View>
        
       
    )
}