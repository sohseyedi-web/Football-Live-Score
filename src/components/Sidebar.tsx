import { FC } from "react";
import Bundes from "../assets/bundesliga.svg";
import Premier from "../assets/premier-league.svg";
import laliga from "../assets/la-liga-2023.svg";
import One from "../assets/ligue-1.svg";
import Seriea from "../assets/Serie_A.svg";
import Lige from "../assets/liga-portugal.svg";
import { Link } from "react-router-dom";
import { useFootball } from "../context/FootballProvider";
import Back from "./common/Back";

const Links = [
  { id: 1, name: "بوندس لیگا", logo: Bundes },
  { id: 2, name: "لالیگا اسپانیا", logo: laliga },
  { id: 3, name: "پریمیر لیگ", logo: Premier },
  { id: 4, name: "لیگ وان فرانسه", logo: One },
  { id: 5, name: "سری آ ایتالیا", logo: Seriea },
  { id: 6, name: "لیگا پرتغال", logo: Lige },
];

const Sidebar: FC = () => {
  const { activeNavbar } = useFootball();

  return (
    <>
      <Back />
      <aside
        className={`${
          activeNavbar ? "w-[250px] right-0 top-0" : "-right-24 w-0 hidden top-0"
        } lg:relative absolute z-50 h-screen bg-slate-100 text-[#053B50] border-l border-gray-300 py-2 px-3 rounded space-y-3 transition-all duration-300`}
      >
        <h3 className="text-xl font-semibold text-[#053B50] mb-">
          دسته بندی لیگ ها
        </h3>
        {Links.map((item) => (
          <Link
            to={"/"}
            key={item.id}
            className="flex items-center gap-x-2 w-full text-[#053B50] bg-transparent hover:bg-white transition-all rounded-md px-2"
          >
            <div className="w-16 h-16 flex items-center justify-center rounded-full">
              <img
                src={item.logo}
                alt={item.name}
                className="w-10 h-10 object-contain rounded-sm"
              />
            </div>
            <h4 className=" text-[#053B50] font-semibold">{item.name}</h4>
          </Link>
        ))}
      </aside>
    </>
  );
};

export default Sidebar;
