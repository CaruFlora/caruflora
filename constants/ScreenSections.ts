import { SectionType } from "../types";


export const navigationScreens = [
{
    screen: 'formaVida',
},
{
    screen: 'habitat',
    soloHierbas: true,
},
{
    screen: 'hojas',
},
{
    screen: (tipo: string) => tipo === 'hojasSimples' ? 'hojasSimples' : 'hojasCompuestas',
},
{
  screen: 'bordehoja',
},
{
    screen: 'colorFlor',
},
{
    screen: 'tipoFrutos',
},
{
    screen: (tipo: string) => tipo === 'frutosCarnosos' ? 'frutosCarnosos' : 'frutosSecos',
    soloHierbas: true,
},
];

export const screens: {[k: string] : Array<SectionType>} = {
  'formaVida': [
    /***********************************************************
     * ******************** FORMA DE VIDA **********************
     ***********************************************************/
    {
      id: 1,
      title: "Forma de vida",
      col: 'formadevida',
      items: [
        {
          imageurl: require("../assets/images/Arbol.png"),
          title: "Árbol",
          checked: false,
          formaVida: true,
          soloArboles: true,
          onChecked: (callback: Function) => callback ? callback() : null,
        },
        {
          imageurl: require("../assets/images/Arbusto.png"),
          title: "Arbusto",
          checked: false,
          formaVida: true,
          soloArboles: true,
          onChecked: (callback: Function) => callback ? callback() : null,
        },
        {
          imageurl: require("../assets/images/Palmera.png"),
          title: "Palmera",
          checked: false,
          formaVida: true,
          soloArboles: true,
          onChecked: (callback: Function) => callback ? callback() : null,
        },
        {
          imageurl: require("../assets/images/Cactus.png"),
          title: "Cactus arborescente",
          checked: false,
          formaVida: true,
          soloArboles: true,
          onChecked: (callback: Function) => callback ? callback() : null,
        },
        {
          imageurl: require("../assets/images/hierba.png"),
          title: "Hierba",
          checked: false,
          formaVida: true,
          hierba: true,
          soloHierbas: true,
          onChecked: (callback: Function) => callback ? callback() : null,
        },
        {
          imageurl: require("../assets/images/subarbusto.png"),
          title: "Sufrútice/Subarbusto",
          checked: false,
          formaVida: true,
          hierba: true,
          soloHierbas: true,
          onChecked: (callback: Function) => callback ? callback() : null,
        },
        {
          imageurl: require("../assets/images/liana.png"),
          title: "Liana/Enredadera",
          checked: false,
          formaVida: true,
          hierba: true,
          soloHierbas: true,
          onChecked: (callback: Function) => callback ? callback() : null,
        },
      ],
    },
    {
      id: 2,
      title: "Presencia de espinas/aguijones?",
      col: 'presenciaespinas',
      items: [
        {
          title: "Si",
          checked: false,
          onChecked: (callback: Function) => callback ? callback() : null,
        },
        {
          title: "No",
          checked: false,
          onChecked: (callback: Function) => callback ? callback() : null,
        },
      ],
    },
    {
      id: 3,
      title: "Presencia de látex?",
      col: 'presencia_latex',
      imageurl: require("../assets/images/latex.png"),
      soloHierbas: true,
      items: [
        {
          title: "Si",
          checked: false,
          onChecked: (callback: Function) => callback ? callback() : null,
        },
        {
          title: "No",
          checked: false,
          onChecked: (callback: Function) => callback ? callback() : null,
        },
      ],
    },
  ],
  'habitat': [
    /***********************************************************
     ************************* HABITAT *************************
     ***********************************************************/
    {
      id: 1,
      title: "Hábitat",
      col: 'habitat',
      items: [
        {
          imageurl: require("../assets/images/terrestre.png"),
          title: "Terrestre",
          checked: false,
          onChecked: (callback: Function) => callback ? callback() : null,
        },
        {
          imageurl: require("../assets/images/acuatica.png"),
          title: "Acuática",
          checked: false,
          onChecked: (callback: Function) => callback ? callback() : null,
        },
        {
          imageurl: require("../assets/images/epifita.png"),
          title: "Epífita",
          checked: false,
          onChecked: (callback: Function) => callback ? callback() : null,
        },
      ],
    },
  ],
  'hojas': [
    /***********************************************************
     * *********************** HOJAS ***************************
     ***********************************************************/
    {
      id: 1,
      title: "Disposición de las Hojas",
      col: 'disposicionhoja',
      items: [
        {
          imageurl: require("../assets/images/alterna.png"),
          title: "Alterna",
          checked: false,
          onChecked: (callback: Function) => callback ? callback() : null,
        },
        {
          imageurl: require("../assets/images/opuesta.png"),
          title: "Opuesta",
          checked: false,
          onChecked: (callback: Function) => callback ? callback() : null,
        },
        {
          imageurl: require("../assets/images/verticiladas.png"),
          title: "Verticilada",
          checked: false,
          onChecked: (callback: Function) => callback ? callback() : null,
        },
        {
          imageurl: require("../assets/images/roseta.png"),
          soloHierbas: true,
          title: "Roseta basal",
          checked: false,
          onChecked: (callback: Function) => callback ? callback() : null,
        },
      ],
    },
    {
      id: 2,
      title: "Tipo de hoja",
      col: 'tipohoja',
      items: [
        {
          imageurl: require("../assets/images/Simple.png"),
          title: "Simple",
          checked: false,
          onChecked: (callback: Function) => callback ? callback() : null,
          isTipo: true,
        },
        {
          imageurl: require("../assets/images/Compuesta.png"),
          title: "Compuesta",
          checked: false,
          onChecked: (callback: Function) => callback ? callback() : null,
          isTipo: true,
        },
      ],
    },
    {
      id: 3,
      title: "Presencia o Ausencia de pecíolo?",
      col: 'hojasesil',
      soloHierbas: true,
      items: [
        {
          imageurl: require("../assets/images/peciolada.png"),
          title: "Peciolada",
          checked: false,
          onChecked: (callback: Function) => callback ? callback() : null,
        },
        {
          imageurl: require("../assets/images/sesil.png"),
          title: "Sésil",
          checked: false,
          onChecked: (callback: Function) => callback ? callback() : null,
        },
      ],
    },
  ],
  'hojasSimples': [
    /***********************************************************
     * ******************** HOJAS SIMPLES **********************
     ***********************************************************/
    {
      id: 1,
      title: "Forma de hojas simples",
      col: 'formahoja',
      items: [
        {
          imageurl: require("../assets/images/Cordada.png"),
          title: "Cordada",
          soloHierbas: true,
          checked: false,
          onChecked: (callback: Function) => callback ? callback() : null,
        },
        {
          imageurl: require("../assets/images/eliptica.png"),
          title: "Elíptica",
          checked: false,
          onChecked: (callback: Function) => callback ? callback() : null,
        },
        {
          imageurl: require("../assets/images/espatulada.png"),
          title: "Espatulada",
          checked: false,
          onChecked: (callback: Function) => callback ? callback() : null,
        },
        {
          imageurl: require("../assets/images/lineal.png"),
          title: "Lineal",
          checked: false,
          onChecked: (callback: Function) => callback ? callback() : null,
        },
        {
          imageurl: require("../assets/images/Reniforme.png"),
          soloHierbas: true,
          title: "Reniforme",
          checked: false,
          onChecked: (callback: Function) => callback ? callback() : null,
        },
        {
          imageurl: require("../assets/images/ovalada.png"),
          title: "Ovalada",
          checked: false,
          onChecked: (callback: Function) => callback ? callback() : null,
        },
        {
          imageurl: require("../assets/images/palmatilobada.png"),
          title: "Palmatilobada",
          checked: false,
          onChecked: (callback: Function) => callback ? callback() : null,
        },
        {
          imageurl: require("../assets/images/otra.png"),
          title: "Otra",
          checked: false,
          onChecked: (callback: Function) => callback ? callback() : null,
        },
      ],
    },
  ],
  'hojasCompuestas': [
    /***********************************************************
     ******************** HOJAS Comnpuestas ********************
     ***********************************************************/
    {
      id: 1,
      title: "Forma de hojas compuestas",
      col: 'formahoja',
      items: [
        {
          imageurl: require("../assets/images/Imparipinnada.png"),
          title: "Imparipinnada",
          checked: false,
          onChecked: (callback: Function) => callback ? callback() : null,
        },
        {
          imageurl: require("../assets/images/Paripinnada.png"),
          title: "Paripinnada",
          checked: false,
          onChecked: (callback: Function) => callback ? callback() : null,
        },
        {
          imageurl: require("../assets/images/Pinnaticompuesta.png"),
          title: "Pinnaticompuesta",
          soloHierbas: true,
          checked: false,
          onChecked: (callback: Function) => callback ? callback() : null,
        },
        {
          imageurl: require("../assets/images/Trifoliada.png"),
          title: "Trifoliada",
          checked: false,
          onChecked: (callback: Function) => callback ? callback() : null,
        },
        {
          imageurl: require("../assets/images/palmaticompuesta.png"),
          title: "Palmaticompuesta",
          soloHierbas: true,
          checked: false,
          onChecked: (callback: Function) => callback ? callback() : null,
        },
        {
          imageurl: require("../assets/images/Bipinnada.png"),
          title: "Bipinnada",
          checked: false,
          onChecked: (callback: Function) => callback ? callback() : null,
        },
        {
          imageurl: require("../assets/images/otra.png"),
          title: "Otra",
          checked: false,
          onChecked: (callback: Function) => callback ? callback() : null,
        },
      ],
    },
  ],
  'bordehoja': [
    /***********************************************************
     * ******************** HOJAS SIMPLES **********************
     ***********************************************************/
    {
      id: 1,
      title: "Borde de hoja",
      col: 'bordehoja',
      items: [
        {
          imageurl: require("../assets/images/Entero.png"),
          title: "Entero",
          soloHierbas: false,
          checked: false,
          onChecked: (callback: Function) => callback ? callback() : null,
        },
        {
          imageurl: require("../assets/images/Dentado.png"),
          title: "Dentado",
          checked: false,
          onChecked: (callback: Function) => callback ? callback() : null,
        },
        {
          imageurl: require("../assets/images/Crenado.png"),
          title: "Crenado",
          checked: false,
          onChecked: (callback: Function) => callback ? callback() : null,
        },
      ],
    },
  ],
  'colorFlor': [
    /***********************************************************
     ************************ Color Flor ***********************
     ***********************************************************/
    {
      id: 1,
      title: "Color de la flor",
      col: 'colorflor',
      items: [
        {
          imageurl: require("../assets/images/Blanco_a_verde.png"),
          title: "Blanco a verdoso",
          checked: false,
          onChecked: (callback: Function) => callback ? callback() : null,
        },
        {
          imageurl: require("../assets/images/Amarillo_a_anaranjado.png"),
          title: "Amarillo a anaranjado",
          checked: false,
          onChecked: (callback: Function) => callback ? callback() : null,
        },
        {
          imageurl: require("../assets/images/Azul_a_purpura.png"),
          title: "Azúl a púrpura",
          checked: false,
          onChecked: (callback: Function) => callback ? callback() : null,
        },
        {
          imageurl: require("../assets/images/Rojo_a_rosado.png"),
          title: "Rojo a rosado",
          checked: false,
          onChecked: (callback: Function) => callback ? callback() : null,
        },
        {
          imageurl: require("../assets/images/Nolose.png"),
          title: "No lo sé",
          checked: false,
          onChecked: (callback: Function) => callback ? callback() : null,
        },
      ],
    },
  ],
  'tipoFrutos': [
    /***********************************************************
     ********************** Tipo Frutos ************************
     ***********************************************************/
    {
      id: 1,
      title: "Tipo de frutos",
      col: 'tipofruto',
      items: [
        {
          imageurl: require("../assets/images/Carnoso.png"),
          title: "Carnoso",
          checked: false,
          onChecked: (callback: Function) => callback ? callback() : null,
          isTipo: true,
        },
        {
          imageurl: require("../assets/images/Seco.png"),
          title: "Seco",
          checked: false,
          onChecked: (callback: Function) => callback ? callback() : null,
          isTipo: true,
        },
        {
          imageurl: require("../assets/images/Nolose.png"),
          title: "No lo sé",
          checked: false,
          onChecked: (callback: Function) => callback ? callback() : null,
          isTipo: true,
        },
      ],
    },
  ],
  'frutosCarnosos': [
    /***********************************************************
     ******************** Frutos Carnosos **********************
     ***********************************************************/
    {
      id: 1,
      title: "Frutos carnosos",
      col: 'fruto',
      items: [
        {
          imageurl: require("../assets/images/Carnoso.png"),
          title: "Baya",
          checked: false,
          onChecked: (callback: Function) => callback ? callback() : null,
        },
        {
          imageurl: require("../assets/images/Seco.png"),
          title: "Drupa",
          checked: false,
          onChecked: (callback: Function) => callback ? callback() : null,
        },
        {
          imageurl: require("../assets/images/Nolose.png"),
          title: "No lo sé",
          checked: false,
          onChecked: (callback: Function) => callback ? callback() : null,
        },
        {
          imageurl: require("../assets/images/otra.png"),
          title: "Otra",
          checked: false,
          onChecked: (callback: Function) => callback ? callback() : null,
        },
      ],
    },
  ],
  'frutosSecos': [
    /***********************************************************
     ********************* Frutos Secos ************************
     ***********************************************************/
    {
      id: 1,
      title: "Frutos secos",
      col: 'fruto',
      items: [
        {
          imageurl: require("../assets/images/aquenio.png"),
          title: "Aquenio/Cipsela",
          checked: false,
          onChecked: (callback: Function) => callback ? callback() : null,
        },
        {
          imageurl: require("../assets/images/capsula.png"),
          title: "Cápsula",
          checked: false,
          onChecked: (callback: Function) => callback ? callback() : null,
        },
        {
          imageurl: require("../assets/images/legumbre.png"),
          title: "Legumbre",
          checked: false,
          onChecked: (callback: Function) => callback ? callback() : null,
        },
        {
          imageurl: require("../assets/images/Nolose.png"),
          title: "No lo sé",
          checked: false,
          onChecked: (callback: Function) => callback ? callback() : null,
        },
        {
          imageurl: require("../assets/images/otra.png"),
          title: "Otra",
          checked: false,
          onChecked: (callback: Function) => callback ? callback() : null,
        },
      ],
    },
  ],
};
