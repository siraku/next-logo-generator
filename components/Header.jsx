import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

function Header() {
  return (
    <div className="px-10 py-2 flex justify-between items-center shadow-md">
      {" "}
      <Image src={"/logo.svg"} alt="logo" width={100} height={100} />
      <Button>Get Start</Button>
    </div>
  );
}

export default Header;
