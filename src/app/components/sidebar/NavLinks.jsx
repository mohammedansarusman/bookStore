import { linkItems } from "@/app/contants/variables";
import Link from "next/link";
import { LucideHouse, BookAIcon, BadgeDollarSign, Users, Settings, Newspaper } from "lucide-react";
const IconMaps = { LucideHouse, BookAIcon, BadgeDollarSign, Users, Settings, Newspaper };


export const NavLinks = () => {
  return (
    <div className="flex flex-col items-center gap-5 ">
      {linkItems.map((item) => {
        const Icon = IconMaps[item.icon]
        return (<Link href={item.href} 
            key={item.name}
        >
          <div
            className="w-10 h-10 px-2 md:w-50
            bg-purple-200 flex justify-between items-center hover:bg-purple-300 transition-colors duration-300"
          >
            <Icon/>
            <p className="hidden md:block">{item.name}</p>
          </div>
        </Link>)
      })}
    </div>
  );
};
