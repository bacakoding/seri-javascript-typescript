import { test } from "node:test";
import assert from "node:assert/strict";
import { validasiBuku } from "./validasi.js";

test("judul yang benar lolos dan dirapikan", () => {
  const hasil = validasiBuku({ judul: "  Pulang  ", tahun: 2015 });
  assert.equal(hasil.valid, true);
  assert.equal(hasil.data.judul, "Pulang");
});

test("judul kosong ditolak", () => {
  const hasil = validasiBuku({ judul: "   " });
  assert.equal(hasil.valid, false);
  assert.match(hasil.galat[0], /judul/);
});

test("tahun berupa teks ditolak walaupun berisi angka", () => {
  const hasil = validasiBuku({ judul: "Pulang", tahun: "2015" });
  assert.equal(hasil.valid, false);
});

test("tahun di bawah 1450 ditolak", () => {
  const hasil = validasiBuku({ judul: "Kuno", tahun: 1000 });
  assert.equal(hasil.valid, false);
});

test("sengaja gagal: tes ini dibuat salah untuk latihan membaca laporan", () => {
  // Judul "Pulang" valid, jadi assertion ini sengaja salah.
  assert.equal(validasiBuku({ judul: "Pulang" }).valid, false);
});
