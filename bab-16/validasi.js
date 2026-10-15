export function validasiBuku(data) {
  const galat = [];
  if (typeof data !== "object" || data === null || Array.isArray(data)) {
    return { valid: false, galat: ["Body harus berupa objek JSON."] };
  }
  if (typeof data.judul !== "string" || data.judul.trim() === "") {
    galat.push("judul wajib diisi dan berupa teks.");
  } else if (data.judul.trim().length > 100) {
    galat.push("judul maksimal 100 karakter.");
  }
  if (data.tahun !== undefined) {
    if (!Number.isInteger(data.tahun) || data.tahun < 1450 || data.tahun > new Date().getFullYear()) {
      galat.push("tahun harus bilangan bulat yang masuk akal.");
    }
  }
  return galat.length === 0
    ? { valid: true, data: { judul: data.judul.trim(), tahun: data.tahun ?? null } }
    : { valid: false, galat };
}
