export interface Buku {
  id: number;
  judul: string;
  tahun: number | null;
  tersedia: boolean;
}

export interface BukuBaru {
  judul: string;
  tahun: number | null;
}

export type HasilValidasi =
  | { valid: true; data: BukuBaru }
  | { valid: false; galat: string[] };

export function validasiBuku(input: unknown): HasilValidasi {
  if (typeof input !== "object" || input === null || Array.isArray(input)) {
    return { valid: false, galat: ["Body harus berupa objek JSON."] };
  }
  const obj = input as { judul?: unknown; tahun?: unknown };
  const galat: string[] = [];
  let judul = "";
  let tahun: number | null = null;

  if (typeof obj.judul !== "string" || obj.judul.trim() === "") {
    galat.push("judul wajib diisi dan berupa teks.");
  } else {
    judul = obj.judul.trim();
    if (judul.length > 100) {
      galat.push("judul maksimal 100 karakter.");
    }
  }

  if (obj.tahun !== undefined && obj.tahun !== null) {
    const batasAkhir = new Date().getFullYear();
    if (typeof obj.tahun !== "number" || !Number.isInteger(obj.tahun) || obj.tahun < 1450 || obj.tahun > batasAkhir) {
      galat.push(`tahun harus bilangan bulat antara 1450 dan ${batasAkhir}.`);
    } else {
      tahun = obj.tahun;
    }
  }

  if (galat.length > 0) {
    return { valid: false, galat };
  }
  return { valid: true, data: { judul, tahun } };
}
