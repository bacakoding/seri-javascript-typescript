import { createServer } from "node:http";
import { validasiBuku } from "./validasi.js";

const buku = [{ id: 1, judul: "Laut Bercerita", tahun: 2017, tersedia: true }];

function kirimJson(res, status, data) {
  res.writeHead(status, { "Content-Type": "application/json" });
  res.end(JSON.stringify(data));
}

async function bacaBody(req) {
  let teks = "";
  for await (const potongan of req) teks += potongan;
  return teks;
}

const server = createServer(async (req, res) => {
  if (req.method === "GET" && req.url === "/buku") {
    return kirimJson(res, 200, buku);
  }
  if (req.method === "POST" && req.url === "/buku") {
    let masuk;
    try {
      masuk = JSON.parse(await bacaBody(req));
    } catch {
      return kirimJson(res, 400, { pesan: "Body harus berupa JSON yang valid." });
    }
    const hasil = validasiBuku(masuk);
    if (!hasil.valid) {
      return kirimJson(res, 422, { pesan: "Data tidak lolos validasi.", galat: hasil.galat });
    }
    const baru = { id: buku.length + 1, ...hasil.data, tersedia: true };
    buku.push(baru);
    return kirimJson(res, 201, baru);
  }
  return kirimJson(res, 404, { pesan: "Rute tidak ditemukan." });
});

server.listen(3003, () => console.log("Server validasi di http://localhost:3003"));
