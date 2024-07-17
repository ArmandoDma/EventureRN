import React from "react";
import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";
import { NavigationContainer } from "@react-navigation/native";
import { ExploreScreen } from "../screens/ExploreScreen";
import { NotificationsScreen } from "../screens/NotificationsScreen";
import { HelpScreen } from "../screens/HelpScreen";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const BTabs = createMaterialBottomTabNavigator();

function MyTabs(){
    return(
        <BTabs.Navigator
        initialRouteName="Explore"
        activeColor="#000"
        inactiveColor="#000"
        activeIndicatorStyle={{backgroundColor: '#000'}}
        barStyle = {{backgroundColor:'#fff'}}>

            <BTabs.Screen name="Explore" component={ExploreScreen} 
            options={{            
                tabBarLabel: 'Explorar',           
                tabBarIcon:({focused}) => 
                (<MaterialCommunityIcons name='compass-outline' color={focused ? '#fff' : '#000'} size={26}></MaterialCommunityIcons>)}}>                    
            </BTabs.Screen>
            <BTabs.Screen name="Notifications" component={NotificationsScreen} 
            options={{
                tabBarLabel: 'Notificaciones',
                tabBarIcon:({focused}) => 
                (<MaterialCommunityIcons name='bell-outline' color={focused ? '#fff' : '#000'} size={26}></MaterialCommunityIcons>)}}>                    
                </BTabs.Screen>
            <BTabs.Screen name="Help" component={HelpScreen} 
            options={{
                tabBarLabel: 'Cuenta', 
                tabBarIcon:({focused}) => 
                (<MaterialCommunityIcons name='account-outline' color={focused ? '#fff' : '#000'} size={26}></MaterialCommunityIcons>)}}>        
            </BTabs.Screen>

        </BTabs.Navigator>
    )
}

export default function Navigation(){
    return(
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    )
}