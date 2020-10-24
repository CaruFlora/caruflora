import AsyncStorage from "@react-native-community/async-storage";
import * as SQLite from "expo-sqlite";
import { db_migration } from "../constants/migration";

type migrationResult = "true" | "false";

class MigrationManager {
  private db = SQLite.openDatabase("caruflora.db");

  async check() {
    const migrationResult = <migrationResult | null>(
      await this.getMigrationResult()
    );

    if ([null, 'false'].includes(migrationResult)) {
      this.dropData();
    }
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
        await this.setMigrationResult("true");
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
