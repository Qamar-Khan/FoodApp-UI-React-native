import 'react-native-gesture-handler';
import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MateriolIcons from 'react-native-vector-icons/MaterialIcons';
import { StyleSheet, View } from "react-native";
import HomeScreen from '../screens/HomeScreen';
import COLORS from '../../consts/colors';
import CartScreen from '../screens/CartScreen';

const Tab= createBottomTabNavigator();

const BottomNavigator=()=>{
    return(
        <Tab.Navigator screenOptions={{headerShown:false,
             style: {
            height: 55,
            borderTopWidth: 0,
            elevation: 0,
          },
          tabBarShowLabel:false,
          activeTintColor: COLORS.primary,
        
        }}   
              >
            <Tab.Screen name='HomeScreen' component={HomeScreen} options={{
               tabBarIcon: ({ focused }) => {
                return (<MateriolIcons name='home-filled' size={28} color={focused ? COLORS.primary : COLORS.black} />)
            }
            }} 
                />
                 <Tab.Screen name='LocalMall' component={CartScreen} options={{
                tabBarIcon: ({ focused }) => {
                    return (<MateriolIcons name='local-mall' size={24} color={focused ? COLORS.primary : COLORS.black} />)
                }
            }} />
             <Tab.Screen name='Search' component={HomeScreen} options={{
                tabBarIcon: ({ focused }) => {
                    return (
                        <View style={styles.searchTab}>
                            <MateriolIcons name='search' size={24} color={focused ? COLORS.primary : COLORS.black} />
                        </View>
                    )
                }
            }} />
             <Tab.Screen name='Favorite' component={CartScreen} options={{
                tabBarIcon: ({ focused }) => {
                    return (<MateriolIcons name='favorite' size={24} color={focused ? COLORS.primary : COLORS.black} />)
                }
            }} />
            <Tab.Screen name='Cart' component={CartScreen} options={{
                tabBarIcon: ({ focused }) => {
                    return (<MateriolIcons name='shopping-cart' size={24} color={focused ? COLORS.primary : COLORS.black} />)
                }
            }} />
    
        </Tab.Navigator>
    )
};
const styles=StyleSheet.create({
    searchTab:{
        height:60,
        width:60,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:COLORS.white,
        borderColor:COLORS.primary,
        borderRadius:30,
        borderWidth:2,
        top:-25,
        elevation:5,
    }
})
export default BottomNavigator;