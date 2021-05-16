import React from "react";
import { View, Text, ImageBackground, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useSafeArea } from "react-native-safe-area-context";
import ThemedStyles from "../styles/ThemedStyles";
import { Ionicons } from "@expo/vector-icons";
const caruLogo = "../assets/images/logocaru.png";

/**
 * implementar botones para buscar por separado
 * esta mal en busqueda guiada las fotos
 * borde hoja
 *  revisar Aniseia argentina color no funcionando0
 *  frutos secos muestran solo en no lo se
 *  revisar familia en pantalla de detalle
 */

export default function HomeScreen(props: any) {
  const insets = useSafeArea();
  const theme = ThemedStyles.style;

  const buttonStyle = [
    theme.backgroundButton,
    theme.padding2x,
    theme.marginBottom,
    theme.borderRadius2x,
  ];
  const textStyle = [theme.centered, theme.colorWhite, theme.marginLeft3x];

  return (
    <View style={[styles.container]}>
      <ImageBackground
        resizeMode={"repeat"}
        source={require("../assets/images/leaves.png")}
        style={styles.image}
      >
        <Image
          resizeMode="contain"
          source={require(caruLogo)}
          style={styles.logo}
        />
        <View>
          <Text style={[styles.text, theme.bold, theme.marginBottom4x]}>
            Plantas del bajo Río Uruguay
          </Text>
          <Text style={styles.text}>ÁRBOLES Y ARBUSTOS</Text>
          <Text style={styles.text}>HIERBAS, LIANAS Y EPÍFITAS</Text>
        </View>
        <View
          style={[
            theme.fullWidth,
            theme.paddingHorizontal3x,
            theme.marginTop4x,
          ]}
        >
          <TouchableOpacity
            style={buttonStyle}
            onPress={() =>
              props.navigation.push("GuidedSearchScreen", { isHierba: false })
            }
          >
            <View style={theme.rowJustifyCenter}>
              <Ionicons name="md-search" size={24} color="white" />
              <Text style={textStyle}>BÚSQUEDA GUIADA ÁRBOLES y ARBUSTOS</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={buttonStyle}
            onPress={() =>
              props.navigation.push("GuidedSearchScreen", { isHierba: true })
            }
          >
            <View style={theme.rowJustifyCenter}>
              <Ionicons name="md-search" size={24} color="white" />
              <Text style={textStyle}>
                BÚSQUEDA GUIADA HIERBAS, LIANAS y EPÍFITAS
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={buttonStyle}
            onPress={() => props.navigation.push("EspeciesListScreen")}
          >
            <View style={theme.rowJustifyCenter}>
              <Ionicons name="md-list" size={24} color="white" />
              <Text style={textStyle}>LISTADO DE ESPECIES</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    alignSelf: "center",
    fontSize: 16,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    alignItems: "center",
  },
  logo: {
    marginTop: 45,
    width: "45%",
    height: "30%",
  },
});
