import Image from "next/image";
import React from "react";

const WhoAreWe = ({ title, description, images }) => {
  return (
    <div className="flex h-screen justify-between items-center w-4/5 py-40">
      <div className="w-1/2 py-10 flex flex-col" style={{ height: 450 }}>
        <div className="text-6xl font-bold mb-8">{title}</div>
        <div className="text-3xl">{description}</div>
      </div>
      <div className="relative " style={{ height: 400, width: 550 }}>
        <div style={{ position: "absolute", top: "0", left: "0" }}>
          <Image width={350} height={300} src={images[0].url} />
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "0",
            right: "0",
            zIndex: "1",
          }}
        >
          <Image width={300} height={250} src={images[1].url} />
        </div>
      </div>
    </div>
  );
};

export default WhoAreWe;
