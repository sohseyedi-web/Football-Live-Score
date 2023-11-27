import { FC } from "react";
import { useFootball } from "../context/FootballProvider";
import Back from "./common/Back";

const Links = [
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
  const { activeNavbar } = useFootball();

  return (
    <>
      <Back/>
      <aside
        className={`${
          activeNavbar ? "w-[250px] right-0 top-0" : "-right-28 w-0 top-0"
        } fixed z-50 h-screen bg-slate-100 text-[#053B50] border-l border-gray-300 py-2 px-3 rounded space-y-3 transition-all duration-300`}
      >
        <h3 className="text-xl font-semibold text-[#053B50] mb-">
          دسته بندی لیگ ها
        </h3>
        {Links.map((item) => (
          <button
            onClick={() => console.log(item.key)}
            key={item.id}
            className="flex items-center gap-x-2 w-full text-[#053B50] bg-transparent hover:bg-white transition-all rounded-md px-2"
          >
            <h4 className=" text-[#053B50] font-semibold">{item.name}</h4>
          </button>
        ))}
      </aside>
    </>
  );
};

export default Sidebar;
