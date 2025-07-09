import { Badge } from "@/components/ui/badge";
import React from "react";
import ProfileIcon from "@/assets/ProfileIcon.svg";
import SearchIconSelected from "@/assets/SearchIconSelected.svg";
import LeaderboardIcon from "@/assets/LeaderboardIcon.svg";

export default function NavbarSection() {
  return (
    <>
      <div className="z-10 p-[3px] fixed left-0 right-0 bottom-[78px] h-[3px] bg-[#1f1f1f] shadow-[0_-8px_40px_5px_rgba(0,0,0,0.30)]"></div>
      <div className="z-10 fixed left-0 right-0 bottom-0 h-[81px] bg-[#0f0f0f] pb-[52px]">
        <div className="flex justify-around items-center h-full pt-7">
          <img src={LeaderboardIcon} alt="Leaderboard" className="w-9 h-9" />
          <div className="relative">
            <img src={SearchIconSelected} alt="Search" className="w-9 h-9" />
            <Badge className="absolute w-[5px] h-[5px] bottom-[-10px] left-[50%] transform -translate-x-1/2 rounded-full bg-gradient-to-b from-[#793fef] to-[#e86842] p-0" />
          </div>
          <img src={ProfileIcon} alt="Profile" className="w-9 h-9" />
        </div>
      </div>
    </>
  );
}
