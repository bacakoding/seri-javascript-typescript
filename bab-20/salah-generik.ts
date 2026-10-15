function ambilPertama<T>(daftar: T[]): T {
  return daftar[0];
}
const hasil: number = ambilPertama(["satu", "dua"]);
console.log(hasil);
