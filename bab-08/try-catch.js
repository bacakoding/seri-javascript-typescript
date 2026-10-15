function bacaJumlah(teks) {
  const angka = JSON.parse(teks);
  return angka * 2;
}

try {
  console.log(bacaJumlah("5"));
  console.log(bacaJumlah("bukan angka"));
} catch (error) {
  console.log("Terjadi kesalahan:", error.message);
}
console.log("Program tetap berjalan.");
