import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";

const Requirements = ({ requirements }) => {
  const { idrequirements, requirements_name, states_name,requirements_priority } = requirements;
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text}>{`RQ-${idrequirements}`}</Text>
      <Text style={styles.text}>{`NOMBRE: ${requirements_name}`}</Text>
      <Text style={styles.text}>{`TIPO: ${requirements_priority}`}</Text>
      <Text style={styles.text}>{`ESTADO :${states_name}`}</Text>
    </ScrollView>
  );
};

export default Requirements;
const styles = StyleSheet.create({
  container: {
    width: 338,
    padding: 10,
    borderWidth: 0.75,
    borderRadius: 10,
    margin: "1%",
    marginLeft: "6%",
    backgroundColor:"#13A5EE",
    marginVertical: 8,
    marginHorizontal: 16,
  },
  text: {
    fontSize: 18,
    color:"black",
    fontWeight:"bold"
  },
});
