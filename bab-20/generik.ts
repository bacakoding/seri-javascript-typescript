function pertama<T>(daftar: T[]): T | undefined {
  return daftar[0];
}

console.log(pertama([1, 2, 3]));
console.log(pertama(["Laut", "Pulang"]));
console.log(pertama([]));

function ulangi<T>(nilai: T, kali: number): T[] {
  const hasil: T[] = [];
  for (let i = 0; i < kali; i++) {
    hasil.push(nilai);
  }
  return hasil;
}

console.log(ulangi("halo", 2));
