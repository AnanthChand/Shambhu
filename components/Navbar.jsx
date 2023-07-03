'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div className={`${styles.innerWidth} mx-auto flex justify-center gap-8`}>
      <div className='absolute top-[-52px] md:top-[-45px]'>
      <div className='relative h-56 w-56'>
      <Image
      fill
        className=" object-contain absolute  "
        src="/logo.png"
        alt=""
      /></div></div>
    </div>
  </motion.nav>
);

export default Navbar;
