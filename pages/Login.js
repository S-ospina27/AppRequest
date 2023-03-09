// import AsyncStorage from "@react-native-async-storage/async-storage";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";

import {
  Alert,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import DecoratedButton from "../components/DecoratedButton";
import DecoratedTexinput from "../components/DecoratedTexinput";
import RoutesList from "../components/tool/RoutesList";
import { getHeader } from "../components/tool/SessionSettings";

const Login = ({ navigation }) => {
  const [nit, setNit] = useState("");
  const [email, setEmail] = useState("");

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('idcompanies',JSON.stringify(value));
    } catch (e) {
      console.log(e);
    }
  }

  const handleSubmit = () => {
    const form = new FormData();
    form.append("companies_nit", nit);
    form.append("companies_email", email);
    axios
      .post( RoutesList.api.auth.login, form,getHeader())
      .then((res) => {
        if (res.data.status === "info") {
          storeData(res.data.data.idcompanies);
          setNit("");
          setEmail("");
          navigation.navigate("list",{idcompanies:JSON.stringify(res.data.data.idcompanies)});
          // navigation.navigate("list");
        } else {
          Alert.alert("Error", "Usuario y/o estan malos", [
            {
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel",
            },
          ]);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/img/Fondo.png")}
        style={styles.imagen_container}
      >
        <View style={styles.container_form}>
          <Image
            style={styles.Imagen_logo}
            source={require("../assets/img/Teclab.png")}
          />
          <DecoratedTexinput
            placeholder={"ingrese nit o cedula"}
            value={nit}
            setValue={setNit}
          />

          <DecoratedTexinput
            placeholder={"ingrese correo"}
            value={email}
            setValue={setEmail}
          />
          <DecoratedButton texto={"Ingresar"} onPress={handleSubmit} />
        </View>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imagen_container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  Imagen_logo: {
    marginLeft: 50,
    width: 200,
    height: 57,
  },
  container_logo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: 170,
  },
  container_form: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 47,
    paddingTop: 10,
    paddingBottom: 16,
    paddingLeft: 2,
    paddingRight: 12,
    width: "97%",
  },
});
