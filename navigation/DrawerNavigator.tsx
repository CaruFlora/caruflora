import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useDimensions } from "@react-native-community/hooks";
import { DrawerParamList, MainParamList } from "../types";
import ThemedStyles from "../styles/ThemedStyles";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import EspeciesListScreen from "../screens/EspeciesListScreen";
import EspeciesDetailScreen from "../screens/EspeciesDetailScreen";
import MenuComponent from "../components/MenuComponent";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import GuidedSearchScreen from "../screens/GuidedSearchScreen";
import UseModeScreen from "../screens/UseModeScreen";
import CaracterizationScreen from "../screens/CaracterizationScreen";
import CreditScreen from "../screens/CreditScreen";

const Drawer = createDrawerNavigator<DrawerParamList>();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Inicio">
      <Drawer.Screen name="Inicio" component={MainNavigator} />
      <Drawer.Screen
        name="UseModeScreen"
        component={UseModeNavigator}
        options={{ title: 'Modo de uso' }}
      />
      <Drawer.Screen
        name="CaracterizationScreen"
        component={CaracterizationNavigator}
        options={{ title: 'Caracterización del Area' }}
      />
      <Drawer.Screen
        name="CreditScreen"
        component={CreditNavigator}
        options={{ title: 'Créditos' }}
      />
    </Drawer.Navigator>
  );
}

const MainStack = createStackNavigator<MainParamList>();
const UseModeStack = createStackNavigator();
const CaracterizationStack = createStackNavigator();
const CreditsStack = createStackNavigator();

function CreditNavigator() {
  return (
    <CreditsStack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#9ACBEC" },
      }}
    >
      <CreditsStack.Screen
        name="CreditsScreen"
        component={CreditScreen}
        options={(props) => {
          const options = {
            title: "Créditos",
            headerLeft: () => <MenuComponent {...props} />,
          };
          return options;
        }}
      />
    </CreditsStack.Navigator>
  )
}

function CaracterizationNavigator() {
  return (
    <CaracterizationStack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#9ACBEC" },
      }}
    >
      <CaracterizationStack.Screen
        name="CaracterizationScreen"
        component={CaracterizationScreen}
        options={(props) => {
          const options = {
            title: "Caracterización del Area",
            headerLeft: () => <MenuComponent {...props} />,
          };
          return options;
        }}
      />
    </CaracterizationStack.Navigator>
  )
}

function UseModeNavigator() {
  return (
    <UseModeStack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#9ACBEC" },
      }}
    >
      <UseModeStack.Screen
        name="UseModeScreen"
        component={UseModeScreen}
        options={(props) => {
          const options = {
            title: "Modo de uso",
            headerLeft: () => <MenuComponent {...props} />,
          };
          return options;
        }}
      />
    </UseModeStack.Navigator>
  )
}

function MainNavigator() {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#9ACBEC" },
      }}
    >
      <MainStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={(props) => {
          const options = {
            title: "Inicio",
            headerLeft: () => <MenuComponent {...props} />,
          };
          return options;
        }}
      />
      <MainStack.Screen
        name="EspeciesListScreen"
        component={EspeciesListScreen}
        options={{ title: "Listado de Especies" }}
      />
      <MainStack.Screen
        name="EspeciesDetailScreen"
        component={EspeciesDetailScreen}
        options={{ headerShown: false }}
      />
      <MainStack.Screen
        name="GuidedSearchScreen"
        component={GuidedSearchScreen}
        options={{ title: "Búsqueda Guiada" }}
      />
    </MainStack.Navigator>
  );
}
