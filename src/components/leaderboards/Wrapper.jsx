export default function Wrapper({ children, selectedTab }) {
  return (
    <div className="flex w-full min-h-screen bg-[#0F0F0F] overflow-x-hidden">
      <div
        className={`flex w-full min-h-screen ${
          selectedTab === 0 || selectedTab === 2
            ? "bg-gradient-to-b from-[#0F0F0F] from-70% via-95% to-[#383838]"
            : "bg-[#0F0F0F]"
        }`}
      >
        <div className="w-full relative pb-[124px] px-[18px]">{children}</div>
      </div>
    </div>
  );
}
