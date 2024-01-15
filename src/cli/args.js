import { argv } from "process";

const parseArgs = async () => {
  const [, , ...args] = argv;

  const formattedArgs = args
    .reduce(function (result, value, index, array) {
      if (index % 2 === 0) {
        const formattedPairs = formatter(array.slice(index, index + 2));
        result.push(formattedPairs);
      }
      return result;
    }, [])
    .join(", ");

  console.log(formattedArgs);
};

await parseArgs();

function formatter(pairedArgs) {
  return pairedArgs.join(" is ").replace("--", "");
}
