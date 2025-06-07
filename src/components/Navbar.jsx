import React from "react";
import { Outlet } from "react-router-dom";
import {
  UserIcon,
  MagnifyingGlassCircleIcon,
  TrophyIcon,
} from "@heroicons/react/24/outline";
import {
  UserIcon as UserSolid,
  MagnifyingGlassCircleIcon as SearchSolid,
  TrophyIcon as TrophySolid,
} from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("profile");

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0">
        <div className="flex items-center justify-around bg-gradient-to-r from-[#3a0d5e] via-[#2b014f] to-[#1a002f] h-20 rounded-t-3xl">
          <NavLink
            to="/leaderboard"
            onClick={() => setActive("leaderboard")}
            className="relative p-3 rounded-3xl hover:bg-white/10 transition-colors duration-200"
          >
            <TrophyIcon
              className={`absolute inset-0 text-white w-6 h-6 transition-opacity duration-200 ${
                active === "leaderboard" ? "opacity-0" : "opacity-100"
              }`}
            />
            <TrophySolid
              className={`absolute inset-0 text-white w-6 h-6 transition-opacity duration-200 ${
                active === "leaderboard" ? "opacity-100" : "opacity-0"
              }`}
            />
          </NavLink>
          <NavLink
            to="/search"
            onClick={() => setActive("search")}
            className="relative p-3 rounded-3xl hover:bg-white/10 transition-colors duration-200"
          >
            <MagnifyingGlassCircleIcon
              className={`absolute inset-0 text-white w-6 h-6 transition-opacity duration-200 ${
                active === "search" ? "opacity-0" : "opacity-100"
              }`}
            />
            <SearchSolid
              className={`absolute inset-0 text-white w-6 h-6 transition-opacity duration-200 ${
                active === "search" ? "opacity-100" : "opacity-0"
              }`}
            />
          </NavLink>
          <NavLink
            to="/profile"
            onClick={() => setActive("profile")}
            className="relative p-3 rounded-3xl hover:bg-white/10 transition-colors duration-200"
          >
            <UserIcon
              className={`absolute inset-0 text-white w-6 h-6 transition-opacity duration-200 ${
                active === "profile" ? "opacity-0" : "opacity-100"
              }`}
            />
            <UserSolid
              className={`absolute inset-0 text-white w-6 h-6 transition-opacity duration-200 ${
                active === "profile" ? "opacity-100" : "opacity-0"
              }`}
            />
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
