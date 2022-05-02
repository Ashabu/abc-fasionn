import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import CartItem from '../components/CartItem';

const CartScreen = () => {
  return (
    <View style={styles.ScreenWrap}>
        <Text style={styles.PageTitleStyle}>Cart</Text>
        <View style={styles.ScreenBody}>
    <CartItem/>
        </View>
        <View style={styles.ScreenBottom}>
            <View style={styles.ScreenBottomLeft}>
                <Text>Total</Text>
                <Text style={styles.TotalPriceTextStyle}>$24.99</Text>
                <Text>Free Domestic Shipping</Text>
            </View>
            <View style={styles.ScreenBottomRight}>
                <TouchableOpacity style={styles.CheckoutButton}>
                    <Text style={styles.CheckoutButtonTitle}>
                        CHECKOUT
                    </Text>
                    <View style={styles.ButtonIcon}>
                        
                    </View>
                </TouchableOpacity>

            </View>
        </View>
    </View>
  )
}

export default CartScreen;

const styles = StyleSheet.create({
    ScreenWrap: {
        flex: 1,
        padding: 15
    },
    
    PageTitleStyle: {
        fontSize: 24,
        fontWeight: '700',
        color: '#000'
    }, 

    ScreenBody: {
        flex: 9,
        borderBottomWidth: 1,
        borderBottomColor: '#CFCFCF',

    },
    ScreenBottom: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center'   
    },

    ScreenBottomRight: {
        flex: 1
    },

    ScreenBottomLeft: { 
        flex: 1
    },

    CheckoutButton: {
        backgroundColor: '#FF6969',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        borderRadius: 25
    },

    CheckoutButtonTitle: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: '700',
        width: '66%',
        textAlign: 'right'
    },
    ButtonIcon: {
            width: 30,
            height: 30,
            borderRadius: 15,
            backgroundColor:'#FFFFFF'
    },

    TotalPriceTextStyle: {
        fontSize: 22,
        color: '#000'
    }
})