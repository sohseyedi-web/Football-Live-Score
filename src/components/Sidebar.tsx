import { FC } from "react";
import Bundes from "../assets/bundesliga.svg";
import Premier from "../assets/premier-league.svg";
import laliga from "../assets/la-liga-2023.svg";
import One from "../assets/ligue-1.svg";
import Seriea from "../assets/Serie_A.svg";
import Lige from "../assets/liga-portugal.svg";
import { Link } from "react-router-dom";

const Links = [
  { id: 1, name: "بوندس لیگا", logo: Bundes },
  { id: 2, name: "لالیگا اسپانیا", logo: laliga },
  { id: 3, name: "پریمیر لیگ", logo: Premier },
  { id: 4, name: "لیگ وان فرانسه", logo: One },
  { id: 5, name: "سری آ ایتالیا", logo: Seriea },
  { id: 6, name: "لیگا پرتغال", logo: Lige },
];

const Sidebar: FC = () => {
  return (
    <>
      <aside className="lg:w-[250px] w-[65px] bg-[#eee] border-l border-gray-300 lg:py-2 py-1 px-3 rounded space-y-3">
        <h3 className="text-xl font-semibold text-[#053B50] mb-3 lg:block hidden">
          دسته بندی لیگ ها
        </h3>
        {Links.map((item) => (
          <Link
            to={"/"}
            key={item.id}
            className="flex items-center gap-x-2 w-full bg-transparent hover:bg-white transition-all rounded-md px-2"
          >
            <div className="w-16 h-16 flex items-center justify-center rounded-full">
              <img
                src={item.logo}
                alt={item.name}
                className="w-10 h-10 object-contain rounded-sm"
              />
            </div>
            <h4 className=" text-[#053B50] font-semibold lg:block hidden">{item.name}</h4>
          </Link>
        ))}
      </aside>
    </>
  );
};

export default Sidebar;
