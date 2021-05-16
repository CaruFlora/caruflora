import React from "react";
import { StyleSheet, View } from "react-native";
import ThemedStyles from "../styles/ThemedStyles";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const MenuComponent = ({ navigation }: any) => {
  return <Ionicons name="md-menu" style={styles.menu} onPress={navigation.openDrawer} />;
};

const styles = StyleSheet.create({
  menu: {
    fontSize:24,
    color:'black',
    marginLeft: 20,
  },
});

export default MenuComponent;
