import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const CartItem = () => {
  return (
    <View style={styles.CartItemWrap}>
      <View style={styles.CartImteLeft}>
        <Image style={styles.CartItemImg} source={require('../assets/images/0004_fashion_image.jpg')} resizeMode='contain' />
      </View>
      <View style={styles.CartItemRight}>
        <Text>V Neck Shirt - Pink 1, Pink</Text>
        <Text style={styles.PriceTextStyle}>$24.99</Text>
        <View style={styles.ItemCountWrap}>
          <TouchableOpacity  style={styles.ActionButtonStyle}>
            <Text style={styles.ActionTextStyle}>-</Text>
          </TouchableOpacity>
          <Text style={styles.ActionTextStyle}>1</Text>
          <TouchableOpacity style={styles.ActionButtonStyle}>
            <Text style={styles.ActionTextStyle}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default CartItem;

const styles = StyleSheet.create({
  CartItemWrap: {
    height: 120,
    width: '100%',
    flexDirection: 'row',
  },

  CartImteLeft: {
    flex: 2,
    borderRadius: 50,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF'
  },

  ItemCountWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 70,
  },

  ActionButtonStyle: {
    backgroundColor: 'grey',
    width: 20,
    height: 20,
    borderRadius: 10,
   
  },

  ActionTextStyle: {
    textAlign: 'center',
    color: '#ffffff29F'
  },

  CartItemImg: {
    width: 100,
    height: 100,
    borderRadius: 50
  },

  CartItemRight: {
    flex: 3,
    borderBottomWidth: 1,
    borderBottomColor: '#CFCFCF',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingLeft: 10
  },

  PriceTextStyle: {
    color: '#FF6969'
  }
  
})