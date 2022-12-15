import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Responsive from "react-native-lightweight-responsive";

//especificação javascript commonjs >
const SocialButton = ({ name, title, btnColor, ...props }) => {
  return (
    <TouchableOpacity>
      <FontAwesome5 name={"twitter"} size={Responsive.font(24)} color="#000" />
      <Text>{title} </Text>
    </TouchableOpacity>
  );
};

export { SocialButton };
