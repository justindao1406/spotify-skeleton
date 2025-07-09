import React from "react";
import { motion } from "framer-motion";

export default function TabsSection({
  selectedTab,
  setSelectedTab,
  dir,
  setDir,
}) {
  const handleTabClick = (val) => {
    if (typeof selectedTab === "number" && typeof val === "number") {
      setDir(selectedTab > val ? "r" : "l");
    } else if (val === null) {
      setDir(null);
    }
    setSelectedTab(val);
  };

  return (
    <div className="px-[4px] mt-10 pr-[160px]">
      <div className="flex w-full h-[44px] bg-[#434343] rounded-full text-white font-bold text-sm justify-around gap-2 items-center p-1">
        {[
          { label: "Now", value: 0 },
          { label: "History", value: 1 },
        ].map((tab) => (
          <button
            onClick={() => handleTabClick(tab.value)}
            className={`relative flex-1 rounded-full h-[36px] archivo-font font-extrabold text-[16px] flex items-center justify-center transition-colors duration-200
                  ${
                    selectedTab === tab.value
                      ? "text-white"
                      : "bg-transparent text-[rgba(255,255,255,0.40)]"
                  }`}
          >
            {selectedTab === tab.value && (
              <motion.div
                layoutId="active-pill"
                className="absolute inset-0 bg-[#737373] rounded-full"
                initial={false}
                transition={{ type: "spring", stiffness: 500, damping: 35 }}
              />
            )}
            <span className="relative z-10">{tab.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
