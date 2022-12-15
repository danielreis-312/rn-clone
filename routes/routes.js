import { TabActions } from "@react-navigation/native";
import React from "react";

import { View, Text } from "react-native";
import { createMaterialTopTabNavigator } from "react-navigation/material=top-tabs";
import { Category } from "../src/screens/Category/CategoryScreen";
import { Sellers } from "../screens/User/Sellers";
import { Products } from "../screens/Product/ProductsScreen";

const tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Produtos" component={Products} />
      <Tab.Screen name="Categoria" component={Category} />
    </Tab.Navigator>
  );
}
