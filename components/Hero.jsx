"use client"; // This is a client component
import Lookup from "@/app/_data/Lookup";
import React from "react";
import { Button } from "./ui/button";

function Hero() {
  console.log(Lookup.HeroDesc);
  const [input, setInput] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [imageUrl, setImageUrl] = React.useState("");

  const generateImage = async () => {
    setIsLoading(true);
    const response = await fetch("/api/ai-logo-model", {
      method: "POST",
      body: JSON.stringify({ prompt: input }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    setImageUrl(data.imageUrl);
    setIsLoading(false);
    console.log(imageUrl);
  };

  return (
    <div className="px-10 pt-32 flex items-center flex-col gap-5">
      <h2 className="text-primary text-center text-5xl font-bold">
        {Lookup.HeroHeading}
      </h2>
      <h2 className="text-center text-5xl font-bold">
        {Lookup.HeroSubheading}
      </h2>
      <div className="text-xl text-gray-500 text-center">{Lookup.HeroDesc}</div>

      <div className="flex gap-5 w-full max-w-2xl mt-10">
        <input
          placeholder={Lookup.InputPlaceholder}
          className="p-3 border shadow-md w-full rounded-md"
          onChange={(e) => setInput(e.target.value)}
        />
        <Button onClick={generateImage} disable={isLoading}>
          {" "}
          Generate Image{" "}
        </Button>
      </div>
      {imageUrl && (
        <div className="mt-10">
          <img src={imageUrl} alt="Generated Image" />
        </div>
      )}
    </div>
  );
}

export default Hero;
