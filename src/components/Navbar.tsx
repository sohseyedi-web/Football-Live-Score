import { FC } from "react";
import * as IoIcon from "react-icons/io5";

const Navbar: FC = () => {
  return (
    <nav className="w-full py-4 border-b border-gray-300">
      <div className="flex items-center justify-between mx-auto px-3">
        <div className="flex items-center gap-x-2 text-[#053B50]">
          <IoIcon.IoFootballOutline size={40} />
          <h1 className="text-2xl font-bold md:text-3xl">فوتلایو</h1>
        </div>
        <div className="flex items-center justify-center gap-x-2">
          <button className="navBtn hover:rotate-180 rotate-0 hover:bg-transparent hover:text-[#053B50]">
            <IoIcon.IoSettingsOutline size={26} />
          </button>
          <button className="navBtn icon">
            <IoIcon.IoNotificationsOutline size={26} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
