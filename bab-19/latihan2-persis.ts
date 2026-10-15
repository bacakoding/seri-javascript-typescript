interface Buku {
  judul: string;
  tahun: number;
}
interface Anggota {
  nama: string;
  kelas: string;
}
function proses(item: Buku | Anggota): string {
  if (typeof item.judul === "string") {
    return "Buku: " + item.judul;
  } else {
    return "Anggota: " + item.nama;
  }
}
console.log(proses({ judul: "Pulang", tahun: 2015 }));
