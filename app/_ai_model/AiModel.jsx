import Replicate from "replicate";
import { writeFile } from "node:fs/promises";

const replicate = new Replicate();

const input = {
  prompt: "a chinese girl smilling , big eyse.",
};

const output = await replicate.run(
  "bytedance/hyper-flux-8step:81946b1e09b256c543b35f37333a30d0d02ee2cd8c4f77cd915873a1ca622bad",
  { input }
);

for (const [index, item] of Object.entries(output)) {
  await writeFile(`output_${index}.webp`, item);
}
//=> output_0.webp written to disk
