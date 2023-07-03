'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

import styles from '../styles';
import { levels } from '../constants';
import { staggerContainer } from '../utils/motion';
import { Levels, TitleText, TypingText } from '../components';

const AllLevels = () => {
  const [active, setActive] = useState('world-2');

  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col  sm:block hidden`}
      >
        <TypingText title="| The Temple Progress card" textStyles="text-center" />
        <TitleText
          title={<>All levels of Shambhulingeshwara{"'"}s  <br className="md:block hidden" /> renovation</>}
          textStyles="text-center"
        />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {levels.map((world, index) => (
            <Levels
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default AllLevels;
