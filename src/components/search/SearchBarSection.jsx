import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import { motion, useTime, useTransform } from "framer-motion";
import SearchIcon from "@/assets/SearchIcon.svg";

export default function HeaderSection() {
  const time = useTime();

  const rotate = useTransform(time, [0, 5000], [0, 360], { clamp: false });
  const rotatingBg = useTransform(rotate, (r) => {
    return `linear-gradient(${r}deg, #793FEF 0%, #E86842 100%)`;
  });

  return (
    <>
      {/* Search bar */}
      <div className="px-[4px]">
        <motion.div
          className=" p-[1px] rounded-[25px] w-full"
          style={{
            background: rotatingBg,
          }}
        >
          <Card className="bg-[#222222] rounded-[25px] border-none">
            <div className="flex h-[1px] py-[4px] flex-row items-center gap-[10px] px-[12px]">
              <img
                src={SearchIcon}
                alt="Search"
                className="w-[24px] h-[24px] text-[#A8A8A8]"
              />
              <span className="h-[16px] text-[#A8A8A8] text-center archivo-font text-[14px] font-medium leading-none whitespace-nowrap pt-[1px]">
                Search for listeners
              </span>
            </div>
          </Card>
        </motion.div>
      </div>
    </>
  );
}
