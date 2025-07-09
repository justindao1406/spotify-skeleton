import React from "react";
import GearIcon from "@/assets/GearIcon.svg";
import EditProfile from "@/assets/EditProfile.svg";

export default function HeaderSection() {
  return (
    <div className="relative px-[10px] pt-10">
      {/* Profile Title */}
      <h1 className="text-white text-2xl archivo-font font-bold">Profile</h1>

      {/* Settings and Edit Profile Icons */}
      <div className="absolute top-0 right-[18px] flex gap-5 pt-11">
        <img src={EditProfile} alt="Edit" className="w-6 h-6" />
        <img src={GearIcon} alt="Settings" className="w-6 h-6" />
      </div>
    </div>
  );
}
