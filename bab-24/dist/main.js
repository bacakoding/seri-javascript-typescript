import { buatServer } from "./app.js";
import { berkasJson } from "./store.js";
const port = Number(process.env.PORT ?? "3000");
const berkas = process.env.DATA_FILE ?? "data.json";
const server = buatServer(berkasJson(berkas));
server.listen(port, () => {
    console.log(`Perpustakaan Kecil di http://localhost:${port} (data: ${berkas})`);
});
function berhenti() {
    server.close(() => process.exit(0));
}
process.on("SIGINT", berhenti);
process.on("SIGTERM", berhenti);
