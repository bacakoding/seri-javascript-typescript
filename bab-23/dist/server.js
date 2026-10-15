import { createServer } from "node:http";
import { bacaKonfigurasi } from "./config.js";
import { catat } from "./log.js";
let konfig;
try {
    konfig = bacaKonfigurasi(process.env);
}
catch (error) {
    catat("error", "Konfigurasi gagal", { detail: error.message });
    process.exit(1);
}
const server = createServer((req, res) => {
    catat("info", "permintaan", { metode: req.method, url: req.url });
    res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
    res.end(`Halo dari ${konfig.namaLayanan}\n`);
});
server.listen(konfig.port, () => {
    catat("info", "layanan siap", { port: konfig.port, layanan: konfig.namaLayanan });
});
function berhenti(sinyal) {
    catat("info", "menerima sinyal, menutup dengan rapi", { sinyal });
    server.close((err) => {
        if (err) {
            catat("error", "gagal menutup", { detail: err.message });
            process.exit(1);
        }
        catat("info", "layanan berhenti");
        process.exit(0);
    });
    setTimeout(() => {
        catat("error", "terlalu lama, paksa berhenti");
        process.exit(1);
    }, 5000).unref();
}
process.on("SIGINT", () => berhenti("SIGINT"));
process.on("SIGTERM", () => berhenti("SIGTERM"));
