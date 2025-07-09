import HeaderSection from "../components/leaderboards/global/HeaderSection";
import TabsSection from "../components/leaderboards/TabsSection";
import GlobalLeaderboard from "../components/leaderboards/global/GlobalLeaderboard";
import DateSection from "../components/leaderboards/global/DateSection";
import Wrapper from "../components/leaderboards/Wrapper";
import FriendLeaderboard from "../components/leaderboards/friends/FriendLeaderboard";
import CardSection from "../components/leaderboards/yours/CardSection";
import PageLayout from "../components/leaderboards/yours/PageLayout";
import DateColorSection from "../components/leaderboards/yours/DateColorSection";
import MusicRecapSection from "../components/leaderboards/yours/MusicRecapSection";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "@/App.css";

export default function LeaderboardScreen() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [dir, setDir] = useState(null);
  const [cardColor, setCardColor] = useState("purple");

  const globalData = [
    {
      label: "firstplace",
      name: "Mr_Steal_YourGirl69",
      score: 22512,
      song: "No Vancancy",
      artist: "Westside Gunn",
    },
    {
      label: "secondplace",
      name: "bigMAN123",
      score: 16321,
      song: "Summer",
      artist: "Brockhampton",
    },
    {
      label: "thirdplace",
      name: "yourFriend_Steve",
      score: 12345,
      song: "Devil's Dance",
      artist: "Cortex",
    },
  ];

  const friendData = [
    { rank: 1, name: "name 1", score: "22,512", isUser: false, trend: "down" },
    { rank: 2, name: "name 2", score: "20,114", isUser: false, trend: "down" },
    { rank: 3, name: "name 3", score: "19,325", isUser: false, trend: "down" },
    { rank: 4, name: "name 4", score: "17,924", isUser: true, trend: "down" },
    { rank: 5, name: "name 5", score: "16,800", isUser: false, trend: "up" },
    { rank: 6, name: "name 6", score: "15,400", isUser: false, trend: "down" },
    { rank: 7, name: "name 7", score: "14,691", isUser: false, trend: "up" },
    { rank: 8, name: "name 8", score: "13,200", isUser: false, trend: "down" },
    { rank: 9, name: "name 9", score: "12,345", isUser: false, trend: "up" },
    {
      rank: 10,
      name: "name 10",
      score: "11,111",
      isUser: false,
      trend: "down",
    },
  ];

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
      title: "Killing Time",
      artist: "Magdalena Bay",
      cover: "url_to_cover3",
    },
  ];

  return (
    <>
      <Wrapper selectedTab={selectedTab}>
        {/* Header */}
        <HeaderSection />

        {/* Tabs */}
        <TabsSection
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          dir={dir}
          setDir={setDir}
        />

        <AnimatePresence mode="wait">
          {selectedTab === 0 && (
            <>
              {/* Date */}
              <DateSection />
              <motion.div
                key="global"
                initial={{
                  opacity: 0,
                  x: dir === "l" ? 100 : dir === "r" ? -100 : 0,
                }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
              >
                {/* Leaderboard */}
                <GlobalLeaderboard data={globalData} />
              </motion.div>
            </>
          )}

          {selectedTab === 1 && (
            <>
              {/* Date */}
              <DateSection />
              <motion.div
                key="friends"
                initial={{
                  opacity: 0,
                  x: dir === "l" ? 100 : dir === "r" ? -100 : 0,
                }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
              >
                {/* Friends Leaderboard */}
                <FriendLeaderboard friendData={friendData} />
              </motion.div>
            </>
          )}

          {selectedTab === 2 && (
            <motion.div
              key="yours"
              initial={{
                opacity: 0,
                x: dir === "l" ? 100 : dir === "r" ? -100 : 0,
              }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
            >
              <PageLayout>
                <CardSection cardColor={cardColor} topTracks={topTracks} />

                {/* Date Text and Circles */}
                <DateColorSection
                  cardColor={cardColor}
                  setCardColor={setCardColor}
                />

                {/* Music Recap Button */}
                <MusicRecapSection />
              </PageLayout>
            </motion.div>
          )}
        </AnimatePresence>
      </Wrapper>
    </>
  );
}
