import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function ProfileScreen() {
    return (
        <View style={{flex: 1,  marginVertical: 20}}>
            
            <View style={styles.cont1}></View>
            <View style={styles.cont2}></View>
            <View style={styles.cont2}></View>
        </View>
    );
}

export default ProfileScreen;

const styles = StyleSheet.create({
    cont1: {
        borderWidth: 1,
        borderColor: 'red',
        flex:1,
       
    },
    cont2: {
        borderWidth: 1,
        borderColor: 'red',
        flex: 2
    }
})