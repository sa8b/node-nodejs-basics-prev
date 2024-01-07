import fs from "fs/promises";
import { existsSync } from "fs";

const { createHash } = await import("crypto");

const calculateHash = async () => {
  const readFilePath = "./src/hash/files/fileToCalculateHashFor.txt";

  const hash = createHash("sha256");
  
  hash.on("readable", () => {
    const data = hash.read();
    if (data) {
      console.log(data.toString("hex"));
    }
  });

  try {
    if (!existsSync(readFilePath)) throw new Error("FS operation failed");

    const content = await fs.readFile(readFilePath, {
      encoding: "utf8",
    });

    hash.write(content);
  } catch (err) {
    console.log(err);
  }  

  hash.end();
};

await calculateHash();
