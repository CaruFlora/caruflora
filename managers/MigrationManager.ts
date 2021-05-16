import AsyncStorage from "@react-native-community/async-storage";
import * as SQLite from "expo-sqlite";
import {
  db_migration,
  update1,
  update2,
  update3,
} from "../constants/migration";

type migrationResult = "true" | "false";

class MigrationManager {
  private db = SQLite.openDatabase("caruflora.db");

  async check() {
    const migrationResult = <migrationResult | null>(
      await this.getMigrationResult()
    );

    if ([null, "false"].includes(migrationResult)) {
      this.dropData();
    }
  }

  private async runUpdate1() {
    const updates: Array<string> = []
    for (let index = 0; index < update1.length; index++) {
      updates.push(`update hierbas set caracteristicas = '${
        update1[index]
      }' where _id = ${index + 1};`);
    }
    this.db.transaction(
      (tx) => {
        updates.forEach((sql) => {
          tx.executeSql(sql);
        });
      },
      async (err) => {
        console.error("update 1 failed");
        this.setMigrationResult("false");
      },
      async () => {
        console.info("runed update 1");
        this.runUpdate2();
      }
    );
  }

  private async runUpdate2() {
    const updates: Array<string> = []
    for (let index = 0; index < update2.length; index++) {
      updates.push(`update hierbas set observaciones = '${
        update2[index]
      }' where _id = ${index + 1};`);
    }
    this.db.transaction(
      (tx) => {
        updates.forEach((sql) => {
          tx.executeSql(sql);
        });
      },
      async (err) => {
        console.error("update 2 failed");
        this.setMigrationResult("false");
      },
      async () => {
        console.info("runed update 2");
        this.runUpdate3();
      }
    );
  }

  private async runUpdate3() {
    const updates: Array<string> = []
    for (let index = 0; index < update3.length; index++) {
      updates.push(`update hierbas set habitatcaracteristicas = '${
        update3[index]
      }' where _id = ${index + 1};`);
    }
    this.db.transaction(
      (tx) => {
        updates.forEach((sql) => {
          tx.executeSql(sql);
        });
      },
      async (err) => {
        console.error("update 3 failed");
        this.setMigrationResult("false");
      },
      async () => {
        console.info("runed update 3");
        await this.setMigrationResult("true");
      }
    );
  }

  private async runMigration() {
    this.db.transaction(
      (tx) => {
        db_migration.forEach((sql) => {
          tx.executeSql(sql);
        });
      },
      async (err) => {
        console.error("MIGRATION TRANSACTION FAILED");
        await this.setMigrationResult("false");
      },
      async () => {
        console.info("MIGRATION TRANSACTION SUCCESSFUL");
        this.runUpdate1();
      }
    );
  }

  private async dropData() {
    this.db.transaction((tx) => {
      tx.executeSql(
        "drop table IF EXISTS arboles",
        [],
        () => {
          console.info("droped table arboles");
          this.runMigration();
        },
        () => {
          console.error("failed to drop arboles");
          return false;
        }
      );
    });
  }

  private async setMigrationResult(res: migrationResult) {
    await AsyncStorage.setItem("@caruflora_transaction_successful", res);
  }

  private async getMigrationResult() {
    return await AsyncStorage.getItem("@caruflora_transaction_successful");
  }
}

export default new MigrationManager();
