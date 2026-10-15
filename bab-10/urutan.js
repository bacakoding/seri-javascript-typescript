console.log("1. mulai");
setTimeout(() => console.log("3. timer selesai"), 0);
Promise.resolve().then(() => console.log("2b. promise selesai"));
console.log("2. akhir kode sinkron");
