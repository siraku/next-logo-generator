import Lookup from "@/app/_data/Lookup";
import React from "react";
import { Button } from "./ui/button";

function Hero() {
  console.log(Lookup.HeroDesc);
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
        />
        <Button> Get Start </Button>
      </div>
    </div>
  );
}

export default Hero;
