import {
  useFootball,
  useFootballDispatch,
} from "../../context/FootballProvider";
import ToggleSwitch from "./switch/ToggleSwitch";

const HeaderMatches = () => {
  const { dayTime } = useFootball();
  const dispatch = useFootballDispatch();

  return (
    <header className=" space-y-2 py-2 px-1">
      <div className="flex items-center justify-between px-1">
        <div className="flex items-center gap-x-1">
          <h6 className="font-semibold text-[#053B50] lg:text-lg text-base">نتایج زنده</h6>
        </div>
        <p className=" text-sm text-[#053B50]">
          {new Date().toLocaleDateString("fa-IR")}
        </p>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-2">
          <div className="lg:w-[225px] w-[180px] rounded-lg text-[#053B50] lg:text-base text-sm font-bold border border-green-300">
            <button
              onClick={() => dispatch({ type: "ACTIVE_DAY", payload: -1 })}
              className={`w-1/3 transition-all duration-300 ${
                dayTime == -1
                  ? "bg-green-600 text-white"
                  : "bg-transparent text-[#053B50]"
              } rounded-r-lg py-1`}
            >
              دیروز
            </button>
            <button
              onClick={() => dispatch({ type: "ACTIVE_DAY", payload: 0 })}
              className={`w-1/3 transition-all duration-300 ${
                dayTime == 0
                  ? "bg-green-600 text-white"
                  : "bg-transparent text-[#053B50]"
              }  py-1`}
            >
              امروز
            </button>
            <button
              onClick={() => dispatch({ type: "ACTIVE_DAY", payload: 1 })}
              className={`w-1/3 transition-all duration-300 ${
                dayTime == 1
                  ? "bg-green-600 text-white"
                  : "bg-transparent text-[#053B50]"
              } rounded-l-lg py-1`}
            >
              فردا
            </button>
          </div>
        </div>
        <div className="flex items-center">
          <span className="ml-3 font-semibold lg:text-base text-sm"> مسابقات زنده</span>
          <ToggleSwitch />
        </div>
      </div>
    </header>
  );
};

export default HeaderMatches;
