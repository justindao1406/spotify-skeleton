import MusicNote from "@/assets/MusicNote.svg";
import Checkmark from "@/assets/Checkmark.svg";

export default function BottomSection({ topTracks }) {
  return (
    <div className="z-10 relative rounded-b-[10px] overflow-hidden border-transparent bg-gradient-to-b from-[#222222] to-[#666666] p-[1.2px]">
      <div className="rounded-b-[10px] bg-[#222222] px-4 py-1">
        {/* Listening Time */}
        <div className="flex items-center gap-1 mb-1">
          <img src={MusicNote} className="w-[36px] h-[36px] text-white" />
          <div className="flex items-baseline gap-2">
            <span className="text-[36px] font-bold text-white archivo-font">
              22,512
            </span>
            <span className="text-[18px] archivo-font font-bold text-[#A8A8A8]">
              (11,256 mins)
            </span>
          </div>
        </div>

        {/* Top Tracks */}
        <div className="mb-2">
          <p
            className="text-[14px] archivo-font text-[#A8A8A8] mb-2 font-semibold"
            style={{ fontStyle: "italic" }}
          >
            Top tracks
          </p>
          <div className="flex gap-4">
            {topTracks.map((track) => (
              <div
                key={track.rank}
                className="text-white text-sm font-bold w-[95px]"
              >
                <div className="w-[95px] h-[95px] bg-[#333] rounded-[5px] mb-2 border border-white"></div>
                <p className="archivo-font font-black text-[20px] break-words tracking-tight leading-tight">
                  {track.rank}.
                  <span className="text-[16px] font-bold archivo-font tracking-tight leading-tight">
                    {" "}
                    {track.title}
                  </span>
                </p>
                <p
                  className="text-[12px] text-[#A8A8A8] archivo-font font-medium break-words pt-[4px] leading-tight"
                  style={{ fontStyle: "italic" }}
                >
                  {track.artist}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className=" text-white archivo-font text-[14px] font-semibold space-y-[8px] pb-[4px]">
          <p>#935 in Global</p>
          <p>#4 in Friends</p>
          <div className="flex items-center gap-2">
            <img src={Checkmark} alt="Checkmark" className="w-5 h-5" />
            <p>5/7 Days logged</p>
          </div>
        </div>
      </div>
    </div>
  );
}
