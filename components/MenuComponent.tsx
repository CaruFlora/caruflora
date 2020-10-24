import React from "react";
import { StyleSheet, View } from "react-native";
import ThemedStyles from "../styles/ThemedStyles";
import { Ionicons } from "@expo/vector-icons";

const MenuComponent = () => {
  return <Ionicons name="md-menu" style={styles.menu} />;
};

const styles = StyleSheet.create({
  menu: {
    fontSize:24,
    color:'black',
    marginLeft: 20,
  },
});

export default MenuComponent;
