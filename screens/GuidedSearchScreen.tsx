import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, View, ImageBackground } from "react-native";
import { Button } from "react-native-elements";
import DynamicRadioList from "../components/DynamicRadioList";
import { navigationScreens, screens } from "../constants/ScreenSections";
import ThemedStyles from "../styles/ThemedStyles";
import { GuidedQueryFilters, Screens, SectionType } from "../types";

type nextParms = {
  screenIndex: number;
  isHierba: boolean;
  tipo?: string;
  result: Array<any> | undefined;
};

export default function GuidedSearchScreen({ navigation, route }: any) {
  const [isHierba, setIsHierba] = useState(false);
  const [allChecked, setAllChecked] = useState(false);
  const [tipo, setTipo] = useState<
    "Carnoso" | "Seco" | "Simple" | "Compuesta" | "No lo sé" | ""
  >("");
  const [result, setResult] = useState<Array<any> | undefined>(undefined);

  useEffect(() => {
    if (route?.params?.isHierba) {
      setIsHierba(true);
    }
    if (route?.params?.result) {
      setResult(route?.params?.result);
    }
  }, [setIsHierba]);
  const theme = ThemedStyles.style;

  const screenIndex: number = route?.params?.screenIndex || 0;
  const navigationScreen: any = navigationScreens[screenIndex];
  const screenName: Screens =
    typeof navigationScreen.screen === "string"
      ? navigationScreen.screen
      : navigationScreen.screen(route?.params?.tipo);
  const section: Array<SectionType> = screens[screenName];
  let hasMore = true;
  let nextIndex = screenIndex + 1;
  if (nextIndex >= navigationScreens.length) {
    hasMore = false;
  } else if (navigationScreens[nextIndex].soloHierbas && !isHierba) {
    nextIndex++;
    if (nextIndex >= navigationScreens.length) {
      hasMore = false;
    }
  }

  let onSetTipo = undefined;
  if (screenName === "hojas" || screenName === "tipoFrutos") {
    onSetTipo = setTipo;
  }

  const nextParms: nextParms = {
    screenIndex: nextIndex,
    isHierba,
    result,
  };

  if (screenName === "hojas") {
    if (tipo === "Simple") {
      nextParms.tipo = "hojasSimples";
    } else {
      nextParms.tipo = "hojasCompuestas";
    }
  }

  if (screenName === "tipoFrutos" && isHierba) {
    if (tipo === "Carnoso") {
      nextParms.tipo = "frutosCarnosos";
    } else {
      nextParms.tipo = "frutosSecos";
    }
  }

  const next = () => {
    navigation.push("GuidedSearchScreen", nextParms);
  };

  const seeResults = () => {
    if (result && result.length > 0) {
      navigation.push("EspeciesListScreen", { especies: result });
    }
  };

  //console.log('result', result);

  return (
    <View style={theme.flexContainer}>
      <ImageBackground
        resizeMode={"repeat"}
        source={require("../assets/images/leaves.png")}
        style={styles.image}
      >
        <DynamicRadioList
          newSections={section}
          onSetHierba={setIsHierba}
          isHierba={isHierba}
          onSetTipo={onSetTipo}
          onAllChecked={setAllChecked}
          onResult={setResult}
        ></DynamicRadioList>
        <View style={styles.footer}>
          <Button
            title={
              result === undefined
                ? "Resultados"
                : `Resultados ${result.length}`
            }
            disabled={!result}
            onPress={seeResults}
          />
          {hasMore && (
            <Button
              title="Más Opciones"
              onPress={next}
              disabled={
                !allChecked || !result || (result && result.length === 0)
              }
            />
          )}
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    height: 60,
    width: "100%",
    backgroundColor: "lightblue",
  },
});
