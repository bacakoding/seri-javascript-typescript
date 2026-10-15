import { writeFile, readFile } from "node:fs/promises";

const isi = "Laut Bercerita\nBumi Manusia\nPulang\n";
await writeFile("daftar-buku.txt", isi, "utf8");
console.log("Berkas ditulis.");

const dibaca = await readFile("daftar-buku.txt", "utf8");
console.log("Isi berkas:");
console.log(dibaca);
