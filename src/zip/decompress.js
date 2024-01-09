import { createUnzip } from "zlib";
import { pipeline } from "stream";
import { createWriteStream, createReadStream, unlink } from "fs";

const decompress = async () => {
const readFilePath = "./src/zip/files/archive.gz";
const writeFilePath = "./src/zip/files/fileToCompress.txt"; 

  const unzip = createUnzip();
  const source = createReadStream(readFilePath);
  const destination = createWriteStream(writeFilePath);

  pipeline(source, unzip, destination, (err) => {
    if (err) {
      console.error("An error occurred:", err);
      process.exitCode = 1;
    } else {
      unlink(readFilePath, (err) => {
        if(err) console.error(err)
      });
    }
  });
};

await decompress();
