import { createGzip } from "zlib";
import { pipeline } from "stream";
import { createWriteStream, createReadStream, unlink } from "fs";

const compress = async () => {
    const readFilePath = "./src/zip/files/fileToCompress.txt"; 
    const writeFilePath = "./src/zip/files/archive.gz"; 

  const gzip = createGzip();
  const source = createReadStream(readFilePath);
  const destination = createWriteStream(writeFilePath);

  pipeline(source, gzip, destination, (err) => console.error(err));
};

await compress();
