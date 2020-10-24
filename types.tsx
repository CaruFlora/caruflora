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
}

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type DrawerParamList = {
  Main: undefined;
  TabTwo: undefined;
}

export type especie = {
  libro: 'arboles' | 'hierbas';
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