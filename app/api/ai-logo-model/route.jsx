import { writeFile } from "node:fs/promises";
import Replicate from "replicate";
import { NextResponse } from "next/server";

export async function POST(req) {
  const replicate = new Replicate({
    auth: process.env.REPLICATE_API_TOKEN,
  });

  const { prompt } = await req.json();

  const input = {
    prompt: prompt || "",
  };
  console.log("start request, the prompt is:" + prompt);
  const output = await replicate.run(
    "bytedance/hyper-flux-8step:81946b1e09b256c543b35f37333a30d0d02ee2cd8c4f77cd915873a1ca622bad",
    { input }
  );

  // Assuming the output is a URL to the generated image
  const imageUrl = output[0];
  // const imageUrl =
  //   "https://replicate.delivery/xezq/DfUqryinoq1zHifRaLBzb4yDQgLzftnrOVenfQOX4HVufnmEF/out-0.webp";

  console.log("image url is:" + imageUrl);

  return NextResponse.json({ imageUrl: String(imageUrl) });
}
