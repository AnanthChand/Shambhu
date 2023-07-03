import React from "react";
import Image from "next/image";

function Gallary() {
  return (
    <div className="bg-primary-black   ">
      Gallary
      <div className="relative h-full w-full">
        <Image src="/cover2.JPG" alt="hello" fill className="object-cover" />
      </div>
    </div>
  );
}

export default Gallary;
