import { motion } from "framer-motion";

export default function DateColorSection({
  cardColor,
  setCardColor,
  handleFlip,
  nextCardColor,
}) {
  const colorOptions = [
    {
      color: "purple",
      bg: "bg-gradient-to-b from-[#793FEF] to-[#E86842]",
    },
    { color: "red", bg: "bg-[#A73232]" },
    { color: "blue", bg: "bg-[#3345B8]" },
    { color: "green", bg: "bg-[#47A43C]" },
    { color: "gray", bg: "bg-[#222222]" },
  ];

  return (
    <div className="flex justify-between items-start mb-4 pt-[16px]">
      <p className="text-[#606060] archivo-font text-[20px] font-extrabold archivo-font">
        June 4-10
      </p>
      <div className="flex gap-6">
        {colorOptions.map(({ color, bg }) => (
          <div key={color} className="flex flex-col items-center">
            <button
              onClick={() => setCardColor(color)}
              className={`w-7 h-7 ${bg} rounded-full ${
                cardColor === color
                  ? "border-white border-3"
                  : "border-white border-1"
              }`}
            ></button>
            {cardColor === color && (
              <motion.div
                layoutId="active-color"
                className="w-1 h-1 bg-white rounded-full mt-2"
                initial={false}
                transition={{
                  type: "spring",
                  stiffness: 800,
                  damping: 35,
                }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
