interface Entitas {
  id: number;
}
function cetakId<T extends Entitas>(item: T): number {
  return item.id;
}
console.log(cetakId({ judul: "Pulang" }));
