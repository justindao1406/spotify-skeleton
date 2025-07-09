import { motion, useTime, useTransform, AnimatePresence } from "framer-motion";
import { useState } from "react";
import MusicNote from "@/assets/MusicNote.svg";
import styles from "@/components/ui/Arrow.module.css";

export default function LeaderboardSection({ friendData }) {
  const [openDropdownID, setOpenDropdownID] = useState(null);

  const time = useTime();
  const rotate = useTransform(time, [0, 3500], [0, 360], { clamp: false });
  const rotatingBg = useTransform(rotate, (r) => {
    return `linear-gradient(${r}deg, #793FEF 0%, #E86842 100%)`;
  });

  const dropdownVars = {
    initial: { height: 0 },
    animate: { height: "auto" },
    exit: { height: 0 },
  };

  return (
    <div className="mx-[-18px] pt-[12px]">
      <div className="bg-[#222222] w-full">
        {friendData.map((item) =>
          item.isUser ? (
            <div key={item.rank} className="py-[2px] mb-[8px]">
              <motion.div
                className="p-[2px] rounded-[10px] w-full"
                style={{ background: rotatingBg }}
              >
                <button
                  className="flex items-center gap-4 p-3 rounded-[8px] bg-[#222222] w-full"
                  onClick={() =>
                    setOpenDropdownID(
                      openDropdownID === item.rank ? null : item.rank
                    )
                  }
                >
                  {/* Rank */}
                  <span className="text-[16px] font-extrabold pl-[12px] text-white archivo-font px-[8px] w-[32px]">
                    {item.rank}.
                  </span>
                  {/* Avatar */}
                  <div className="w-12 h-12 bg-[#4A4A4A] rounded-full flex-shrink-0"></div>
                  {/* Name */}
                  <span className="flex-1 text-white archivo-font text-[14px] font-extrabold text-left pl-[8px]">
                    {item.name}
                    <span className="text-[#949494]"> (You)</span>
                  </span>
                  {/* Music Icon and Score */}
                  <div className="flex items-center gap-2">
                    <img src={MusicNote} alt="Music Note" className="w-5 h-5" />
                    <span className="font-bold archivo-font text-[16px] text-white">
                      {item.score}
                    </span>
                    {openDropdownID === item.rank ? (
                      <span
                        className={`${styles.arrow} ${styles.active} ml-5 pb-[2px]`}
                      />
                    ) : (
                      <span className={`${styles.arrow} ml-5 mb-[4px]`} />
                    )}
                  </div>
                </button>
              </motion.div>
              <AnimatePresence>
                {openDropdownID === item.rank && (
                  <motion.div
                    className="w-full bg-[#0F0F0F] overflow-hidden"
                    variants={dropdownVars}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    <div className="flex items-start gap-4 py-4 px-3">
                      {/* Album Cover */}
                      <div className="w-[88px] h-[88px] bg-[#4A4A4A] rounded-[5px] flex-shrink-0 m-[12px] mb-[15px] border border-white"></div>
                      {/* Text content */}
                      <div className="flex flex-col justify-start m-[8px]">
                        <p
                          className="text-[#A8A8A8] text-sm pb-[4px] archivo-font"
                          style={{ fontStyle: "italic" }}
                        >
                          Top Track
                        </p>
                        <p className="text-white pb-[4px] archivo-font font-bold">
                          Song name
                        </p>
                        <p
                          className=" text-sm text-white archivo-font"
                          style={{ fontStyle: "italic" }}
                        >
                          artist
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <div key={item.rank} className="py-[7px]">
              <motion.div className="p-[2px] rounded-[10px] w-full">
                <button
                  className="flex items-center gap-4 p-3 mb-[8px] rounded-[8px] bg-[#222222] w-full"
                  onClick={() =>
                    setOpenDropdownID(
                      openDropdownID === item.rank ? null : item.rank
                    )
                  }
                >
                  {/* Rank */}
                  <span className="text-[16px] font-extrabold pl-[12px] text-white archivo-font px-[8px] w-[32px]">
                    {item.rank}.
                  </span>
                  {/* Avatar */}
                  <div className="w-12 h-12 bg-[#4A4A4A] rounded-full flex-shrink-0"></div>
                  {/* Name */}
                  <span className="flex-1 text-white archivo-font text-[14px] font-extrabold text-left pl-[8px]">
                    {item.name}
                  </span>
                  {/* Music Icon and Score */}
                  <div className="flex items-center gap-2">
                    <img src={MusicNote} alt="Music Note" className="w-5 h-5" />
                    <span className="font-bold archivo-font text-[16px] text-white">
                      {item.score}
                    </span>
                    {openDropdownID === item.rank ? (
                      <span
                        className={`${styles.arrow} ${styles.active} ml-5 pb-[2px]`}
                      />
                    ) : (
                      <span className={`${styles.arrow} ml-5 mb-[4px]`} />
                    )}
                  </div>
                </button>
              </motion.div>
              <AnimatePresence>
                {openDropdownID === item.rank && (
                  <motion.div
                    className="w-full bg-[#0F0F0F] overflow-hidden"
                    variants={dropdownVars}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    <div className="flex items-start gap-4 py-4 px-3">
                      {/* Album Cover */}
                      <div className="w-[88px] h-[88px] bg-[#4A4A4A] rounded-[5px] flex-shrink-0 m-[12px] mb-[15px] border border-white"></div>
                      {/* Text content */}
                      <div className="flex flex-col justify-start m-[8px]">
                        <p
                          className="text-[#A8A8A8] text-sm pb-[4px] archivo-font"
                          style={{ fontStyle: "italic" }}
                        >
                          Top Track
                        </p>
                        <p className="text-white pb-[4px] archivo-font font-bold">
                          Song name
                        </p>
                        <p
                          className=" text-sm text-white archivo-font"
                          style={{ fontStyle: "italic" }}
                        >
                          artist
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        )}
      </div>
    </div>
  );
}
