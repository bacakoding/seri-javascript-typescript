const namaBuku: string = "Laut Bercerita";
let jumlahPinjam: number = 0;
const tersedia: boolean = true;

function hitungDenda(hari: number): number {
  return hari * 1000;
}

console.log(namaBuku, jumlahPinjam, tersedia);
console.log(hitungDenda(3));
