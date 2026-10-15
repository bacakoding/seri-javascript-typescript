interface Entitas {
  id: number;
}

class Penyimpanan<T extends Entitas> {
  private data: T[] = [];

  tambah(item: T): void {
    this.data.push(item);
  }

  cari(id: number): T | undefined {
    return this.data.find((item) => item.id === id);
  }

  semua(): T[] {
    return [...this.data];
  }
}

interface Buku {
  id: number;
  judul: string;
}

const rak = new Penyimpanan<Buku>();
rak.tambah({ id: 1, judul: "Laut Bercerita" });
rak.tambah({ id: 2, judul: "Pulang" });
console.log(rak.cari(2));
console.log(rak.semua().length);
