import Link from "next/link";
import { NavLinks } from "./NavLinks";
import { LogOut } from "lucide-react";
export const SideBar = () => {
  return (
    <div className="w-15 h-screen md:w-70  bg-purple-100 flex flex-col justify-start fixed">
      <div>
        {/* Navigation Links */}
        <div className="w-full flex justify-center pt-10">
            <NavLinks />
        </div>
        {/* Sign out button */}
        <form className="w-full flex justify-center items-center pt-5">
            <button className="bg-purple-200 hover:bg-purple-300 transition-colors duration-300 
            w-10 h-10 px-2 flex justify-between items-center md:w-50">
              <LogOut className="block"/>
              <p className="hidden md:block">Sign Out</p>
            </button>
        </form>
      </div>
    </div>
  );
};
