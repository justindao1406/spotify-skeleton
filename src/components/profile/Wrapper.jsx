export default function Wrapper({ children }) {
  return (
    <div className="flex w-full min-h-screen bg-gradient-to-b from-[#0F0F0F] from-70% via-95% to-[#383838] overflow-x-hidden">
      <div className="w-full relative pb-[144px] px-[18px]">{children}</div>
    </div>
  );
}
