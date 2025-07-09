import { motion, useTime, useTransform, useSpring } from "framer-motion";
import { useEffect } from "react";
import PlayButton from "@/assets/PlayButton.svg";

export default function MusicRecapSection() {
  const time = useTime();
  const rotate = useTransform(time, [0, 2500], [0, 360], { clamp: false });
  const rotatingBg = useTransform(rotate, (r) => {
    return `linear-gradient(${r}deg, #793FEF 0%, #E86842 100%)`;
  });

  const pulse = useSpring(0, { damping: 0, mass: 5, stiffness: 10 });
  const pulsingBg = useTransform(pulse, (r) => {
    return `blur(${r}px)`;
  });

  useEffect(() => pulse.set(10), []);

  return (
    <div className="relative mt-12">
      {/* Handle/Tab behind the button */}
      <div className="absolute -top-4 left-[99px] transform -translate-x-1/2 w-[117px] h-[40px] bg-transparent border-5 border-[#535353] rounded-[10px] z-0"></div>

      {/* Main button */}
      <div className="relative z-10 p-[4px] mr-[187px] w-[200px]">
        {/* Blurred rotating background border */}
        <motion.div
          className="absolute inset-[0.1px] rounded-full p-[4px] z-10"
          style={{ background: rotatingBg }}
        />
        <motion.div
          className="absolute inset-0 rounded-full z-0 opacity-75"
          style={{ background: rotatingBg, filter: pulsingBg }}
        />

        {/* Button content */}
        <div className="relative rounded-full p-[3px] bg-[#434343] z-20">
          <div className="flex items-center gap-1 px-6 py-3 bg-[#737373] rounded-full z-20">
            <img
              src={PlayButton}
              className="w-[32px] h-[32px] text-white fill-white z-20 select-none"
            />
            <span className="text-white font-semibold text-[17px] archivo-font z-20 select-none">
              Music Recap
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
