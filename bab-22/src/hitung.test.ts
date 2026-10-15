import { test } from "node:test";
import assert from "node:assert/strict";
import { hitungDenda } from "./hitung.js";
test("denda 3 hari adalah 3000", () => {
  assert.equal(hitungDenda(3), 3000);
});
