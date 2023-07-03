"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import styles from "../styles";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="flex justify-center items-center flex-col relative z-10">
        <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
          ಶ್ರೀ ಮಹಾಕಾಲೀ ಸಹಿತ ಶಂಭುಲಿಂಗೇಶ್ವರ{" "}
          <span className="block">ದೇವಸ್ಥಾನ, ಮಂಕಳಲೆ</span>
        </motion.h1>
        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row justify-center items-center"
        />
      </div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="relative w-full md:mt-[50px] mt-[42px]"
      >
        <div className="absolute w-full h-[300px] hero-gradient rounded-[140px] z-[0] -top-[30px]" />
        <div className="relative w-full sm:h-[500px] h-[350px]  z-10">
          <Image
            fill
            src="/cover2.JPG"
            alt="hero_cover"
            className=" object-cover rounded-[140px] relative"
          />
        </div>

        <a href="#explore">
          <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10">
            <div className="relative sm:w-[155px] w-[100px] sm:h-[155px] h-[100px]">
              <Image
                fill
                src="/logo.png"
                alt="stamp"
                className=" object-contain"
              />
            </div>
          </div>
        </a>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
