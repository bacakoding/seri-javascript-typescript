import { test } from "node:test";
import assert from "node:assert/strict";
import { validasiBuku } from "./buku.js";

test("data benar lolos dan judul dirapikan", () => {
  const hasil = validasiBuku({ judul: "  Pulang  ", tahun: 2015 });
  assert.equal(hasil.valid, true);
  if (hasil.valid) {
    assert.deepEqual(hasil.data, { judul: "Pulang", tahun: 2015 });
  }
});

test("judul kosong ditolak", () => {
  assert.equal(validasiBuku({ judul: "   " }).valid, false);
});

test("tahun berupa teks ditolak walaupun berisi angka", () => {
  assert.equal(validasiBuku({ judul: "Pulang", tahun: "2015" }).valid, false);
});

test("tahun di bawah 1450 ditolak", () => {
  assert.equal(validasiBuku({ judul: "Kuno", tahun: 1000 }).valid, false);
});

test("bukan objek ditolak", () => {
  assert.equal(validasiBuku(null).valid, false);
  assert.equal(validasiBuku(["a"]).valid, false);
});
