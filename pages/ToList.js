// import AsyncStorage from "@react-native-async-storage/async-storage";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Requirements from "../components/Requirements";
import RoutesList from "../components/tool/RoutesList";
import { getHeader } from "../components/tool/SessionSettings";

const ToList = ({route,navigation  }) => {
  const [readRequirements, setReadRequirements] = useState([]);

  
  const ws = React.useRef(new WebSocket("ws://10.0.2.2:8080")).current;

  // const handleWebsocket = () => {
  //   ws.onopen = () => {
  //     console.log("websocket abierto");
  //   };

  //   ws.onclose = (e) => {
  //     console.log("web socket cerrado");
  //   };

  //   ws.onerror = (e) => {
  //     console.log(e);
  //   };

  //   ws.onmessage = (e) => {
  //     console.log(e);
  //     HandleReadRequirements();
  //   };
  // };

// const getData = async () => {
//   try {
//     const value = await AsyncStorage.getItem('idcompanies')
//      setIdcompanies(value);
//      setRender(true);

//   } catch(e) {
//    console.log(e)
//   }
// }

const HandleReadRequirements = () => {
  const {idcompanies,id} = route.params;
 const form = new FormData();
       if (![undefined,null].includes(idcompanies)) {
         form.append("idcompanies", idcompanies);
       
       }else{
      form.append("idcompanies",id);
   
       }
       axios.post(RoutesList.api.requirements.read, form, getHeader()).then((res) => {
        setReadRequirements(!res.data.status ? res.data : []);
        
      });
};
  


  useEffect(() => {
    HandleReadRequirements();
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/img/Fondo.png")}
        style={styles.imagen_container}
      >
        <View style={styles.container_form}>
          <SafeAreaView>
          <FlatList
              data={readRequirements}
              renderItem={({ item }) => <Requirements requirements={item} />}
             
            ></FlatList>
            
        
          </SafeAreaView>
        </View>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
};

export default ToList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imagen_container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
    width: "100%",
    border:"none",
    elevation: 4,
  },
  text: {
    fontSize: 32,
    fontWeight: "bold",
    marginLeft: 30,
    marginBottom: 10,
  },
});
