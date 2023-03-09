import React from 'react'
import { StyleSheet, TextInput } from 'react-native';

const DecoratedTexArea = ({placeholder,value,setValue}) => {
  return (
    <TextInput
    style={styles.inputs}
    placeholder={placeholder}
    multiline
    placeholderTextColor={"#C4C4C4"}
    value={value}
    onChangeText={(text) => {
        setValue(text);
    }}
  />
  )
}

export default DecoratedTexArea;

const styles = StyleSheet.create({
    inputs: {
      margin:"auto",
      borderWidth: 1,
      width: "87%",
      // marginLeft:10,
      // height:"13%",
      borderRadius: 15,
      marginLeft: 50,
      marginTop: 20,
      borderColor: "#F5F5F5",
      padding: 15,
      backgroundColor: "white",
      color: "#212121",
      fontSize: 16,
    },
  });
  