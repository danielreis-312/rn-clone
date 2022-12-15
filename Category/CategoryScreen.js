import React from "react";
import { View, Text, StyleSheet } from "react-native";

export function CategoryScreen() {
  return (
    <View style={StyleSheet.container}>
      <Text>Categorias</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
