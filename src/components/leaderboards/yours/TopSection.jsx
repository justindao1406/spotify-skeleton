import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function TopSection({ cardColor }) {
  return (
    <div
      className={`z-20 relative rounded-t-[10px] overflow-hidden border-transparent
       ${
         cardColor === "purple" &&
         "bg-gradient-to-r from-[#AE8DF0] to-[#D99D8B] transition-colors duration-300"
       }
       ${
         cardColor === "red" &&
         "bg-gradient-to-r from-[#FF8484] to-[#AA3333] transition-colors duration-300"
       }
       ${
         cardColor === "blue" &&
         "bg-gradient-to-r from-[#5862D1] to-[#3547BE] transition-colors duration-300"
       }
       ${
         cardColor === "green" &&
         "bg-gradient-to-r from-[#A6FC9C] to-[#31B422] transition-colors duration-300"
       }
       ${
         cardColor === "gray" &&
         "bg-gradient-to-r from-[#222222] via-[#222222] to-[#222222] transition-colors duration-300"
       } p-[1.2px]`}
    >
      <div
        className={`rounded-t-[9px] 
        ${
          cardColor === "purple" &&
          "bg-gradient-to-r from-[#793FEF] via-[#AF539A] to-[#E86842] transition-colors duration-300"
        } 
        ${
          cardColor === "red" &&
          "bg-gradient-to-r from-[#AA3333] via-[#772323] to-[#441414] transition-colors duration-300"
        }
        ${
          cardColor === "blue" &&
          "bg-gradient-to-r from-[#3547BE] via-[#27348C] to-[#192158] transition-colors duration-300"
        }
        ${
          cardColor === "green" &&
          "bg-gradient-to-r from-[#48A73E] via-[#32742B] to-[#1C4118] transition-colors duration-300"
        }
        ${
          cardColor === "gray" &&
          "bg-gradient-to-r from-[#222222] via-[#222222] to-[#222222] transition-colors duration-300"
        }
        p-4 flex items-center`}
      >
        <Avatar className="w-[90px] h-[90px] ml-[4px]">
          <AvatarFallback className="bg-[#4A4A4A]"></AvatarFallback>
        </Avatar>
        <div className="flex-1 flex justify-center">
          <h2 className="text-white font-bold text-[18px] archivo-font">
            Justin__Dao123
          </h2>
        </div>
      </div>
    </div>
  );
}
