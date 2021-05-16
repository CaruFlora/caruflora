import * as React from "react";
import { ImageBackground, ScrollView, StyleSheet, View } from "react-native";
import ThemedStyles from "../styles/ThemedStyles";
import { Text } from "react-native-elements";
import Swiper from "react-native-swiper";
import StyledText from "react-native-styled-text";

const slides: any[] = [
  {
    title: "CARACTERIZACION DEL AREA",
    description: `El bajo río Uruguay está modelado por el clima, la geomorfología y la vegetación de la cuenca que es el resultado de su evolución, representada por sus paleorelieves y los diversos climas que actuaron desde temprano en su historia geológica. Se sabe que, con pocas variaciones, las características climático/ambientales actuales se comenzaron a estabilizar solo hace unos 4000 años.`,
  },
  {
    title: "Clima",
    description: `El río Uruguay en su tramo bajo, se encuentra ubicado dentro de los climas de Dominio Atlántico, que a su vez se diferencian en distintos tipos debido a la existencia de un gradiente térmico que acusa las variaciones latitudinales de la radiación solar, combinadas con diferencias en las precipitaciones.
      Básicamente presenta dos regiones climáticas de límite difuso; una porción al norte del eje Concordia-Salto que corresponde al clima subtropical húmedo de llanura y otra al sur de esa latitud con un clima templado húmedo. 
      Las temperaturas promedios anuales se ubiquen en el rango de templadas, entre 17º y 20º C°. Las intrusiones de aire polar en invierno, provocan heladas en algunos casos fuertes. En verano las temperaturas más altas llegan a ubicarse entre 34º y 38º. La cantidad de milímetros precipitados oscila entre los 1100 y 1300 mm anuales en años normales; estos valores cambian cuando ocurren los fenómenos de la Niña o el Niño. La distribución de las precipitaciones es algo regular a lo largo del año, con un leve incremento en el período primavero-estival.        
      `,
  },
  {
    title: "Relieve y suelos",
    description: `El relieve que predomina en la región es de llanura levemente ondulada, con una pendiente de dirección norte-sur. Las mayores alturas del terreno superan levemente los 100 m sobre el nivel del mar. Geomorfológica el valle del río Uruguay puede presentar afloramientos rocosos, más frecuentes en la República Oriental del Uruguay que en la Argentina.
      El río Uruguay, como principal modelador de los suelos asociados a su cauce (actual y pasado), es quien condiciona por posición, altura y distancia, el tipo de suelos que se pueden encontrar en la región. Se reconocen al menos tres grandes grupos de suelos: Vertisoles, Molisoles y Entisoles. 
      Los Entisoles son los suelos más característicos del área de estudio y se encuentran íntimamente asociados al río Uruguay. Son de textura areno franco arenosa, sin mayor diferenciación de horizontes; localmente denominados arenosos, pedregosos. Están desarrollados sobre sedimentos arcillosos o lacustres, mezclados y redepositados con materiales arenosos, sobre los cuales yace una capa de materiales arenosos (aportados por el río) más recientes y de poco espesor. 
      Los Molisoles son suelos pardos oscuros que se encuentran más alejados del eje del río. Con horizontes superficiales limosos, bien estructurados, provistos de materia orgánica y fácil de trabajar. Abajo poseen horizontes subsuperficiales densos, arcillosos, poco permeables y penetrables. 
      Por último, los Vertisoles se distribuyen en las porciones más alejadas del cauce del río Uruguay. Están desarrollados sobre materiales lacustres, con un alto porcentaje de arcilla y presencia de carbonato; se encuentran en un paisaje de peniplanicie suavemente ondulada. Son suelos de color oscuro, forman grietas profundas y anchas en la época seca. Presentan una baja capacidad de infiltración, lo cual los hace vulnerable a la erosión.        
      `,
  },
  {
    title: "Vegetación",
    description: `La vegetación actual de la zona es el resultado del aporte de diferentes corrientes florísticas, la Chaqueña que contribuye con especies xerófilas a semixerófilas desde el oeste, la Pampásica que aporta elementos templados desde el sur y la subtropical que los aporta desde la Mata Atlántica brasileña.
      La vegetación que acompaña al río Uruguay y sus afluentes, corresponde al denominado bosque en galería, bosque ribereño o selva en galería. Dicho bosque está constituido por diversos elementos florísticos correspondientes a regiones más cálidas, evidenciados por la gran diversidad de Mirtáceas. A medida que desciende hacia el estuario del Plata, la riqueza florística muestra una reducción en su diversidad específica.
      Los bosques en galerías del río Uruguay son ecosistemas dinámicos dispuestos sobre la planicie de inundación del mencionado río, donde reciben el aporte permanente de propágulos y semillas donde, el pulso de inundación, es la característica ecológica más importante para mantener su dinámica ecológica. 
      Existe una zonación en relación a la distribución de las especies según sus requerimientos hídricos, diferenciándose una zona cercana al agua ocupada por especies como: sauce, palo amarillo, sarandí negro, colorado y blanco, mata ojo, acacia negra y laurel de río, entre otros; una zona intermedia, con especies mesófilas que se presentan sobre suelos húmedos pero no en contacto directo con el agua como: guayabo, pitanga, viraró, arrayan, congorosa, envira, chal chal, azota caballo, palo cruz, pindó, mora, etc.; y por ultimo una zona más alejada del curso de agua, y expuesta a una mayor luminosidad, con suelos bien aireados denominada semixerófila, entre los que vamos a encontrar : espinillo, molle, tala, cedrón, sombra de toro, cina cina, ligustro, etc. 
      En tanto, en las costas altas, se destacan otras comunidades de distribución más restringida como son: el Bosque parque y los Palmares de yatay. El bosque parque se caracteriza por la presencia de especies arbóreas y arbustivas espinosas, xerófilas a semixerófilas, que se desarrollan de modo disperso con especies como: algarrobo negro, ñandubay, quebracho blanco, espinillo, talilla, carne gorda, manati, etc. Los palmares de Yatay, localmente importantes, constituyen una fisonomía característica por la alta densidad de palmeras.        
      `,
  },
];

export default function CaracterizationScreen({ navigation }: any) {
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
