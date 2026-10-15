import { appendFile, readFile } from "node:fs/promises";

await appendFile("daftar-buku.txt", "Hujan di Bulan Juni\n", "utf8");
const dibaca = await readFile("daftar-buku.txt", "utf8");
console.log("Jumlah baris:", dibaca.trim().split("\n").length);
