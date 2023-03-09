import React from 'react'
import { View } from 'react-native';
import Ionic  from "react-native-vector-icons/Ionicons";
// import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CreateRequirements from '../pages/CreateRequirements';
import ToList from '../pages/ToList';
import Login from '../pages/Login';
const NavigationTab = () => {
    const Tab = createBottomTabNavigator();
  return (
      <Tab.Navigator
       screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'create') {
              iconName = focused
                ? 'create'
                : 'create-outline';
                size = focused ? size + 8 : size +5
            } else if (route.name === 'list') {
              iconName = focused ? 'ios-list' : 'ios-list-outline';
              size = focused ? size + 8 : size +5
            } else if (route.name === 'login') {
              iconName = focused ? 'link' : 'ios-list-outline';
              size = focused ? size + 8 : size +5
            }

            return <Ionic name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#13A5EE',
          tabBarInactiveTintColor: 'gray',
          tabBarShowLabel:false,
          style:{
            backgroundColor: "#13A5EE",
            heigth:60
          }
        })}
      >
        <Tab.Screen 
        name="login" 
        component={Login} 
        options={{
            headerShown: false,
            tabBarStyle:{display:"none"}
          }}
        />
        <Tab.Screen 
        name="create" 
        component={CreateRequirements}
        options={{
            title: "Crear Requerimientos",
            headerStyle: {
              backgroundColor: "#13A5EE",

            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              flex:1,
              fontWeight: "bold",
              // padding:5,
              marginLeft:25,
              fontSize: 30,
              alignContent:"center",
              justifyContent:"center"
            },
          }}
         />
        <Tab.Screen 
        name="list" 
        component={ToList}
        options={{
            title: "Lista de Requerimientos",
            headerStyle: {
              backgroundColor: "#13A5EE",

            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              flex:1,
              fontWeight: "bold",
              // padding:5,
              marginLeft:10,
              fontSize: 30,
              alignContent:"center",
              justifyContent:"center"
            },
          }}
         />
      </Tab.Navigator>

  )
}

export default NavigationTab;
