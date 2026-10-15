export interface Konfigurasi {
  port: number;
  namaLayanan: string;
}

export function bacaKonfigurasi(env: NodeJS.ProcessEnv): Konfigurasi {
  const port = Number(env.PORT ?? "3000");
  if (!Number.isInteger(port) || port < 1 || port > 65535) {
    throw new Error(`PORT tidak valid: "${env.PORT}". Harus angka 1 sampai 65535.`);
  }
  return {
    port,
    namaLayanan: env.NAMA_LAYANAN ?? "perpustakaan-kecil",
  };
}
