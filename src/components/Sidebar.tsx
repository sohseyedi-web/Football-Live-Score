import { FC, useState } from "react";
import { useFootball } from "../context/FootballProvider";
import Back from "./common/Back";
import * as RiIcon from "react-icons/ri";
import { useFootballDispatch } from "./../context/FootballProvider";
import { checkInLeague } from "./../utils/checkInleague";
import { keyLeagues } from "../utils/types";

const AllLeagues = [
  { key: "PL", name: "لیگ برتر انگلیس", id: "1" },
  { key: "DED", name: "اردیویسه هلند", id: "2" },
  { key: "PD", name: "لالیگا اسپانیا", id: "3" },
  { key: "ELC", name: "چمپیونشیپ انگلیس", id: "4" },
  { key: "SA", name: "سری آ ایتالیا", id: "5" },
  { key: "BL1", name: "بوندس لیگا آلمان", id: "6" },
  { key: "PPL", name: "لیگا پرتغال", id: "7" },
  { key: "FL1", name: "لیگ وان فرانسه", id: "8" },
  { key: "BSA", name: "لیگ برزیل", id: "9" },
  { key: "CL", name: "لیگ قهرمانان اروپا", id: "10" },
];

const Sidebar: FC = () => {
  const { activeNavbar, keyLeagues } = useFootball();
  const dispatch = useFootballDispatch();
  const [search, setSearch] = useState<string>("");

  const handleLeague = AllLeagues.filter((item) =>
    item.name.includes(search.toLowerCase())
  );

  const handleLeagueList = (value: keyLeagues) => {
    if (checkInLeague(keyLeagues, value)) {
      dispatch({ type: "REMOVE_LEAGUES", payload: value.id });
    } else {
      dispatch({ type: "ADD_LEAGUES", payload: value });
    }
  };

  return (
    <>
      <Back />
      <aside
        className={`${
          activeNavbar ? "w-[280px] right-0 top-0" : "-right-28 w-0 top-0"
        } fixed z-50 h-screen bg-slate-100 text-[#053B50] border-l border-gray-300 py-4 px-3 rounded space-y-3 transition-all duration-300`}
      >
        <h3 className="text-lg font-semibold text-[#053B50] mb-3">
          دسته بندی لیگ ها
        </h3>
        <form className="w-full bg-slate-100 relative h-[35px] rounded-md shadow border border-[#053b50]">
          <input
            className="w-full rounded-md bg-transparent focus:bg-slate-50 transition-all duration-300 outline-none pr-8 h-full"
            type="text"
            placeholder="نام لیگ ...."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <span className="absolute top-1 right-1 text-[#053B50]">
            <RiIcon.RiSearch2Line size={25} />
          </span>
        </form>
        <hr />
        {handleLeague.map((item) => (
          <button
            onClick={() => handleLeagueList(item)}
            key={item.id}
            className="flex w-full items-center justify-between px-2 h-[35px] text-[#053B50]"
          >
            <span className="font-semibold">{item.name}</span>
            {checkInLeague(keyLeagues, item) ? (
              <RiIcon.RiEyeLine
                size={24}
                className="transition-all duration-300"
              />
            ) : (
              <RiIcon.RiEyeCloseLine
                size={24}
                className="transition-all duration-300"
              />
            )}
          </button>
        ))}
      </aside>
    </>
  );
};

export default Sidebar;
