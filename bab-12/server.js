import { createServer } from "node:http";

const server = createServer((req, res) => {
  console.log("Permintaan:", req.method, req.url);
  res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
  res.end("Halo dari Perpustakaan Kecil!\n");
});

server.listen(3000, () => {
  console.log("Server berjalan di http://localhost:3000");
});
