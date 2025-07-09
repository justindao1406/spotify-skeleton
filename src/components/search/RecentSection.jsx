import React from "react";

export default function RecentSection() {
  return (
    <div className="px-[4px] mt-[20px]">
      <div className="flex items-center gap-2 mb-2">
        <h2 className="text-white archivo-font font-bold mx-2 text-[20px]">
          Recent
        </h2>
      </div>
      <div className="flex flex-col items-start gap-[20px] mt-[20px] px-[14px]">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gray-400 rounded-full" />
          <div className="flex flex-col items-start mt-[8px]">
            <span className="archivo-font text-[16px] font-medium text-white">
              name 1
            </span>
            <span className="archivo-font text-[12px] font-medium text-[#A8A8A8] h-[8px]">
              Following
            </span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gray-400 rounded-full" />
          <div className="flex flex-col items-start mt-[8px]">
            <span className="archivo-font text-[16px] font-medium text-white">
              name 2
            </span>
            <span className="archivo-font text-[12px] font-medium text-[#A8A8A8] h-[8px]">
              Follow back
            </span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gray-400 rounded-full" />
          <span className="archivo-font text-[16px] font-medium text-white">
            name 3
          </span>
        </div>
      </div>
    </div>
  );
}
