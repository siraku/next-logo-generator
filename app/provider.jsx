import Header from "@/components/Header";
import React from "react";

function Provider({ children }) {
  return (
    <div>
      <Header />
      {children && <main>{children}</main>}
    </div>
  );
}

export default Provider;
