import * as SQLite from "expo-sqlite";
import { GuidedQueryFilters } from "../types";

const otra = 'Otra';
const noSe = 'No lo sé';
class QueryManager {
  private db = SQLite.openDatabase("caruflora.db");
  public guidedQueryFilter: Map<GuidedQueryFilters, string> = new Map([
    ["formadevida", ""],
    ["habitat", ""],
    ["presenciaespinas", ""],
    ["presencia_latex", ""],
    ["disposicionhoja", ""],
    ["tipohoja", ""],
    ["hojasesil", ""],
    ["formahoja", ""],
    ["bordehoja", ""],
    ["colorflor", ""],
    ["tipofruto", ""],
    ["fruto", ""],
  ]);

  public getAll(callback: Function, offset: number, limit: number) {
    this.db.transaction((tx) => {
      tx.executeSql(
        `select * from (
          select 'arboles' as libro, _id - 1 as id, especie, autor, nombre1, nombre2, nombre3, nombre4, nombre5, nombre6, nombre7, familia, caracteristicas, habitatcaracteristicas, estatus, observaciones
          from arboles
          UNION
          select 'hierbas' as libro, _id - 1 as id, especie, autor, nombre1, nombre2, nombre3, nombre4, nombre5, nombre6, nombre7, familia, caracteristicas, habitatcaracteristicas, estatus, observaciones
          from hierbas
        )
        order by especie
        limit ?, ?`,
        [offset, limit],
        (_, { rows }) => {
          callback(rows._array);
        },
        (_, error) => {
          console.log(error);
          return false;
        }
      );
    });
  }

  public getByNombre(
    search: string,
    callback: Function,
    offset: number,
    limit: number
  ) {
    this.db.transaction((tx) => {
      tx.executeSql(
        `select * from (
          select 'arboles' as libro, _id - 1 as id, especie, autor, nombre1, nombre2, nombre3, nombre4, nombre5, nombre6, nombre7, familia, caracteristicas, habitatcaracteristicas, estatus, observaciones
          from arboles
          UNION
          select 'hierbas' as libro, _id - 1 as id, especie, autor, nombre1, nombre2, nombre3, nombre4, nombre5, nombre6, nombre7, familia, caracteristicas, habitatcaracteristicas, estatus, observaciones
          from hierbas
        )
        where nombre1 like '${search}%' 
          or nombre2 like '${search}%' 
          or nombre3 like '${search}%' 
          or nombre4 like '${search}%' 
          or nombre5 like '${search}%' 
          or nombre6 like '${search}%' 
          or nombre7 like '${search}%'
        order by especie
        limit ?, ?`,
        [offset, limit],
        (_, { rows }) => {
          callback(rows._array);
        },
        (_, error) => {
          console.log(error);
          return false;
        }
      );
    });
  }

  public getByGuidedQuery(
    col: GuidedQueryFilters,
    value: string,
    callback: Function,
    isHierba: boolean
  ) {
    this.guidedQueryFilter.set(col, value);
    let where = "";
    this.guidedQueryFilter.forEach((queryFilterValue, col) => {
      if (queryFilterValue !== "" && queryFilterValue !== noSe) {
        const connector = where === "" ? "" : "and ";
        let filter = `${col} = '${queryFilterValue}'`;
        if (col === 'formadevida' && queryFilterValue === 'Liana/Enredadera') {
          filter = `${col} = 'Liana'`
        }
        if (isHierba) {
          switch (col) {
            case "habitat":
              filter = `(habitat1 = '${queryFilterValue}' or habitat2 = '${queryFilterValue}')`;
              break;
            case "disposicionhoja":
              filter = `(disposicionhoja = '${queryFilterValue}' or disposicionhoja2 = '${queryFilterValue}')`;
              break;
            case "formahoja":
              filter = `(formahoja = '${queryFilterValue}' or formahoja2 = '${queryFilterValue}')`;
              break;
          }
        }
        where = `${where}${connector}${filter} `;
      }
    });
    const from = isHierba ? "hierbas" : "arboles";
    const select = `select '${from}' as libro, _id - 1 as id, especie, autor, nombre1, nombre2, nombre3, nombre4, nombre5, nombre6, nombre7, familia, caracteristicas, habitatcaracteristicas, estatus, observaciones
    from ${from}
    where ${where}
    order by especie`;

    console.log("SELECT", select);

    this.db.transaction((tx) => {
      tx.executeSql(
        select,
        undefined,
        (_, { rows }) => {
          callback(rows._array);
        },
        (_, error) => {
          console.log(error);
          return false;
        }
      );
    });
  }
}

export default new QueryManager();
