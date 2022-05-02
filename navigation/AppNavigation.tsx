import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from "../screens/ProfileScreen";
import CartScreen from "../screens/CartScreen";





const Stack = createNativeStackNavigator();

const AppStack = () => {
    return (
        <Stack.Navigator initialRouteName="ProfileScreen">
            <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{headerShown: false}}/>
            <Stack.Screen name="CartScreen" component={CartScreen} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}

export default AppStack;