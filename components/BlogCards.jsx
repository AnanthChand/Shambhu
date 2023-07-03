"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeIn } from "../utils/motion";
import Link from "next/link";

const BlogCard = ({ imgUrl, title, subtitle, index, href }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 1)}
    className="flex md:flex-row flex-col gap-4"
  >
    <div className="relative md:w-[350px] w-full h-[250px]">
      <Image
        src={imgUrl}
        fill
        alt="planet-01"
        className=" rounded-[32px] object-cover"
      />
    </div>
    <div className="w-full flex justify-between items-center">
      <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
        <h4 className="font-normal lg:text-[42px] text-[26px] text-white">
          {title}
        </h4>
        <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white">
          {subtitle}
        </p>
      </div>

      <div className="lg:flex hidden items-center  justify-center w-[100px] h-[100px] rounded-full bg-transparent border-[1px] border-white">
        
        
        <div className=" relative w-[40%] h-[40%] ">
        <Link href='/'><Image
            fill
            src="/arrow.svg"
            alt="arrow"
            className=" object-contain"
          /></Link>
        </div>
        
        
      </div>
    </div>
  </motion.div>
);

export default BlogCard;
