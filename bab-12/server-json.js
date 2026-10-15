import { createServer } from "node:http";

const buku = [
  { judul: "Laut Bercerita", tersedia: true },
  { judul: "Bumi Manusia", tersedia: false },
];

const server = createServer((req, res) => {
  if (req.method === "GET" && req.url === "/buku") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(buku));
    return;
  }
  res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
  res.end("Tidak ditemukan\n");
});

server.listen(3001, () => {
  console.log("Server JSON berjalan di http://localhost:3001");
});
