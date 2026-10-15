function tampilkanJumlah(nilai: string | number): string {
  if (typeof nilai === "string") {
    return "Teks: " + nilai.toUpperCase();
  }
  return "Angka: " + nilai.toFixed(2);
}

console.log(tampilkanJumlah("lima"));
console.log(tampilkanJumlah(5));
