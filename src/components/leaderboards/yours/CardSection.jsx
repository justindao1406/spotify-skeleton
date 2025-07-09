import TopSection from "./TopSection";
import BottomSection from "./BottomSection";
import useTiltCard from "@/hooks/useTiltCard";

export default function CardSection({ cardColor, topTracks }) {
  const {
    cardRef,
    glareRef,
    handleMouseDown,
    handleMouseMove,
    handleTouchStart,
    onTouchMove,
    cancelTilt,
  } = useTiltCard();
  return (
    <div
      className="relative select-none overflow-hidden"
      onMouseDown={handleMouseDown}
      onMouseUp={cancelTilt}
      onMouseMove={handleMouseMove}
      onTouchStart={handleTouchStart}
      onTouchEnd={cancelTilt}
      onTouchMove={onTouchMove}
      onMouseLeave={cancelTilt}
      onTouchCancel={cancelTilt}
      ref={cardRef}
    >
      {/* Glare effect */}
      <div
        ref={glareRef}
        className="top-55 left-45 rounded-[400px] absolute w-[1000px] h-[1000px] pointer-events-none bg-white z-60 blur-[150px]"
        style={{
          background: `radial-gradient(circle at center, rgba(255,255,255,0.25), transparent 60%)`,
          opacity: 0,
        }}
      />
      {/* Top Section */}
      <TopSection cardColor={cardColor} />
      {/* Bottom Section */}
      <BottomSection topTracks={topTracks} />
    </div>
  );
}
