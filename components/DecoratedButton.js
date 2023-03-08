import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'

const DecoratedButton = ({texto,onPress}) => {
  return (
    <Pressable
    style={({ pressed }) => [styles.button, pressed && { opacity: 0.8 }]}
    onPress={onPress}
  >
    <Text style={styles.Text}>{texto}</Text>
  </Pressable>
  
  )
}

export default DecoratedButton;
const styles = StyleSheet.create({
    button: {
      alignItems: "center",
      justifyContent: "center",
      marginTop: 13,
      marginLeft:40,
      paddingVertical: 14,
      paddingHorizontal: 100,
      borderRadius: 30,
      elevation: 4,
      backgroundColor: "#08B4FA",
    },
    Text: {
      color: "#fff",
      fontWeight:"bold"
    },
  });
  