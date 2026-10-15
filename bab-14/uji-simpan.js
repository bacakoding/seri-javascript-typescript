import { muatBuku, simpanBuku } from "./penyimpanan.js";

const buku = await muatBuku();
console.log("Sebelum:", buku.length, "buku");

buku.push({ id: buku.length + 1, judul: "Pulang", tersedia: true });
await simpanBuku(buku);
console.log("Disimpan.");
