import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import CreateRequirements from "./pages/CreateRequirements";
import Login from "./pages/Login";
import ToList from "./pages/ToList";

export default function App() {
  const stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen
          name="login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <stack.Screen
          name="crear"
          component={CreateRequirements}
          options={{
            title: "Crear Requerimientos",
            headerStyle: {
              backgroundColor: "#13A5EE",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 25,
            },
          }}
        />

        <stack.Screen
          name="Lista"
          component={ToList}
          options={{
            title: "Listar Requerimientos",
            headerStyle: {
              backgroundColor: "#13A5EE",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 25,
            },
          }}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
}
