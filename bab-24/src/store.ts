import { readFile, writeFile, rename } from "node:fs/promises";
import type { Buku } from "./buku.js";

export interface Penyimpan {
  muat(): Promise<Buku[]>;
  simpan(buku: Buku[]): Promise<void>;
}

export function berkasJson(path: string): Penyimpan {
  return {
    async muat(): Promise<Buku[]> {
      try {
        return JSON.parse(await readFile(path, "utf8")) as Buku[];
      } catch (error) {
        if ((error as { code?: string }).code === "ENOENT") {
          return [];
        }
        throw error;
      }
    },
    async simpan(buku: Buku[]): Promise<void> {
      const sementara = path + ".tmp";
      await writeFile(sementara, JSON.stringify(buku, null, 2), "utf8");
      await rename(sementara, path);
    },
  };
}
