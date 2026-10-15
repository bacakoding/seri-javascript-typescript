import { muatBuku } from "./penyimpanan.js";

const buku = await muatBuku();
console.log("Jumlah buku:", buku.length);
console.log(buku.map((b) => b.judul));
