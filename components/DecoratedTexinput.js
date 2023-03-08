import React from 'react'
import { StyleSheet, TextInput } from 'react-native';

const DecoratedTexinput = ({placeholder,value,setValue}) => {
  return (
    <TextInput
    style={styles.inputs}
    placeholder={placeholder}
    placeholderTextColor={"#C4C4C4"}
    value={value}
    onChangeText={(text) => {
        setValue(text);
    }}
  />
  )
}

export default DecoratedTexinput

const styles = StyleSheet.create({
    inputs: {
      margin:"auto",
      borderWidth: 1,
      width: "95%",
      borderRadius: 40,
      marginLeft: 50,
      marginTop: 20,
      borderColor: "#F5F5F5",
      padding: 15,
      backgroundColor: "white",
      color: "#212121",
      fontSize: 16,
    },
  });
  