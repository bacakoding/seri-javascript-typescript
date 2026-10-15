interface Buku {
  judul: string;
  tahun: number;
}
interface Anggota {
  nama: string;
  kelas: string;
}

function apakahBuku(x: Buku | Anggota): x is Buku {
  return "judul" in x;
}

function proses(item: Buku | Anggota): string {
  if (apakahBuku(item)) {
    return "Buku: " + item.judul;
  } else {
    return "Anggota: " + item.nama;
  }
}

console.log(proses({ judul: "Pulang", tahun: 2015 }));
console.log(proses({ nama: "Budi", kelas: "XI" }));
