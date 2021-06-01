import * as React from "react";
import { ImageBackground, ScrollView, StyleSheet, View } from "react-native";
import ThemedStyles from "../styles/ThemedStyles";
import { Text } from "react-native-elements";
import Swiper from "react-native-swiper";
import StyledText from "react-native-styled-text";

export default function CreditScreen({ navigation }: any) {
  const theme = ThemedStyles.style;

  return (
    
      <ImageBackground
        resizeMode={"repeat"}
        source={require("../assets/images/leaves.png")}
        style={theme.flexContainer}
      >
        <ScrollView style={[theme.flexContainer, theme.padding3x]}>
        <Text style={[theme.fontL, theme.marginBottom2x, theme.fontSemibold]}>
          AUTORIDADES
        </Text>
        <StyledText style={theme.textJustify}>
          {`La Comisión Administradora del Río Uruguay (C.A.R.U.) está integrada por diez (10) Delegados, cinco (5) por cada país Parte. La Presidencia y la Vicepresidencia son ejercidas, por períodos anuales y en forma alternada, por los Presidentes de la Delegación de cada País. La presidencia actual de la Comisión la ejerce el <b>Sr. Mario Daniel Ayala Barrios</b> y <b>Dr. José Eduardo Laurito</b>.`}
        </StyledText>
        <Text style={[theme.marginVertical3x]}>
          En la actualidad la nómina de Delegados por cada parte es la
          siguiente:
        </Text>
        <View style={[theme.rowJustifySpaceEvenly, theme.paddingHorizontal3x]}>
          <View style={{ flex: 1 }}>
            <Text style={[theme.bold, theme.marginBottom2x]}>
              Delegación Uruguaya
            </Text>
            <Text style={[theme.bold, theme.marginBottom2x]}>Presidente</Text>
            <Text style={theme.marginBottom2x}>
              Sr. Mario Daniel Ayala Barrios
            </Text>
            <Text style={[theme.bold, theme.marginBottom2x]}>
              Vicepresidente
            </Text>
            <Text style={theme.marginBottom2x}>Sr. Miguel R. Feris Grassi</Text>
            <Text style={[theme.bold, theme.marginBottom2x]}>Delegados</Text>
            <Text style={theme.marginBottom2x}>
              Esc. María Eugenia Almirón Schulz
            </Text>
            <Text style={theme.marginBottom2x}>Ing. Agrim. Roberto Pérez Rodino</Text>
            <Text style={theme.marginBottom2x}>
              CN (R) Miguel Angel de Ocampo Dimartino
            </Text>
          </View>
          <View style={{ flex: 1, marginLeft: 15 }}>
            <Text style={[theme.bold, theme.marginBottom2x]}>
              Delegación Argentina
            </Text>
            <Text style={[theme.bold, theme.marginBottom2x]}>Presidente</Text>
            <Text style={theme.marginBottom2x}>Dr. José Eduardo Lauritto</Text>
            <Text style={[theme.bold, theme.marginBottom2x]}>
              Vicepresidente
            </Text>
            <Text style={theme.marginBottom2x}>
              Dr. Rodolfo M. Ojea Quintana
            </Text>
            <Text style={[theme.bold, theme.marginBottom2x]}>Delegados</Text>
            <Text style={theme.marginBottom2x}>Emb. Extraordinaria y Plenipotenciaria María Marta Insausti Urdapilleta</Text>
            <Text style={theme.marginBottom2x}>Ing. Hernán Darío Orduna</Text>
            <Text style={theme.marginBottom2x}>Arq. Eduardo Caminal</Text>
          </View>
        </View>
        <Text style={[theme.fontL, theme.marginBottom2x, theme.fontSemibold]}>
          CRÉDITOS
        </Text>
        <View style={[theme.rowJustifySpaceEvenly, theme.paddingHorizontal1x]}>
          <View style={{ flex: 1, paddingBottom: 25 }}>
            <StyledText>{`<i>Equipo técnico:</i>
  
  <b>Especialistas:</b> Dr. Pablo Aceñolaza, Dra. Estela Rodriguez.
  <b>Desarrollador informático:</b> Juan Manuel Solaro.

<i>Fuentes:</i>

  <b>Base de datos compilados:</b> Rodriguez, E. Aceñolaza, P.; Picasso, G y J. Gago. 2018. 2018. Plantas del bajo Río Uruguay: Árboles y Arbustos. Volumen I - 1ª ed. - 310p., Ed. Comisión Administradora del Río Uruguay – C.A.R.U. ISBN 978-9974-641-16-7
Aceñolaza, P.G.; Rodriguez, E.E.; Gago, J.; Picasso, G. y F. Haretche. 2019. Plantas del bajo Río Uruguay: Hierbas, Lianas y Epífitas. Volumen 2-1ª ed. 434 pp., Ed. Comisión Administradora del Río Uruguay–C.A.R.U. ISBN 978-9974-641-25-9.`}</StyledText>
          </View>
          <View style={{ flex: 1, marginLeft: 15 }}>
            <StyledText>{`<i>Citación APP:</i>
     
  Aceñolaza, P. y E. Rodriguez. 2021. CARU-Flora. Comisión
  Administradora del Río Uruguay – C.A.R.U.

<i>Técnicos CARU:</i>

  <b>Secretario Técnico CARU:</b>
    Juan Carlos Martínez Rodríguez.
  <b>Secretario Administrativo:</b>
    Marcos Di Giuseppe.
  <b>Adjunta Técnica CARU:</b>
    Dra. Mariel Bazzalo.

<i>Colaboradores:</i>

  Dra. Mariel Bazzalo (revisión).      
  Héctor Sánchez Montes (ilustración digital).

<i>Agradecimientos:</i>

  Gastón Domínguez, diseño de logos y botones`}</StyledText>
          </View>
        </View>
        </ScrollView>
      </ImageBackground>

  );
}

const styles = StyleSheet.create({});
