"use client"; // This is a client component
import React from "react";
import { useSearchParams } from "next/navigation";

function ImageDisplay() {
  const searchParam = useSearchParams();
  const searchQuery = searchParam.get("search");

  return <div>{searchQuery}</div>;
}

export default ImageDisplay;
