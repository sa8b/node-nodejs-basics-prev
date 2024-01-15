import { argv } from "process";

const parseEnv = async () => {
  const [, , ...args] = argv;

  const envs = args
    .filter((arg) => arg.includes("=") && arg.startsWith("RSS_"))
    .join("; ");
  console.log(envs);
};

await parseEnv();
