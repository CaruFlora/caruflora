import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { Provider, observer } from 'mobx-react';
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import NotFoundScreen from "../screens/NotFoundScreen";
import { RootStackParamList } from "../types";
import LinkingConfiguration from "./LinkingConfiguration";
import ThemedStyles from "../styles/ThemedStyles";
import DrawerNavigator from "./DrawerNavigator";
import { StoresProvider } from "../hooks/useStores";

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation() {

  React.useEffect(() => {
    ThemedStyles.init();
  }, [])

  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      //@ts-ignore
      theme={ThemedStyles.navTheme}
    >
      <StoresProvider>
        <Provider key="app" >
          <RootNavigator />
        </Provider>
      </StoresProvider>
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Root" component={DrawerNavigator} />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
    </Stack.Navigator>
  );
}
