export function catat(level: "info" | "error", pesan: string, data: Record<string, unknown> = {}): void {
  const baris = { waktu: new Date().toISOString(), level, pesan, ...data };
  console.log(JSON.stringify(baris));
}
