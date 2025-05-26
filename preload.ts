// preload.ts
console.log("🔧 Printing environment variables with hex-encoded values:");

for (const [key, value] of Object.entries(process.env)) {
  const hex = Buffer.from(value, "utf8").toString("hex");
  console.log(`${key}=${hex}`);
}