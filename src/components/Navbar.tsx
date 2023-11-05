import { FC } from "react";
import * as IoIcon from "react-icons/io5";

const Navbar: FC = () => {
  return (
    <nav className="flex items-center justify-between max-w-7xl mx-auto px-3 md:px-0 py-4">
      <div className="flex items-center gap-x-2">
        <IoIcon.IoFootballOutline size={40} className="text-[#26abb8]" />
        <h1 className="text-3xl font-bold text-[#26abb8] ">فوتلایو</h1>
      </div>
      <div className="flex items-center justify-center gap-x-2">
        <button className="navBtn hover:rotate-180 rotate-0 hover:bg-transparent hover:text-[#26abb8]">
          <IoIcon.IoSettingsOutline size={26} />
        </button>
        <button className="navBtn icon">
          <IoIcon.IoNotificationsOutline size={26} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
