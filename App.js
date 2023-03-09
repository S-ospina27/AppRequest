import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import NavigationTab from "./components/NavigationTab";
import CreateRequirements from "./pages/CreateRequirements";
import Login from "./pages/Login";
import ToList from "./pages/ToList";

export default function App() {
  const stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <NavigationTab/>
    </NavigationContainer>
  );
}
