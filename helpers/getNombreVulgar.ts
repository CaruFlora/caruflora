import { especie } from "../types";

export const getNombreVulgar = (especie: especie) => {
  if (especie.libro === "arboles") {
    return `${especie.nombre2}${especie.nombre3 ? ", " + especie.nombre3 : ""}${
      especie.nombre4 ? ", " + especie.nombre4 : ""
    }${especie.nombre5 ? ", " + especie.nombre5 : ""}${
      especie.nombre6 ? ", " + especie.nombre6 : ""
    } ${especie.nombre7 ? ", " + especie.nombre7 : ""}`;
  } else {
    return `${especie.nombre1}${especie.nombre2 ? ", " + especie.nombre2 : ""}${
      especie.nombre3 ? ", " + especie.nombre3 : ""
    }${especie.nombre4 ? ", " + especie.nombre4 : ""}${
      especie.nombre5 ? ", " + especie.nombre5 : ""
    }${especie.nombre6 ? ", " + especie.nombre6 : ""} ${
      especie.nombre7 ? ", " + especie.nombre7 : ""
    }`;
  }
};
