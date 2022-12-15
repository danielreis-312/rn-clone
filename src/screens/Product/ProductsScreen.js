import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ProductScreen = () => {
  return (
    <View style={StyleSheet.container}>
      <Text>Products</Text>
    </View>
  );
};
export { Products };
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
