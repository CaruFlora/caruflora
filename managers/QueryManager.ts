import * as SQLite from "expo-sqlite";

class QueryManager {
  private db = SQLite.openDatabase("caruflora.db");

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
        },
      );
    });
  }

  public getByNombre(search: string, callback: Function, offset: number, limit: number) {
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
        },
      );
    });
  }
}

export default new QueryManager();
