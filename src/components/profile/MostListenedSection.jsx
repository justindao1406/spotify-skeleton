import React from "react";
import MagicWays from "@/assets/MagicWays.png";

export default function MostListenedSection() {
  return (
    <div className="pb-[84px]">
      <h2 className="text-white font-bold text-lg mt-3 ml-2 archivo-font">
        Most listened songs
      </h2>
      <div className="space-y-8 mt-4 px-[4px]">
        {/* First row: 1 album, 2 placeholders */}
        <div className="flex justify-between items-center">
          {/* Album */}
          <img
            loading="eager"
            className="w-[100px] h-[100px] object-cover rounded-[10px] border border-white"
            alt="Magic Ways album cover"
            src={MagicWays}
          />
          {/* Placeholders */}
          <div className="w-[30px] h-[30px] flex items-center justify-center">
            <div className="w-3 h-3 bg-white/40 rounded-full" />
          </div>
          <div className="w-[100px] h-[100px] flex items-center justify-center">
            <div className="w-3 h-3 bg-white/40 rounded-full" />
          </div>
        </div>
        {/* Separation line */}
        <hr className="border-white/30 m-3" />
        {/* Date label under the first row */}
        <p className="text-white text-xs font-bold archivo-font leading-tight">
          Magic Ways
          <br />
          Jun 4 - Jun 10
        </p>

        {/* Second row: 0 albums, 3 placeholders */}
        <div className="flex justify-between items-center">
          <div className="w-[100px] h-[100px] flex items-center justify-center">
            <div className="w-3 h-3 bg-white/40 rounded-full" />
          </div>
          <div className="w-[100px] h-[100px] flex items-center justify-center">
            <div className="w-3 h-3 bg-white/40 rounded-full" />
          </div>
          <div className="w-[100px] h-[100px] flex items-center justify-center">
            <div className="w-3 h-3 bg-white/40 rounded-full" />
          </div>
        </div>
        <hr className="border-white/30" />

        {/* Third row: 0 albums, 3 placeholders */}
        <div className="flex justify-between items-center">
          <div className="w-[100px] h-[100px] flex items-center justify-center">
            <div className="w-3 h-3 bg-white/40 rounded-full" />
          </div>
          <div className="w-[100px] h-[100px] flex items-center justify-center">
            <div className="w-3 h-3 bg-white/40 rounded-full" />
          </div>
          <div className="w-[100px] h-[100px] flex items-center justify-center">
            <div className="w-3 h-3 bg-white/40 rounded-full" />
          </div>
        </div>
        <hr className="border-white/30" />

        {/* Third row: 0 albums, 3 placeholders */}
        <div className="flex justify-between items-center">
          <div className="w-[100px] h-[100px] flex items-center justify-center">
            <div className="w-3 h-3 bg-white/40 rounded-full" />
          </div>
          <div className="w-[100px] h-[100px] flex items-center justify-center">
            <div className="w-3 h-3 bg-white/40 rounded-full" />
          </div>
          <div className="w-[100px] h-[100px] flex items-center justify-center">
            <div className="w-3 h-3 bg-white/40 rounded-full" />
          </div>
        </div>
        <hr className="border-white/30" />
      </div>
    </div>
  );
}
