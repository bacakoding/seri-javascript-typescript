const buku = {
  judul: "Laut Bercerita",
  penulis: "Leila S. Chudori",
  tahun: 2017,
  tersedia: true,
};
console.log(buku.judul);
console.log(buku["penulis"]);
buku.tersedia = false;
console.log(buku.tersedia);
console.log(Object.keys(buku));
