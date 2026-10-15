export interface Buku {
  id: number;
  judul: string;
}

export function sapa(buku: Buku): string {
  return "Buku: " + buku.judul;
}
