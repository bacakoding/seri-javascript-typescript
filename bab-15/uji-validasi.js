import { validasiBuku } from "./validasi.js";

console.log(validasiBuku({ judul: "Pulang", tahun: 2015 }));
console.log(validasiBuku({ judul: "  " }));
console.log(validasiBuku({ judul: "Pulang", tahun: "2015" }));
console.log(validasiBuku({ judul: "Pulang", tahun: 99999 }));
console.log(validasiBuku(["bukan", "objek"]));
console.log(validasiBuku(null));
