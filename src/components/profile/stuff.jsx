{
  /* 2nd Place */
}
<div className="flex flex-col items-center w-[140px]">
  <div
    className="text-[#CDCDCD] text-[24px] font-black archivo-font"
    style={{ fontStyle: "italic" }}
  >
    #2
  </div>
  <Avatar className="w-18 h-18 mb-2 border-2 border-white">
    <AvatarFallback className="bg-[#4A4A4A]">BM</AvatarFallback>
  </Avatar>
  <div className="text-[14px] font-bold archivo-font text-center mb-2 text-white">
    {data[1].name}
  </div>
  <div className="relative">
    {/* Score Box */}
    <div className="absolute left-1/2 bottom-[88px] -translate-x-1/2 bg-[rgba(72,72,72,0.50)] rounded-[10px] flex justify-center items-center py-[8px] shadow-lg w-[104px]">
      <div className="flex items-center justify-center gap-1 w-full">
        <img
          src={MusicNote}
          alt="Music Note"
          className="w-[28px] h-[28px]"
          style={{
            filter: "brightness(0) saturate(0%) invert(83%)",
          }}
        />
        <span className="text-[#D5D5D5] text-[20px] archivo-font font-bold">
          {data[1].score.toLocaleString()}
        </span>
      </div>
    </div>
    {/* Album Cover */}
    <div className="absolute left-1/2 bottom-[-28px] border border-white -translate-x-1/2 w-[108px] h-[108px] bg-[#4A4A4A] rounded-[5px] shadow-lg"></div>
    {/* Album Info */}
    <div className="absolute left-1/2 bottom-[-116px] -translate-x-1/2 w-[108px] pl-[4px] text-left">
      <div
        className="text-[12px] text-[#A8A8A8] mb-1 archivo-font"
        style={{ fontStyle: "italic" }}
      >
        Top Track
      </div>
      <div className="text-[16px] text-white font-bold mb-1 archivo-font">
        {data[1].song}
      </div>
      <div
        className="text-[14px] text-white mb-1 archivo-font"
        style={{ fontStyle: "italic" }}
      >
        {data[1].artist}
      </div>
    </div>
    {/* Podium*/}
    <div className="p-[3px] rounded-t-[13px] bg-gradient-to-b from-[#793FEF] to-[#E86842]">
      <div className="w-20 h-[225px] bg-gradient-to-b from-[#A173FF] to-[#D49684] rounded-t-[12px] flex items-end justify-center pb-2"></div>
    </div>
  </div>
</div>;
