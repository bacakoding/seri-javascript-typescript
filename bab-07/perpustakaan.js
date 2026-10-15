const daftar = [
  { judul: "Laut Bercerita", tahun: 2017, tersedia: true },
  { judul: "Bumi Manusia", tahun: 1980, tersedia: false },
  { judul: "Pulang", tahun: 2015, tersedia: true },
];

const judulSaja = daftar.map((buku) => buku.judul);
console.log(judulSaja);

const tersedia = daftar.filter((buku) => buku.tersedia);
console.log(tersedia.length);

const totalTahun = daftar.reduce((jumlah, buku) => jumlah + buku.tahun, 0);
console.log(totalTahun);
