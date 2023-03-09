import axios from "axios";
import React, { useState } from "react";
import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import DecoratedTexinput from "../components/DecoratedTexinput";
import DecoratedTexArea from "../components/DecoratedTextArea";
import RoutesList from "../components/tool/RoutesList";
import { getHeader } from "../components/tool/SessionSettings";


const CreateRequirements = ({ route, navigation }) => {
  const [requirements_priority, setRequirements_priority] = useState("");
  const [requirements_name, setRequirements_name] = useState("");
  const [requirements_description, setRequirements_description] = useState("");

  const handleCreateRequirements= ()=>{
    const { idcompanies } = route.params;
  
    const form = new FormData();
    form.append("idcompanies",idcompanies);
    form.append("requirements_name",requirements_name);
    form.append("requirements_priority",requirements_priority);
    form.append("requirements_description",requirements_description);

    axios.post(RoutesList.api.requirements.create,form,getHeader()).then((res)=>{
      console.log(res.data)
      if (res.data.status === "success") {
        console.log("hola")
        navigation.navigate("list",{idcompanies:idcompanies})
        setRequirements_name("");
        setRequirements_priority("");
        setRequirements_description("");
      }
    });

  };
  return (
    <ImageBackground
      source={require("../assets/img/Fondo.png")}
      style={styles.imagen_container}
    >
      <View style={styles.container}>
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
      </View>
    </ImageBackground>
  );
};

export default CreateRequirements;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "90%",
    marginRight: 90,
    justifyContent: "center",
  },
  imagen_container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 13,
    marginLeft: 72,
    paddingVertical: 14,
    paddingHorizontal: 100,
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
    marginLeft: 136,
  },
});
