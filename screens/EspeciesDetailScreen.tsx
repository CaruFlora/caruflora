import { RouteProp } from "@react-navigation/native";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
} from "react-native";
//@ts-ignore
import { SliderBox } from "react-native-image-slider-box";
import { MainParamList } from "../types";
import { arboles, hierbas } from "../constants/Images";
import ThemedStyles from "../styles/ThemedStyles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { getNombreVulgar } from "../helpers/getNombreVulgar";

type TextProps = Text["props"];

const FText = (props: TextProps) => {
  const { style, ...otherProps } = props;

  const format: TextStyle = {
    textAlign: "justify",
    lineHeight: 20,
    fontFamily: "Roboto",
    fontSize: 16,
  };

  return <Text style={[format, style]} {...otherProps} />;
};

type EspeciesDetailScreenRouteProp = RouteProp<
  MainParamList,
  "EspeciesDetailScreen"
>;

type PropsType = {
  route: EspeciesDetailScreenRouteProp;
  navigation: any;
};

const getImages = (libro: string, id: number) => {
  const images: any = libro === "arboles" ? arboles[id] : hierbas[id];
  return [images.img1, images.img2];
};

const EspeciesDetailScreen = ({ route, navigation }: PropsType) => {
  const theme = ThemedStyles.style;
  const insets = useSafeAreaInsets();
  const padding = { paddingTop: insets.top + 5 };
  const { especie } = route.params;

  if (!especie) {
    return null;
  }

  const images = getImages(especie.libro, especie.id);

  const subTitle = [
    theme.fontL,
    theme.borderBottom,
    theme.borderPrimary,
    theme.marginBottom2x,
    theme.marginTop3x,
  ];

  return (
    <View style={[theme.flexContainer]}>
      <View style={[styles.especieContainer, padding]}>
        <TouchableOpacity
          style={[theme.centered, theme.paddingLeft]}
          onPress={navigation.goBack}
        >
          <MaterialCommunityIcons name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
        <View style={[theme.centered, theme.width90]}>
          <Text style={[styles.especieText]}>
            {especie.especie} ({especie.familia})
          </Text>
          <Text style={theme.fontL}>{especie.autor}</Text>
        </View>
      </View>
      <ScrollView>
        <SliderBox images={images} id={"image-slider"} />
        <View>
          <View style={styles.familyContainer}>
            <Text style={styles.familyText}>{especie.estatus}</Text>
          </View>
        </View>
        <View style={styles.nombreContainer}>
          <FText style={styles.nombreText}>{getNombreVulgar(especie)}</FText>
        </View>
        <View style={[theme.paddingLeft6x, theme.paddingRight6x, theme.marginBottom4x]}>
          <FText>{especie.caracteristicas}</FText>
          <Text style={subTitle}>Hábitat</Text>
          <FText>{especie.habitatcaracteristicas}</FText>
          <Text style={subTitle}>Observaciones</Text>
          <FText>{especie.observaciones}</FText>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  familyContainer: {
    position: "absolute",
    right: 0,
    bottom: 0,
    backgroundColor: "#2E8856",
    padding: 5,
    marginRight: 5,
    marginBottom: 5,
  },
  especieText: {
    fontStyle: "italic",
  },
  especieContainer: {
    backgroundColor: "#D2E19060",
    paddingBottom: 5,
    flexDirection: "row",
  },
  familyText: {
    color: "#FFFF",
  },
  nombreContainer: {
    backgroundColor: "#D2E190",
    padding: 10,
    width: "100%",
    marginBottom: 15,
  },
  nombreText: {
    alignSelf: "center",
    color: "#1E5631",
  },
});

export default EspeciesDetailScreen;
