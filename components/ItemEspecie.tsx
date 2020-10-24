import React from "react";
import { GestureResponderEvent, Text, TouchableOpacity, View } from "react-native";
import { Avatar } from "react-native-elements";
import { getNombreVulgar } from "../helpers/getNombreVulgar";
import ThemedStyles from "../styles/ThemedStyles";
import { especie } from "../types";

type PropsType = {
  especie: especie;
  avatarSource: any;
  onPress: (event: GestureResponderEvent) => void;
};

const ItemEspecie = ({ especie, avatarSource, onPress }: PropsType) => {
  const theme = ThemedStyles.style;
  return (
    <TouchableOpacity style={[theme.rowJustifyStart, theme.padding3x]} onPress={onPress}>
      <Avatar rounded source={avatarSource} size={46} />
      <View style={[theme.marginLeft2x, theme.flexContainer]}>
        <Text>
          {especie.especie} {especie.autor}
        </Text>
        <Text style={theme.fontS}>{getNombreVulgar(especie)}</Text>
        <Text numberOfLines={1} ellipsizeMode={'tail'} style={theme.fontXS}>{especie.caracteristicas}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ItemEspecie;
