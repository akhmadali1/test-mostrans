import Image from "next/image";
import React from "react";
import Wave from "../SVGImport/Wave";
export default function FirstSection({text = "Rick & Morty", image = "/rickmorty-fs.svg"}) {
  return (
    <>
      <style>
        {`
          .wave{
            padding-top:140px;
          }
          .text-h1{
            font-size: 2rem;
          }
          @media (min-width: 500px) {
            .wave{
              padding-top:100px;
            }
          }
          @media (min-width: 1024px) {
            .text-h1{
              font-size: 5rem;
            }
          }
          `}
      </style>
      <div
        className="fs"
        style={{
          position: "relative",
          width: "100%",
          paddingTop: "5rem",
          textAlign: "center",
        }}
      >
        <h1
          className="text-h1 font-weight-bold"
          style={{
            position: "absolute",
            left: "50%",
            transform: "translate(-50%, 0%)",
            color: "#5AAD80",
          }}
        >
          {text}
        </h1>
        <Image
          style={{
            position: "absolute",
            left: "50%",
            top:0,
            transform: "translate(-50%, 0%)",
            zIndex: -1,
            width:'100%',
            height:'100%'
          }}
          src={image}
          alt="Rick and Morty"
          width={400}
          height={200}
        />
        <Wave className="wave" />
      </div>
    </>
  );
}
