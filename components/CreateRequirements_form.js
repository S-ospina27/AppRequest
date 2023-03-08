import React from "react";
import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import DecoratedButton from "./DecoratedButton";
import DecoratedTexinput from "./DecoratedTexinput";
import DecoratedTexArea from "./DecoratedTextArea";

const CreateRequirements_form = () => {
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
        <DecoratedTexinput placeholder={"Ingrese nombre"} />
        <DecoratedTexinput placeholder={"ingrese prioridad"} />
        <DecoratedTexArea  />
        <Pressable
          style={({ pressed }) => [styles.button, pressed && { opacity: 0.8 }]}
          // onPress={onPress}
        >
          <Text style={styles.Text}>Crear</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
};

export default CreateRequirements_form;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "90%",
    marginRight: 90,
    justifyContent: "center"
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
