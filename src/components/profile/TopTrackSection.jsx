import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function TopTracksSection({ topTracks }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "end 100%"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const translateY = useTransform(scrollYProgress, [0, 1], [60, 0]);

  return (
    <div className="mt-6">
      <h2 className="text-white font-bold text-[18px] ml-2 archivo-font">
        Top Tracks <span className="text-[#A8A8A8] text-sm">(weekly)</span>
      </h2>
      <div className="flex justify-center items-center w-full pl-[8px]">
        <motion.div
          className="flex justify-between mt-3 w-full"
          ref={ref}
          style={{
            opacity,
            y: translateY,
          }}
        >
          {topTracks.map((track) => (
            <div key={track.rank} className="text-white text-sm font-bold">
              <div className="w-[105px] h-[105px] bg-[#333] rounded-[5px] mb-2 border border-white"></div>
              <p className="archivo-font font-black text-[20px] w-[105px] break-words">
                {track.rank}.
                <span className="text-[16px] font-bold w-[105px] break-words">
                  {track.title}
                </span>
              </p>
              <p className="text-[12px] text-[#A8A8A8] font-medium italic w-[105px] break-words">
                {track.artist}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
