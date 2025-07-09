import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Checkmark from "@/assets/Checkmark.svg";

export default function DailyStreakSection({ weekDays }) {
  return (
    <div className="px-[4px] mt-6">
      <div className="flex items-center gap-2 mb-2">
        <h2 className="text-white archivo-font font-bold mx-2 text-lg">
          Daily Streak
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
          <HoverCardContent className="w-64 archivo-font text-[14px]">
            Track your daily activity streak every time you open the app. Each
            day will add to your multipler by +0.25x, boosting your total score
          </HoverCardContent>
        </HoverCard>
      </div>

      <div className="p-[1px] rounded-[15px] w-full bg-gradient-to-r from-[#101010] to-[#666666]">
        <Card className="bg-[#222222] rounded-[14px] border-none">
          <CardContent>
            <div className="grid grid-cols-7 gap-[32px]">
              {weekDays.map((d, i) => (
                <div key={i} className="flex flex-col items-center">
                  <span
                    className={`archivo-font text-sm mb-3 ${
                      d.completed
                        ? "text-[#efa111] font-extrabold"
                        : "text-white font-medium"
                    }`}
                  >
                    {d.label}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center ${
                      d.completed
                        ? "bg-gradient-to-b from-[#793fef] to-[#e86842] border-2 border-[#efa111] shadow-[0_0px_1px_6px_rgba(239,161,17,0.20)]"
                        : "bg-[#d9d9d980] border border-neutral-100"
                    }`}
                  >
                    {d.completed && (
                      <img
                        src={Checkmark}
                        alt="Checkmark"
                        className="mt-[2px] w-[22px] h-[22px]"
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
