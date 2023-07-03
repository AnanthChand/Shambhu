'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from '../styles';
import { fadeIn, staggerContainer, zoomIn } from '../utils/motion';

const Donations = () => (
  <section className={`${styles.paddings}`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative"
      >
        <div className="feedback-gradien" />
        <div>
          <h4 className="font-bold sm:text-[32px] uppercase text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white">
            Donations Needed
          </h4>
          <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
            {"- For the glory of Sanatanis"}
          </p>
        </div>

        <p className="mt-[24px] font-normal sm:text-[20px] text-[14px] sm:leading-[45.6px] leading-[39.6px] text-white">
          {"Donations are needed for the next steps. We are here, but we have a long way to go. We are in dire need of financial assistance from devoted individuals across the nation to reignite the forgotten glory of Shambhulingeshwar and Mahakali. You can contribute by making donations through this QR code or via UPI : SHAMBHUKALI@SBI "}
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="relative flex-1 flex justify-center items-center"
      ><div className=' relative w-full lg:h-[610px] h-auto min-h-[210px]'>
        <Image
        fill
          src="/stonepillar.JPG"
          alt="qr code"
          className=" object-cover rounded-[40px] opacity-50"
        /></div>

        <motion.div
          variants={zoomIn(0.4, 1)}
          className="lg:block hidden absolute -left-[%] top-[30%] "
        ><div className='relative w-[255px] h-[255px]'>
          <Image
          fill
            src="/shambhQR1.jpeg"
            alt="qr code"
            className=" object-contain rounded-[20px]"
          />
          </div>
          
        </motion.div>
        <motion.div
          variants={zoomIn(0.4, 1)}
          className="lg:hidden  absolute -left-[%] top-[%]"
        ><div className='relative w-[155px] h-[155px]'>
          <Image
          fill
            src="/shambhQR1.jpeg"
            alt="qr code"
            className=" object-contain rounded-[20px]"
          />
          </div>
          
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
);

export default Donations;
