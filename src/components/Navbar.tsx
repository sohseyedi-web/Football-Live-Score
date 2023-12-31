import { FC } from "react";
import * as IoIcon from "react-icons/io5";
import { RiGithubLine } from "react-icons/ri";
import { useFootballDispatch } from "../context/FootballProvider";

const Navbar: FC = () => {
  const dispatch = useFootballDispatch();

  return (
    <nav className="w-full py-4 border-b border-gray-300">
      <div className="flex items-center justify-between mx-auto px-3">
        <div className="flex items-center gap-x-2 text-[#053B50]">
          <IoIcon.IoFootballOutline size={40} />
          <h1 className="text-2xl font-bold md:text-3xl">فوتلایو</h1>
        </div>

        <div className="flex items-center justify-center gap-x-2">
          <button
            onClick={() => dispatch({ type: "ACTIVE_NAVBAR" })}
            className="navBtn hover:rotate-180 rotate-0 hover:bg-transparent hover:text-[#053B50]"
          >
            <IoIcon.IoSettingsOutline size={26} />
          </button>
          <button className="navBtn icon">
            <a
              href="https://github.com/sohseyedi-web/Football-Live-Score"
              target={"_blank"}
            >
              <RiGithubLine size={26} />
            </a>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
