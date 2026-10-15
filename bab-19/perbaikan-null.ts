function cariJudul(judul: string | undefined): string {
  if (judul === undefined) {
    return "";
  }
  return judul.toUpperCase();
}
console.log(cariJudul("Pulang"));
console.log(cariJudul(undefined));
