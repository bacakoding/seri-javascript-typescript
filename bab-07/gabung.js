const daftar = [
  { judul: "Laut Bercerita", tersedia: true },
  { judul: "Bumi Manusia", tersedia: false },
];
const hasil = daftar
  .filter((buku) => buku.tersedia)
  .map((buku) => buku.judul.toUpperCase());
console.log(hasil);
