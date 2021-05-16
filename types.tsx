import { createStores } from "./hooks/useStores";

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};

export type MainParamList = {
  HomeScreen: undefined;
  EspeciesListScreen: undefined;
  EspeciesDetailScreen: {
    especie: especie;
  };
  GuidedSearchScreen: {
    isHierba?: boolean;
  };
  UseModeScreen: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type DrawerParamList = {
  Inicio: undefined;
  UseModeScreen: undefined;
  CaracterizationScreen: undefined;
  CreditScreen: undefined;
};

export type especie = {
  libro: "arboles" | "hierbas";
  id: number;
  autor: string;
  caracteristicas: string;
  especie: string;
  estatus: string;
  familia: string;
  habitatcaracteristicas: string;
  nombre1: string;
  nombre2: string;
  nombre3: string;
  nombre4: string;
  nombre5: string;
  nombre6: string;
  nombre7: string;
  observaciones: string;
};

export type TStores = ReturnType<typeof createStores>;
export type Screens =
  | "formaVida"
  | "habitat"
  | "hojas"
  | "hojasSimples"
  | "hojasCompuestas"
  | "colorFlor"
  | "tipoFrutos"
  | "frutosCarnosos"
  | "frutosSecos";

export type GuidedQueryFilters =
  | "formadevida"
  | "habitat"
  | "presenciaespinas"
  | "presencia_latex"
  | "disposicionhoja"
  | "tipohoja"
  | "hojasesil"
  | "formahoja"
  | "bordehoja"
  | "colorflor"
  | "tipofruto"
  | "fruto";

export type ItemType = {
  imageurl?: any;
  title: string;
  checked: boolean;
  formaVida?: boolean;
  onChecked: Function;
  hierba?: boolean;
  isTipo?: boolean;
  soloHierbas?: boolean;
  soloArboles?: boolean;
};

export type SectionType = {
  id: number;
  title: string;
  items: Array<ItemType>;
  soloHierbas?: boolean;
  imageurl?: any;
  col: GuidedQueryFilters;
};
