import React from 'react';
import {  View, Text, StyleSheet} from 'react-native';
import { WebView } from 'react-native-webview';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '90%',
        marginTop: '10%'
    }
}) 
    


export default( { navigation }) => {
    const link = navigation.getParam('link')
    return(
        <View style={styles.container} >
            <WebView
            style={styles.container}
            source={{ uri: link }} 
            />
        </View>
        
       
    )
}