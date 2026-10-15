interface Buku {
  id: number;
  judul: string;
  tahun: number;
  tersedia: boolean;
}

type Status = "tersedia" | "dipinjam" | "hilang";

interface Anggota {
  nama: string;
  status: Status;
}

const buku: Buku = { id: 1, judul: "Laut Bercerita", tahun: 2017, tersedia: true };
const daftar: Buku[] = [buku, { id: 2, judul: "Pulang", tahun: 2015, tersedia: false }];
const anggota: Anggota = { nama: "Budi", status: "tersedia" };

console.log(daftar.length, anggota.nama, anggota.status);
