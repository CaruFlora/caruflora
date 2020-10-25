import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useDimensions } from "@react-native-community/hooks";
import { DrawerParamList, TabTwoParamList, MainParamList } from "../types";
import ThemedStyles from "../styles/ThemedStyles";
import { createStackNavigator } from "@react-navigation/stack";
import TabTwoScreen from "../screens/TabTwoScreen";
import HomeScreen from "../screens/HomeScreen";
import EspeciesListScreen from "../screens/EspeciesListScreen";
import EspeciesDetailScreen from "../screens/EspeciesDetailScreen";
import MenuComponent from "../components/MenuComponent";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import GuidedSearchScreen from "../screens/GuidedSearchScreen";
import UseModeScreen from "../screens/UseModeScreen";

const Drawer = createDrawerNavigator<DrawerParamList>();

export default function DrawerNavigator() {
  const dimensions = useDimensions().window;

  const isLargeScreen = dimensions.width >= 600;
  return (
    <Drawer.Navigator
      initialRouteName="Main"
      edgeWidth={dimensions.width}
      drawerType="slide"
      //drawerContent={Drawer}
      drawerStyle={isLargeScreen ? null : ThemedStyles.style.width90}
    >
      <Drawer.Screen
        name="Main"
        component={MainNavigator}
        options={{ gestureEnabled: false }}
      />
      <Drawer.Screen name="TabTwo" component={TabTwoNavigator} />
    </Drawer.Navigator>
  );
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const MainStack = createStackNavigator<MainParamList>();

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
        options={{ title: "Inicio", headerLeft: MenuComponent }}
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
      <MainStack.Screen
        name="UseModeScreen"
        component={UseModeScreen}
        options={{ title: "Caru Flora" }}
      />
    </MainStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: "Tab Two Title" }}
      />
    </TabTwoStack.Navigator>
  );
}
