import React from "react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";
import MusicNote from "@/assets/MusicNote.svg";

export default function ScoreSection({ scoreData }) {
  return (
    <div>
      <div className="px-[4px] mt-6">
        <div className="flex items-center gap-2 mb-2">
          <h2 className="text-white archivo-font font-bold mx-2 text-lg">
            Score
          </h2>
          <HoverCard>
            <HoverCardTrigger>
              <Button
                variant="ghost"
                size="icon"
                className="mb-[10px] w-4 h-4 bg-[#d9d9d9] rounded-full p-0"
              >
                <span className="text-black text-xs font-bold">?</span>
              </Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-64">
              Your listening score and multipliers.
            </HoverCardContent>
          </HoverCard>
        </div>

        <div className=" p-[1px] rounded-[15px] w-full bg-gradient-to-b from-[#101010] to-[#666666]">
          <Card className="bg-[#222222] rounded-[14px] border-none">
            <CardContent>
              <div className="flex gap-[72px] pr-[40px] justify-around text-[#A8A8A8] text-[14px] font-medium archivo-font">
                <span>Listening Time</span>
                <span>Day Multiplier</span>
              </div>
              <div className="flex justify-around items-center">
                <div className="p-[1px] rounded-[15px] bg-gradient-to-b from-[#793FEF] to-[#B08DF5]">
                  <div className="w-[142px] h-[60px] bg-[#793fef] rounded-[15px] flex items-center justify-end pr-4 text-white archivo-font font-bold text-[28px]">
                    {scoreData.listeningTime}
                  </div>
                </div>
                <span className="text-white text-[48px] bayon-font px-2">
                  X
                </span>
                <div className="p-[1px] rounded-[15px] bg-gradient-to-b from-[#E86842] to-[#FD9F83]">
                  <div className="w-[142px] h-[60px] bg-[#e86842] rounded-[15px] flex items-center justify-start pl-4 text-white archivo-font font-bold text-[28px]">
                    {scoreData.dayMultiplier}
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center mt-4">
                <span className="text-[#A8A8A8] text-[14px] text-center leading-tight archivo-font pr-5 font-medium">
                  Total
                  <br />
                  score
                </span>
                <div className="p-[1px] rounded-[15px] bg-gradient-to-b from-[#222222] to-[#ADADAD]">
                  <div className="bg-[#595959] w-[260px] h-[100px] rounded-[15px] flex items-center justify-center gap-4 shadow-[0_13px_70px_0_rgba(0,0,0,0.25)]">
                    <img
                      src={MusicNote}
                      alt="Music Note"
                      className="w-[40px] h-[40px]"
                    />
                    <span className="text-white text-[36px] font-bold archivo-font">
                      {scoreData.totalScore}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
