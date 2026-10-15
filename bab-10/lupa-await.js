function tunggu(ms) {
  return new Promise((selesai) => setTimeout(selesai, ms));
}
async function ambilBuku() {
  await tunggu(100);
  return { judul: "Pulang" };
}
const buku = ambilBuku();
console.log(buku);
console.log(buku.judul);
