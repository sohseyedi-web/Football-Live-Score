import { matchesType } from "../utils/types";
import ToggleSwitch from "./common/switch/ToggleSwitch";

const Results = ({ matchesList }: { matchesList: matchesType[] }) => {
  return (
    <section className="lg:w-[70%] w-full mx-auto">
      <header className="flex items-center justify-between bg-slate-100 p-1 rounded-lg">
        <div className="flex items-center gap-x-2">
          <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></span>
          <h6 className="font-semibold text-[#053B50] text-lg">نتایج زنده</h6>
        </div>
        <div className="flex items-center gap-x-2 px-2 text-[#053B50]">
          <p className=" text-sm">{new Date().toLocaleDateString("fa-IR")}</p>|
          <div className="flex items-center">
            <span className="ml-3 font-semibold"> مسابقات زنده</span>
            <ToggleSwitch />
          </div>
        </div>
      </header>
      <hr />
      <div className="">
        {matchesList?.map((data) => (
          <div key={data.id}>
            <p>{data?.homeTeam?.name!}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Results;
