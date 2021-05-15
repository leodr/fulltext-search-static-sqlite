import { useEffect, useState } from "react";
import { createDbWorker, SqliteWorker } from "sql.js-httpvfs";

export default function Home() {
  const [worker, setWorker] = useState<SqliteWorker>();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState();

  useEffect(() => {
    createDbWorker(
      [
        {
          from: "inline",
          config: {
            serverMode: "full",
            url: "/database.db",
            requestChunkSize: 4096,
          },
        },
      ],
      "/sqlite.worker.js",
      "/sql-wasm.wasm"
    ).then(setWorker);
  }, []);

  useEffect(() => {
    let cancel = false;

    if (searchQuery && worker) {
      worker.db
        .query(`SELECT * FROM Product WHERE name LIKE "%${searchQuery}%"`)
        .then((result) => {
          if (!cancel) {
            setSearchResults(result);
          }
        });
    }

    return () => {
      cancel = true;
    };
  }, [searchQuery, worker]);

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <pre>{JSON.stringify(searchResults || null, null, 2)}</pre>
    </div>
  );
}
