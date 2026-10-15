import { test } from "node:test";
import assert from "node:assert/strict";
import { buatServer } from "./app.js";
function memori(awal = []) {
    let data = [...awal];
    return {
        async muat() {
            return [...data];
        },
        async simpan(baru) {
            data = [...baru];
        },
    };
}
async function jalankan(penyimpan) {
    const server = buatServer(penyimpan);
    await new Promise((selesai) => server.listen(0, "127.0.0.1", () => selesai()));
    const alamat = server.address();
    if (alamat === null || typeof alamat === "string") {
        throw new Error("alamat server tidak diketahui");
    }
    return {
        base: `http://127.0.0.1:${alamat.port}`,
        tutup: () => new Promise((selesai) => server.close(() => selesai())),
    };
}
async function postBuku(base, body) {
    return fetch(`${base}/buku`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body,
    });
}
test("GET /buku mengembalikan daftar", async () => {
    const s = await jalankan(memori([{ id: 1, judul: "Laut Bercerita", tahun: 2017, tersedia: true }]));
    try {
        const res = await fetch(`${s.base}/buku`);
        assert.equal(res.status, 200);
        const data = (await res.json());
        assert.equal(data.length, 1);
    }
    finally {
        await s.tutup();
    }
});
test("POST /buku valid menghasilkan 201 dan id berikutnya", async () => {
    const s = await jalankan(memori([{ id: 1, judul: "Laut Bercerita", tahun: 2017, tersedia: true }]));
    try {
        const res = await postBuku(s.base, '{"judul":"Pulang","tahun":2015}');
        assert.equal(res.status, 201);
        const baru = (await res.json());
        assert.equal(baru.id, 2);
        assert.equal(baru.tersedia, true);
    }
    finally {
        await s.tutup();
    }
});
test("POST dengan JSON rusak menghasilkan 400", async () => {
    const s = await jalankan(memori());
    try {
        assert.equal((await postBuku(s.base, "{rusak")).status, 400);
    }
    finally {
        await s.tutup();
    }
});
test("POST dengan data tidak lolos aturan menghasilkan 422", async () => {
    const s = await jalankan(memori());
    try {
        const res = await postBuku(s.base, '{"judul":"  "}');
        assert.equal(res.status, 422);
        const body = (await res.json());
        assert.ok(body.galat.length > 0);
    }
    finally {
        await s.tutup();
    }
});
test("GET /buku/:id mengembalikan 200 atau 404", async () => {
    const s = await jalankan(memori([{ id: 1, judul: "Pulang", tahun: null, tersedia: true }]));
    try {
        assert.equal((await fetch(`${s.base}/buku/1`)).status, 200);
        assert.equal((await fetch(`${s.base}/buku/99`)).status, 404);
    }
    finally {
        await s.tutup();
    }
});
test("rute tidak dikenal menghasilkan 404", async () => {
    const s = await jalankan(memori());
    try {
        assert.equal((await fetch(`${s.base}/tidak-ada`)).status, 404);
    }
    finally {
        await s.tutup();
    }
});
