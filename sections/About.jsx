"use client";

import { motion } from "framer-motion";
import { TypingText } from "../components";

import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText
        title="🕉️ About Shambhulingeshwara"
        textStyles="text-center"
      />

      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">
          Shambhulingeshwara and Mahakaali
        </span>{" "}
        Shambhulingeshwara and Mahakaali Temple, currently undergoing
        renovation, is a historically mentioned holy place situated in the
        Malnad village of Mankalale, Sagar taluk, Karnataka. The original{" "}
        <span className="font-extrabold text-white">Shiva </span>
        Linga, which had a crack in the middle representing Shiva-Shakti,
        remained devoid of any Pooja for many decades and was submerged under
        the village lake.{" "}
        <span className="font-extrabold text-white">
          Ashtamangala Prashna
        </span>{" "}
        clarified that the Linga, which is currently being worshipped inside the
        existing temple, must be replaced with the Original Linga residing in
        the lake. The excavation was conducted, and the Linga was brought back.
        Parihara was performed, and the process of renovation commenced in 2014.
        <span className="font-extrabold text-white">To learn</span> about the
        progress of the Sanatana Hindu Temple, please scroll down.
      </motion.p>

      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
