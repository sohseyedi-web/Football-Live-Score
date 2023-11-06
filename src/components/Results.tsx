import { matchesType } from "../utils/types";
import ToggleSwitch from "./common/switch/ToggleSwitch";

const Results = ({ matchesList }: { matchesList: matchesType[] }) => {
  return (
    <section className="lg:w-[70%] w-full mx-auto bg-slate-100 p-2">
      <header className="flex items-center justify-between bg-slate-100 py-2 rounded-lg">
        <div className="flex items-center gap-x-2">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          <h6 className="font-semibold text-[#053B50] text-lg">نتایج زنده</h6>
        </div>
        <div className="flex items-center gap-x-2 text-[#053B50]">
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
          <div
            key={data.id}
            className="flex items-center py-1 my-2 border-b border-gray-400 last:border-none"
          >
            <p className="w-[10%] text-lg font-semibold">
              {new Date(data?.utcDate).toLocaleTimeString("fa-IR").slice(0, -3)}
            </p>
            <div className="flex-1 flex items-center justify-center w-[80%]">
              <div className="flex items-center gap-x-2 text-[#053B50] w-[45%]">
                <img
                  src={data?.homeTeam?.crest}
                  alt={data?.homeTeam?.name}
                  className="w-8 h-8 object-contain"
                />
                <h3 className="text-lg font-semibold text-[#053B50]">
                  {data?.homeTeam?.name}
                </h3>
                <span>{data?.score?.fullTime.home}</span>
              </div>
              <div className="flex items-center gap-x-5 text-[#053B50]">
                <span className="text-xl">
                  {data?.score?.fullTime.home ?? 0}
                </span>
                -
                <span className="text-xl">
                  {data?.score?.fullTime.away ?? 0}
                </span>
              </div>
              <div className="flex items-center justify-end gap-x-2 text-[#053B50] w-[45%]">
                <h3 className="text-lg font-semibold">
                  {data?.awayTeam?.name}
                </h3>
                <img
                  src={data?.awayTeam?.crest}
                  alt={data?.awayTeam?.name}
                  className="w-8 h-8 object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Results;
