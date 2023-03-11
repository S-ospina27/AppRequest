import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Alert,
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import DecoratedTexinput from "../components/DecoratedTexinput";
import DecoratedTexArea from "../components/DecoratedTextArea";
import RoutesList from "../components/tool/RoutesList";
import { getHeader } from "../components/tool/SessionSettings";


const CreateRequirements = ({navigation }) => {
  const [requirements_priority, setRequirements_priority] = useState("");
  const [requirements_name, setRequirements_name] = useState("");
  const [requirements_description, setRequirements_description] = useState("");
  const [idcompanies,setIdcompanies]= useState("");


const getData = async () => {
  try {
    const value = await AsyncStorage.getItem('idcompanies')
     setIdcompanies(value);

  } catch(e) {
   console.log(e)
  }
}

useEffect(() => {
  getData();
}, []);


  const handleCreateRequirements= ()=>{
  
    const form = new FormData();
    form.append("idcompanies",idcompanies);
    form.append("requirements_name",requirements_name);
    form.append("requirements_priority",requirements_priority);
    form.append("requirements_description",requirements_description);
    axios.post(RoutesList.api.requirements.create,form,getHeader()).then((res)=>{
      console.log(res.data)
      if (res.data.status === "success") {
        setRequirements_name("");
        setRequirements_priority("");
        setRequirements_description("");
        navigation.navigate("list",{id:idcompanies})
      }
      
    });

  };
  return (
    <ImageBackground
      source={require("../assets/img/Fondo.png")}
      style={styles.imagen_container}
    >
      <ScrollView style={styles.container}>
        <Image
          style={styles.Imagen_logo}
          source={require("../assets/img/Teclab.png")}
        />
        <DecoratedTexinput 
        placeholder={"Ingrese nombre"} 
          value={requirements_name}
          setValue={setRequirements_name}
        />
        <DecoratedTexinput
          placeholder={"ingrese prioridad (Nuevo 0 Novedad)"}
          value={requirements_priority}
          setValue={setRequirements_priority}
        />
        <DecoratedTexArea
          value={requirements_description}
          setValue={setRequirements_description}
          placeholder={"descripción"}
        />
        <Pressable
          style={({ pressed }) => [styles.button, pressed && { opacity: 0.8 }]}
          onPress={handleCreateRequirements}
        >
          <Text style={styles.Text}>Crear</Text>
        </Pressable>
      </ScrollView>
    </ImageBackground>
  );
};

export default CreateRequirements;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    marginRight: 100,
    marginTop:80,
    marginHorizontal: 45,
    // justifyContent: "center",
    height:"90%"
  },
  imagen_container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width:"80%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 13,
    marginLeft: 62,
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 30,
    elevation: 4,
    backgroundColor: "#08B4FA",
  },
  Text: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  Imagen_logo: {
    marginLeft: 156,
  },
});
