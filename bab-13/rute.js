import { createServer } from "node:http";

const buku = [
  { id: 1, judul: "Laut Bercerita", tersedia: true },
  { id: 2, judul: "Bumi Manusia", tersedia: false },
];

function kirimJson(res, status, data) {
  res.writeHead(status, { "Content-Type": "application/json" });
  res.end(JSON.stringify(data));
}

async function bacaBody(req) {
  let teks = "";
  for await (const potongan of req) {
    teks += potongan;
  }
  return teks;
}

const server = createServer(async (req, res) => {
  if (req.method === "GET" && req.url === "/buku") {
    kirimJson(res, 200, buku);
    return;
  }

  if (req.method === "POST" && req.url === "/buku") {
    let data;
    try {
      data = JSON.parse(await bacaBody(req));
    } catch {
      kirimJson(res, 400, { pesan: "Body harus berupa JSON yang valid." });
      return;
    }
    if (typeof data.judul !== "string" || data.judul.trim() === "") {
      kirimJson(res, 400, { pesan: "Judul wajib diisi." });
      return;
    }
    const baru = { id: buku.length + 1, judul: data.judul.trim(), tersedia: true };
    buku.push(baru);
    kirimJson(res, 201, baru);
    return;
  }

  kirimJson(res, 404, { pesan: "Rute tidak ditemukan." });
});

server.listen(3002, () => {
  console.log("Server rute berjalan di http://localhost:3002");
});
