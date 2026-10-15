export function catat(level, pesan, data = {}) {
    const baris = { waktu: new Date().toISOString(), level, pesan, ...data };
    console.log(JSON.stringify(baris));
}
