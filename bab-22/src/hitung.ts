export function hitungDenda(hari: number): number {
  if (hari < 0) {
    throw new RangeError("Jumlah hari tidak boleh negatif.");
  }
  return hari * 1000;
}
