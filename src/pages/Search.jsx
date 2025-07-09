import React from "react";
import "@/App.css";
import SearchBarSection from "../components/search/SearchBarSection";
import NavbarSection from "../components/search/NavbarSection";
import HeaderSection from "../components/search/HeaderSection";
import RecentSection from "../components/search/RecentSection";
import TopListenersSection from "../components/search/TopListenersSection";
import Wrapper from "../components/search/Wrapper";

export default function SearchScreen() {
  return (
    <Wrapper>
      {/* Header */}
      <HeaderSection />

      {/* Search bar */}
      <SearchBarSection />

      {/* Recent */}
      <RecentSection />

      {/* Top listeners this week */}
      <TopListenersSection />

      {/* Navbar */}
      <NavbarSection />
    </Wrapper>
  );
}
