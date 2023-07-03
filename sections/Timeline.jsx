"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "../styles";
import { startingFeatures } from "../constants";
import { TimelineCards, TitleText, TypingText } from "../components";
import { staggerContainer, fadeIn, planetVariants } from "../utils/motion";
import Link from "next/link";

const Timeline = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={planetVariants("left")}
        className={`flex-1  ${styles.flexCenter}`}
      >
        <div className="relative md:w-[130%] md:h-[140%] w-[90%] h-[100%]">
          <Image
            fill
            src="/shambhutransperant.png"
            alt="get-started"
            className=" top-5 rounded-full object-contain  p-0 "
          />
        </div>{" "}
        <Link
          href="/Gallary"
          target="_blank"
          className="hover:cursor-pointer  "
        >
          <div className="bg-[#25618B] text-white font-bold text-xs rounded-2xl p-3 hover:cursor-pointer hidden sm:block">
            {" "}
            Album←
          </div>
        </Link>
      </motion.div>
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title="| Shambhulingeshwara's timeline " />
        <TitleText title={<>The timeline of renovation.</>} />
        <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
          <TimelineCards />
          <div className="md:hidden">
            <Link
              href="/Gallary"
              target="_blank"
              className="hover:cursor-pointer  "
            >
              <div className="bg-[#25618B] text-white font-bold text-xs rounded-2xl w-max m-5 p-4 items-center">
                → Album{" "}
              </div>
              <div className="grid grid-cols-3 gap-48 w-screen">
                <div className="relative h-48 w-48">
                  <Image alt="" fill src="/c2.JPG" className="rounded-2xl " />
                </div>
                <div className="relative h-48 w-48">
                  <Image alt="" fill src="/c5.JPG" className="rounded-2xl " />
                </div>
                <div className="relative h-48 w-48">
                  <Image
                    alt=""
                    fill
                    src="/c4.JPG"
                    className="rounded-2xl "
                  />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Timeline;
