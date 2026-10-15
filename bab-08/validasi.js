function pinjam(jumlah) {
  if (typeof jumlah !== "number" || Number.isNaN(jumlah)) {
    return "Jumlah harus berupa angka.";
  }
  if (jumlah <= 0) {
    return "Jumlah harus lebih dari 0.";
  }
  return "Berhasil meminjam " + jumlah + " buku.";
}
console.log(pinjam(2));
console.log(pinjam("dua"));
console.log(pinjam(0));
console.log(pinjam(NaN));
