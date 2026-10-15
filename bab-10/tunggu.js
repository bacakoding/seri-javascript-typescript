function tunggu(ms) {
  return new Promise((selesai) => setTimeout(selesai, ms));
}

async function ambilBuku() {
  console.log("Mulai mengambil data...");
  await tunggu(100);
  return { judul: "Laut Bercerita" };
}

const buku = await ambilBuku();
console.log("Dapat:", buku.judul);
