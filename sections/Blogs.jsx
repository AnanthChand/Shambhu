'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { blogs } from '../constants';
import { staggerContainer } from '../utils/motion';
import { BlogCard, TitleText, TypingText } from '../components';

const Blogs = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Insight into Shambhu" textStyles="text-center" />
      <TitleText title={<>Blogs and Documentaries</>} textStyles="text-center" />
      <div className="mt-[50px] flex flex-col gap-[30px] ">
        {blogs.map((item, index) => (
          <BlogCard key={`insight-${index}`} {...item} index={index + 1} />
        ))}
      </div>
    </motion.div>
  </section>
);

export default Blogs;
