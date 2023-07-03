import styles from '../styles';
import Image from 'next/image';

const UpcomingCards = ({ imgUrl, title, subtitle }) => (
  <div className="flex-1 flex flex-col sm:max-w-[250px] min-w-[210px]">
    <div
      className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323F5D]`}
    >
      <div className='relative w-1/2 h-1/2'><Image fill src={imgUrl} alt="icon" className=" object-contain" /></div>
    </div>
    <h1 className="mt-[26px] font-bold text-[24px] leading-[30.24px] text-white">
       {title}
    </h1>
    <p className="flex-1 mt-[16px] font-normal text-[18px] text-[#B0B0B0] leading-[32.4px]">
      {subtitle}
    </p>
  </div>
);

export default UpcomingCards;
