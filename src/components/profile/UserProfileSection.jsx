import { Avatar, AvatarFallback } from "../ui/avatar";
import { Card, CardContent } from "../ui/card";

import React from "react";

export default function UserProfileSection({ userData }) {
  return (
    <div className="relative flex justify-center mt-[64px]">
      {/* User Info Card */}
      <div className="mx-[4px] p-[1px] rounded-[15px] w-full bg-gradient-to-b from-[#101010] to-[#666666]">
        <Card className="bg-[#222222] rounded-[14px] border-none box-border">
          <CardContent className="flex flex-col items-center py-0.5 pt-[18px]">
            <h2 className="text-white font-bold archivo-font text-[18px]">
              {userData.username}
            </h2>
            <div className="flex gap-[80px] mt-3">
              <div className="text-center">
                <p className="text-[#A8A8A8] archivo-font font-medium text-[16px]">
                  followers
                </p>
                <p className="text-white archivo-font font-bold text-[18px] mt-1">
                  {userData.followers}
                </p>
              </div>
              <div className="text-center">
                <p className="text-[#A8A8A8] archivo-font font-medium text-[16px]">
                  following
                </p>
                <p className="text-white archivo-font font-bold text-[18px] mt-1">
                  {userData.following}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Avatar */}
      <div className="absolute -top-[42px]">
        <Avatar className="w-[80px] h-[80px] border-[3px] border-[#7e7e7e] shadow-[0_5px_15px_0_rgba(0,0,0,0.40)]">
          <AvatarFallback className="bg-[#d9d9d9] font-bold">
            {userData.username.charAt(0)}
          </AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}
