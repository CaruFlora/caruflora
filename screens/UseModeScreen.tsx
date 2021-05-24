import * as React from "react";
import { ImageBackground, ScrollView, StyleSheet, View } from "react-native";
import ThemedStyles from "../styles/ThemedStyles";
import { Text } from "react-native-elements";
import Swiper from "react-native-swiper";
import StyledText from "react-native-styled-text";

const slides: any[] = [
  {
    title: "SOBRE LA APP",
    description: `CARU-FLORA ayuda a identificar árboles, arbustos y hierbas frecuentes que crecen en los márgenes del bajo río Uruguay. 
El área que comprende corresponde al tramo de la Comisión Administradora del Río Uruguay (CARU): su límite norte, a la altura de Monte Caseros en la provincia Argentina de Corrientes, y Bella Unión, en el Departamento Artigas de la República Oriental del Uruguay, hasta su desembocadura en el Estuario del Río de La Plata.
La aplicación es un desarrollo propio de CARU, basado en los libros:
-Rodriguez, E.E.; Aceñolaza, P.G.; Picasso, G. y Gago, J. 2018. Plantas del bajo Río Uruguay: Árboles y Arbustos. Volumen I. Comisión Administradora del Río Uruguay-C.A.R.U. 310 pp. Junto con la base de datos asociada.
-Aceñolaza, P.G.; Rodriguez, E.E.; Gago, J.; Picasso, G. y F. Haretche. 2019. Plantas del bajo Río Uruguay: Hierbas, Lianas y Epífitas. Volumen II. Comisión Administradora del Río Uruguay–C.A.R.U. 434 pp. Junto con la base de datos asociada.
`,
  },
  {
    title: "OBJETIVO",
    description: `Obrar de guía de campo práctica, visual e intuitiva, para la determinación y el conocimiento de la flora en el tramo final del río Uruguay.`,
  },
  {
    title: "SELECCIÓN DE ESPECIES",
    description: `Las especies que se incluyen corresponden a los principales árboles y arbustos nativos junto con las hierbas, lianas y plantas acuáticas que podemos encontrar recorriendo su geografía, incluso terrenos lindantes. 
Se excluyen la mayoría de las especies cultivadas, aquellas usadas en arbolado urbano y las implantadas. Solo unas pocas exóticas se agregan por ser invasoras en la región. 
La base está compuesta por 105 especies de árboles y arbustos, 17º de herbáceas con descripción e ilustración        
      `,
  },
  {
    title: "¿CÓMO UTILIZAR LA APP?",
    description: `CARU-FLORA es de uso intuitivo y se basa en el ingreso de unos pocos caracteres morfológicos externos de las plantas. Estos se presentan como alternativas divergentes que van circunscribiendo la selección de posibles resultados hasta llegar a uno solo o a pocas alternativas. La sección final la realiza el interesado tocando las alternativas y comparando visualmente con lo que desea identificar a campo.
      `,
  },
  {
    title: "DESCRIPCIÓN DE LAS ESPECIES",
    description: `Todas las especies incluidos en CARU-FLORA poseen una ficha de estructura similar que permite obtener información del mismo tenor para la totalidad de las mismas. Estas fichas cuentan con una descripción general, seguida con una serie de fotografías de la planta entera o sus partes para facilitar su reconocimiento a campo.
El texto de las fichas se compone de los siguientes campos:
      
<b>Familia botánica:</b> Hace referencia al nombre científico que recibe el taxón que agrupa los géneros que comparten caracteres similares.
 
<b>Nombre vulgar:</b> Hace referencia a los nombres que usualmente utiliza la gente para identificar la planta.
 
<b>Etimología:</b> Breve descripción del significado o el motivo por el cual se confirió el nombre científico a una especie.
 
<b>Características generales:</b> En este apartado se describe los caracteres morfológicos externos más sobresalientes de cada una de las especies, haciendo hincapié sobre aquellos que le sirven al lector para su identificación a campo. 
 
<b>Hábitat:</b> Se indica los sitios más frecuentes donde la especie puede ser encontrada.
 
<b>Estatus:</b> Corresponde a una clasificación de las especies según su origen geográfico. En este sentido las mismas se discriminaron en: nativas, introducidas, naturalizadas, adventicias, cosmopolitas y endémicas, siguiendo la clasificación propuesta por el Catalogo de plantas vasculares de la Flora del Conosur. Las especies nativas son aquellas pertenecientes a la región que comprende Argentina, Uruguay y parte de sur Brasil. 
 
<b>Observaciones:</b> En este apartado se incluye información complementaria que puede ser de interés al lector como ser, usos de las plantas (alimenticios y medicinales), caracteres llamativos y otros datos de interés general
      `,
  },
];

export default function UseModeScreen({ navigation }: any) {
  const theme = ThemedStyles.style;

  return (
    <View style={theme.flexContainer}>
      <Swiper showsButtons={false} loop={false}>
        {slides.map((item, i) => {
          return (
            <ImageBackground
              resizeMode={"repeat"}
              source={require("../assets/images/leaves.png")}
              key={"dk" + i}
              style={styles.slide}
            >
              <Text style={styles.title}>{item.title}</Text>
              <ScrollView style={styles.scroll}>
                <StyledText style={styles.body}>{item.description}</StyledText>
              </ScrollView>
            </ImageBackground>
          );
        })}
      </Swiper>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: "flex-start",
    paddingHorizontal: 25,
  },
  title: {
    color: "grey",
    fontSize: 20,
    margin: 10,
    borderBottomWidth: 1,
    borderBottomColor: "grey",
  },
  scroll: {
    marginBottom: 20,
    maxHeight: "100%",
    height: "100%",
    flex: 1,
    flexGrow: 1,
  },
  body: {
    padding: 10,
    color: "#6e6e6e",
    textAlign: "justify",
  },
});
