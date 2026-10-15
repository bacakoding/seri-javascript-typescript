import { readFile, writeFile, rename } from "node:fs/promises";

const BERKAS = "data.json";

export async function muatBuku() {
  try {
    const teks = await readFile(BERKAS, "utf8");
    return JSON.parse(teks);
  } catch (error) {
    if (error.code === "ENOENT") {
      return [];
    }
    throw error;
  }
}

export async function simpanBuku(buku) {
  const sementara = BERKAS + ".tmp";
  await writeFile(sementara, JSON.stringify(buku, null, 2), "utf8");
  await rename(sementara, BERKAS);
}
