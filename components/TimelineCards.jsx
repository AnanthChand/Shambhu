import styles from "../styles";

const TimelineCards = ({ number, text }) => (
  <div>
    <div className={`${styles.flexCenter} flex-row`}>
      <div
        className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] my-2 bg-[#323F5D]`}
      >
        <p className="font-bold text-[20px] text-white">2014</p>
      </div>
      <p className="flex-1 ml-[30px] font-normal text-[18px] text-[#B0B0B0] leading-[32.4px]">
        Ashta Mangala Prashne
      </p>
    </div>
    <div className={`${styles.flexCenter} flex-row`}>
      <div
        className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] my-2 bg-[#323F5D]`}
      >
        <p className="font-bold text-[15px] text-white">2014-18</p>
      </div>
      <p className="flex-1 ml-[30px] font-normal text-[18px] text-[#B0B0B0] leading-[32.4px]">
        Parihara
      </p>
    </div>
    <div className={`${styles.flexCenter} flex-row`}>
      <div
        className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] my-2 bg-[#323F5D]`}
      >
        <p className="font-bold text-[20px] text-white">2015</p>
      </div>
      <p className="flex-1 ml-[30px] font-normal text-[18px] text-[#B0B0B0] leading-[32.4px]">
      Foundation layed
      </p>
    </div>
    <div className={`${styles.flexCenter} flex-row`}>
      <div
        className={`${styles.flexCenter} w-[70px] h-[70px] my-2 rounded-[24px] bg-[#323F5D]`}
      >
        <p className="font-bold text-[20px] text-white">2016</p>
      </div>
      <p className="flex-1 ml-[30px] font-normal text-[18px] text-[#B0B0B0] leading-[32.4px]">
        Shadhadara Prathisthana
      </p>
    </div>
    <div className={`${styles.flexCenter} flex-row`}>
      <div
        className={`${styles.flexCenter} w-[70px] h-[70px] my-2 rounded-[24px] bg-[#323F5D]`}
      >
        <p className="font-bold text-[20px] text-white">2022</p>
      </div>
      <p className="flex-1 ml-[30px] font-normal text-[18px] text-[#B0B0B0] leading-[32.4px]">
        Garbhagudi Completion
      </p>
    </div>
  </div>
);

export default TimelineCards;

