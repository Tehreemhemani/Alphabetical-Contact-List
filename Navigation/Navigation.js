import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import IcIcon from "react-native-vector-icons/Ionicons";
import SearchScreen from '../Screens/SearchScreen'
import ProfileScreen from '../Screens/ProfileScreen'
import FavouriteScreen from '../Screens/FavouriteScreen'
import ContactScreen from '../Screens/ContactScreen'
import SplashScreen from "../Screens/SplashScreen";


const Stack = createStackNavigator();
const Bottom = createBottomTabNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{ headerShown: false }}
                initialRouteName="SplashScreen">
                <Stack.Screen name="SplashScreen" component={SplashScreen} />
                <Stack.Screen options={{ headerShown: false }} name="ContactNavigator" component={ContactNavigator} />

            </Stack.Navigator>
        </NavigationContainer>
    );
};

const ContactNavigator = () => {
    return (
        <Bottom.Navigator>
            <Stack.Screen options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <IcIcon color={focused ? 'red' : "gray"} size={focused ? 30 : 20} name='call' />
                    </View>
                )
            }}
                name="Contact" component={ContactScreen} />

            <Stack.Screen options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <IcIcon color={focused ? 'red' : "gray"} size={focused ? 30 : 20} name='search' />
                    </View>
                ),
            }}
                name="Search" component={SearchScreen} />


            <Stack.Screen options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <IcIcon color={focused ? 'red' : "gray"} size={focused ? 30 : 20} name='md-person' />
                    </View>
                )
            }} name="Profile" component={ProfileScreen} />


            <Stack.Screen options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <IcIcon color={focused ? 'red' : "gray"} size={focused ? 30 : 20} name='heart-sharp' />
                    </View>
                )
            }} name="Favourite" component={FavouriteScreen} />



        </Bottom.Navigator>
    )
}





export default Navigation;