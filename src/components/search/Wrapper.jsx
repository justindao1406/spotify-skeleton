export default function Wrapper({ children }) {
  return (
    <div className="flex w-full min-h-screen bg-[#0F0F0F]">
      <div className="w-full relative pb-[144px] px-[18px]">{children}</div>
    </div>
  );
}
