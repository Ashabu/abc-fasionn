import React, { useEffect } from 'react';
import { Button, FlatList, StyleSheet, View } from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';
import ShirtCard from '../components/ShirtCard';
import { TSHIRT } from '../projectData/ProjectData';
import CartScreen from './CartScreen';


let tshirt = [];

const ProfileScreen = (props: any) => {


    return (
        <View style={{ flex: 1, marginVertical: 20 }}>
            {/* <View style={styles.cont1}></View>
            <View style={styles.cont2}></View>
            <View style={styles.cont2}></View> */}
            <Button title='Go To Card Screen' onPress={()=> props.navigation.navigate('CartScreen')}/>
            <FlatList
                numColumns={2}
                columnWrapperStyle={{justifyContent: 'space-around'}}
                keyExtractor={(item) => item.imgUrl}
                data={TSHIRT}
                renderItem={({ item }) => <ShirtCard data={item} />}
            />

        </View>
    );
}





export default ProfileScreen;

const styles = StyleSheet.create({
    cont1: {
        borderWidth: 1,
        borderColor: 'red',
        flex: 1,

    },
    cont2: {
        borderWidth: 1,
        borderColor: 'red',
        flex: 2
    }
})