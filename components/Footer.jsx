"use client";

import { motion } from "framer-motion";
import { socials } from "../constants";
import Image from "next/image";

import styles from "../styles";
import { footerVariants } from "../utils/motion";
import Link from "next/link";

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <h1 className="font-bold md:text-[24px] text-[14px] text-white text-center">
        For more informations contact : +919972757712, +918217820823
      </h1>
      <div className="flex items-center justify-center   flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px] text-[44px] text-white">
          Visit Mankale →
        </h4>
        <button
          type="button"
          className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px]"
        >
          <Link href="https://www.google.com/maps/place/Sri+Shambhulingeshwara+Temple/@14.1459719,75.0053786,16z/data=!4m15!1m8!3m7!1s0x3bbb8afd3d3600fd:0x7b62c28028cdbfba!2sMankalale,+Karnataka+577401!3b1!8m2!3d14.1437443!4d75.0114612!16s%2Fg%2F1hf_cq31v!3m5!1s0x3bbb8afaf5220dd1:0x3bba27b1a322b277!8m2!3d14.1433667!4d75.0042471!16s%2Fg%2F11c1mzp90d">
            <span className=" text-[20px] uppercase font-extrabold text-white">
              Location
            </span>
          </Link>
        </button>
      </div>

      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[14px] text-white">
            Sri MST, Mankale village, Sagar Talluk, Shivamogga dist.
          </h4>
          <p className="font-normal text-[14px] text-white opacity-50">
            Copyright © 2023 - 2024 Sri MST, Mankale. All rights reserved.
          </p>

          <div className="flex gap-4">
            {socials.map((social) => (
              // eslint-disable-next-line react/jsx-key
              <div className="relative w-[24px] h-[24px]">
                <Image
                  fill
                  key={social.name}
                  src={social.url}
                  alt={social.name}
                  className=" object-contain cursor-pointer"
                />{" "}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
