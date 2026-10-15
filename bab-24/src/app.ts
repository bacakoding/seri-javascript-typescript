import { createServer, type IncomingMessage, type Server, type ServerResponse } from "node:http";
import { validasiBuku, type Buku } from "./buku.js";
import type { Penyimpan } from "./store.js";

function kirim(res: ServerResponse, status: number, data: unknown): void {
  res.writeHead(status, { "Content-Type": "application/json; charset=utf-8" });
  res.end(JSON.stringify(data));
}

async function bacaBody(req: IncomingMessage): Promise<string> {
  let teks = "";
  for await (const potongan of req) {
    teks += potongan;
  }
  return teks;
}

async function tangani(req: IncomingMessage, res: ServerResponse, penyimpan: Penyimpan): Promise<void> {
  const { pathname } = new URL(req.url ?? "/", "http://localhost");

  if (req.method === "GET" && pathname === "/buku") {
    kirim(res, 200, await penyimpan.muat());
    return;
  }

  const cocok = /^\/buku\/(\d+)$/.exec(pathname);
  if (req.method === "GET" && cocok) {
    const id = Number(cocok[1]);
    const buku = (await penyimpan.muat()).find((b) => b.id === id);
    if (!buku) {
      kirim(res, 404, { pesan: "Buku tidak ditemukan." });
      return;
    }
    kirim(res, 200, buku);
    return;
  }

  if (req.method === "POST" && pathname === "/buku") {
    let masuk: unknown;
    try {
      masuk = JSON.parse(await bacaBody(req));
    } catch {
      kirim(res, 400, { pesan: "Body harus berupa JSON yang valid." });
      return;
    }
    const hasil = validasiBuku(masuk);
    if (!hasil.valid) {
      kirim(res, 422, { pesan: "Data tidak lolos validasi.", galat: hasil.galat });
      return;
    }
    const daftar = await penyimpan.muat();
    const id = daftar.reduce((maks, b) => Math.max(maks, b.id), 0) + 1;
    const baru: Buku = { id, ...hasil.data, tersedia: true };
    await penyimpan.simpan([...daftar, baru]);
    kirim(res, 201, baru);
    return;
  }

  kirim(res, 404, { pesan: "Rute tidak ditemukan." });
}

export function buatServer(penyimpan: Penyimpan): Server {
  return createServer(async (req, res) => {
    try {
      await tangani(req, res, penyimpan);
    } catch {
      kirim(res, 500, { pesan: "Terjadi kesalahan di server." });
    }
  });
}
