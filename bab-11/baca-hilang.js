import { readFile } from "node:fs/promises";

try {
  const isi = await readFile("tidak-ada.txt", "utf8");
  console.log(isi);
} catch (error) {
  console.log("Gagal membaca:", error.code);
  console.log(error.message);
}
