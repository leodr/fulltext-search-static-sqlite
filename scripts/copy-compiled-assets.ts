import * as fs from "fs";
import * as path from "path";

fs.copyFile(
  path.resolve("node_modules", "sql.js-httpvfs/dist/sqlite.worker.js"),
  path.resolve("public", "sqlite.worker.js"),
  (err) => {
    if (err) throw err;
    console.log("Compiled worker successfully copied.");
  }
);

fs.copyFile(
  path.resolve("node_modules", "sql.js-httpvfs/dist/sql-wasm.wasm"),
  path.resolve("public", "sql-wasm.wasm"),
  (err) => {
    if (err) throw err;
    console.log("Compiled wasm successfully copied.");
  }
);
