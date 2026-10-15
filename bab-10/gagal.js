async function ambilData() {
  throw new Error("Server tidak merespons");
}
try {
  await ambilData();
} catch (error) {
  console.log("Tertangkap:", error.message);
}
