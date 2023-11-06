import ToggleSwitch from "./switch/ToggleSwitch";

const HeaderResults = ({
  setDayTime,
  dayTime,
}: {
  dayTime: boolean;
  setDayTime: Function;
}) => {
  return (
    <header className="flex items-center justify-between bg-slate-100 py-2 rounded-lg">
      <div className="flex items-center gap-x-2">
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
        <h6 className="font-semibold text-[#053B50] text-lg">نتایج زنده</h6>
        ||
        <div className="w-[150px] rounded-lg text-[#053B50] font-bold border border-green-300">
          <button
            onClick={() => setDayTime(true)}
            className={`w-1/2 transition-all duration-300 ${
              dayTime
                ? "bg-green-600 text-white"
                : "bg-transparent text-[#053B50]"
            } rounded-r-lg py-1`}
          >
            دیروز
          </button>
          <button
            onClick={() => setDayTime(false)}
            className={`w-1/2 transition-all duration-300 ${
              !dayTime
                ? "bg-green-600 text-white"
                : "bg-transparent text-[#053B50]"
            } rounded-l-lg py-1`}
          >
            امروز
          </button>
        </div>
      </div>

      <div className="flex items-center gap-x-2 text-[#053B50]">
        <p className=" text-sm">{new Date().toLocaleDateString("fa-IR")}</p>|
        <div className="flex items-center">
          <span className="ml-3 font-semibold"> مسابقات زنده</span>
          <ToggleSwitch />
        </div>
      </div>
    </header>
  );
};

export default HeaderResults;
