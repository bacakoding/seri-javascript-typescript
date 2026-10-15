import { readFile, writeFile, rename } from "node:fs/promises";
export function berkasJson(path) {
    return {
        async muat() {
            try {
                return JSON.parse(await readFile(path, "utf8"));
            }
            catch (error) {
                if (error.code === "ENOENT") {
                    return [];
                }
                throw error;
            }
        },
        async simpan(buku) {
            const sementara = path + ".tmp";
            await writeFile(sementara, JSON.stringify(buku, null, 2), "utf8");
            await rename(sementara, path);
        },
    };
}
