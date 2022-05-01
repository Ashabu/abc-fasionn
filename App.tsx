import React from 'react';
import {SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppStack from './navigation/AppNavigation';


const App = () => {

  return (
    <NavigationContainer >
      <AppStack/>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({

});

export default App;
