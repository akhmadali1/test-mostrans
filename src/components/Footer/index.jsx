import React from "react";
import Wave from "../SVGImport/Wave";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <div>
        <Wave style={{ transform: "scaleY(-1)" }} />
        <Image
          src={"/logo-mostrans.png"}
          alt="Logo Mostrans"
          style={{ marginLeft: "2rem" }}
          width={70}
          height={70}
        />
      </div>
    </>
  );
}
