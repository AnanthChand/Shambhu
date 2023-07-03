import React from "react";
import { Footer, Navbar } from "../../components";
import Link from "next/link";

import Image from "next/image";
import Image2 from "..//../public/ratha1.JPG";
import Image3 from "..//../public/ratha2.JPG";
import Image4 from "..//../public/ratha3.JPG";
import Image5 from "..//../public/ratha4.JPG";

import ml1 from "..//../public/ml1.JPG";
import ml2 from "..//../public/ml2.JPG";
import ml3 from "..//../public/ml3.JPG";
import ml4 from "..//../public/ml4.JPG";
import ml5 from "..//../public/ml5.JPG";
import ml6 from "..//../public/ml6.JPG";

import c1 from "..//../public/c1.JPG";
import c2 from "..//../public/c2.JPG";
import c3 from "..//../public/c3.JPG";
import c4 from "..//../public/c4.JPG";
import c5 from "..//../public/c5.JPG";
import c6 from "..//../public/c6.JPG";

import { TimelineCards, TitleText, TypingText } from "../../components";
import Gallary from "@/sections/Gallary";

const Ratha = function () {
  return (
    <div>
      <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-2 ">
        <div className="-m-1 flex flex-wrap md:-m-2">
          <div className="flex w-1/2 flex-wrap">
            <div className="w-1/2 p-1 md:p-2">
              <Image
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={ml6}
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <Image
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={Image2}
              />
            </div>
            <div className="w-full p-1 md:p-2">
              <Image
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={Image3}
              />
            </div>
          </div>
          <div className="flex w-1/2 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <Image
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={Image4}
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <Image
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={Image5}
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <Image
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={Image1}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MaleLinga = function () {
  return (
    <div>
      <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-2 ">
        <div className="-m-1 flex flex-wrap md:-m-2">
          <div className="flex w-1/2 flex-wrap">
            <div className="w-1/2 p-1 md:p-2">
              <Image
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={ml1}
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <Image
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={ml2}
              />
            </div>
            <div className="w-full p-1 md:p-2">
              <Image
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={ml3}
              />
            </div>
          </div>
          <div className="flex w-1/2 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <Image
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={ml4}
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <Image
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={ml5}
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <Image
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={ml6}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Construction = function () {
  return (
    <div>
      <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-2 ">
        <div className="-m-1 flex flex-wrap md:-m-2">
          <div className="flex w-1/2 flex-wrap">
            <div className="w-1/2 p-1 md:p-2">
              <Image
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={c1}
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <Image
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={c2}
              />
            </div>
            <div className="w-full p-1 md:p-2">
              <Image
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={c3}
              />
            </div>
          </div>
          <div className="flex w-1/2 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <Image
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={c4}
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <Image
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={c5}
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <Image
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={c6}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


function Page() {
  return (
    <div className="bg-primary-black h-full flex flex-col object-center items-center">
      <TitleText title={<>THE ALBUM</>} textStyles="text-center" />{" "}
      <div className="md:m-10 m:48  ">
        <Navbar />
      </div>
      <div className="flex flex-col object-center items-center mt-10">
        <TypingText title="| The Malelinga" textStyles="text-right" />
        <div>
          <MaleLinga />
        </div>
      </div>
      <div className="flex flex-col object-center items-center mt-10">
        <TypingText title="| The construction" textStyles="text-right" />
        <div>
          <Construction />
        </div>
      </div>
      <div className="flex flex-col object-center items-center mt-10">
        <TypingText title="| The old Ratha" textStyles="text-right" />
        <div>
          <Ratha />
        </div>
      </div>
      <div className="flex flex-col object-center items-center">
        <Link href="/" className="hover:cursor-pointer  ">
          <div className="text-white font-bold text-2xl mt-10 py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px] items-center object-center">
            ← Go back Home
          </div>
        </Link>
        <Footer />
      </div>
    </div>
  );
}

export default Page;

