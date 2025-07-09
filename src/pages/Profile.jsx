import React from "react";
import { useState } from "react";
import TopTrackSection from "../components/profile/TopTrackSection";
import GraphCardSection from "../components/profile/GraphCardSection";
import ScoreSection from "../components/profile/ScoreSection";
import DailyStreakSection from "../components/profile/DailyStreakSection";
import MostListenedSection from "../components/profile/MostListenedSection";
import UserProfileSection from "../components/profile/UserProfileSection";
import HeaderSection from "../components/profile/HeaderSection";
import TabsSection from "../components/profile/TabsSection";
import Wrapper from "../components/profile/Wrapper";
import MagicWays from "@/assets/MagicWays.png";
import { motion } from "framer-motion";

export default function ProfileScreen() {
  const [selectedTabProfile, setSelectedTabProfile] = useState(0);
  const [dir, setDir] = useState(null);

  const img = new Image();
  img.src = MagicWays;

  const userData = {
    username: "Justin__Dao123",
    followers: 10,
    following: 11,
    avatar: "",
  };

  const weekDays = [
    { label: "M", completed: false },
    { label: "T", completed: false },
    { label: "W", completed: true },
    { label: "T", completed: false },
    { label: "F", completed: true },
    { label: "S", completed: false },
    { label: "S", completed: false },
  ];

  const scoreData = {
    listeningTime: "11,256",
    dayMultiplier: "2.0",
    totalScore: "22,512",
  };

  const topTracks = [
    {
      rank: 1,
      title: "Dancing with Demons",
      artist: "Leon Thomas",
      cover: "url_to_cover1",
    },
    {
      rank: 2,
      title: "The Place Where He Inserted the Blade",
      artist: "Black Country New Road",
      cover: "url_to_cover2",
    },
    {
      rank: 3,
      title: "Imaginal Disk",
      artist: "Magdalena Bay",
      cover: "url_to_cover3",
    },
  ];

  const data = [
    {
      name: "Monday",
      uv: 4000,
      pv: 2400,
      amt: 2400,
      completed: false,
    },
    {
      name: "Tuesday",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Wednesday",
      uv: 2000,
      pv: 9800,
      amt: 2290,
      completed: true,
    },
    {
      name: "Thursday",
      uv: 2780,
      pv: 3908,
      amt: 2000,
      completed: false,
    },
    {
      name: "Friday",
      uv: 1890,
      pv: 4800,
      amt: 2181,
      completed: true,
    },
    {
      name: "Saturday",
      uv: 2390,
      pv: 3800,
      amt: 2500,
      completed: false,
    },
    {
      name: "Sunday",
      uv: 3490,
      pv: 4300,
      amt: 2100,
      completed: false,
    },
  ];

  return (
    <Wrapper>
      {/* Header */}
      <HeaderSection />

      {/* Avatar and User Info combined */}
      <UserProfileSection userData={userData} />

      {/* Daily Streak */}
      <DailyStreakSection weekDays={weekDays} />

      {/* Score */}
      <ScoreSection scoreData={scoreData} />

      {/* Tabs */}
      <TabsSection
        selectedTabProfile={selectedTabProfile}
        setSelectedTabProfile={setSelectedTabProfile}
        dir={dir}
        setDir={setDir}
      />

      {selectedTabProfile === 0 && (
        <motion.div
          key="now"
          initial={{
            opacity: 0,
            x: dir === "l" ? 100 : dir === "r" ? -100 : 0,
          }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
        >
          {/* Graph Card */}
          <GraphCardSection data={data} />

          {/* Top Tracks */}
          <TopTrackSection topTracks={topTracks} />
        </motion.div>
      )}

      {selectedTabProfile === 1 && (
        <motion.div
          key="history"
          initial={{
            opacity: 0,
            x: dir === "l" ? 100 : dir === "r" ? -100 : 0,
          }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
        >
          <MostListenedSection />
        </motion.div>
      )}
    </Wrapper>
  );
}
