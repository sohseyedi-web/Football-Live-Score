import {
  useFootball,
  useFootballDispatch,
} from "../../context/FootballProvider";
import ToggleSwitch from "./switch/ToggleSwitch";

const HeaderResults = () => {
  const { dayTime } = useFootball();
  const dispatch = useFootballDispatch();

  return (
    <header className=" space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-1">
          <h6 className="font-semibold text-[#053B50] text-lg">نتایج زنده</h6>
        </div>
        <p className=" text-sm text-[#053B50]">
          {new Date().toLocaleDateString("fa-IR")}
        </p>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-2">
          <div className="w-[225px] rounded-lg text-[#053B50] font-bold border border-green-300">
            <button
              onClick={() => dispatch({ type: "ACTIVE_DAY", payload: "0" })}
              className={`w-1/3 transition-all duration-300 ${
                dayTime === "0"
                  ? "bg-green-600 text-white"
                  : "bg-transparent text-[#053B50]"
              } rounded-r-lg py-1`}
            >
              دیروز
            </button>
            <button
              onClick={() => dispatch({ type: "ACTIVE_DAY", payload: "1" })}
              className={`w-1/3 transition-all duration-300 ${
                dayTime === "1"
                  ? "bg-green-600 text-white"
                  : "bg-transparent text-[#053B50]"
              }  py-1`}
            >
              امروز
            </button>
            <button
              onClick={() => dispatch({ type: "ACTIVE_DAY", payload: "2" })}
              className={`w-1/3 transition-all duration-300 ${
                dayTime === "2"
                  ? "bg-green-600 text-white"
                  : "bg-transparent text-[#053B50]"
              } rounded-l-lg py-1`}
            >
              فردا
            </button>
          </div>
        </div>
        <div className="flex items-center">
          <span className="ml-3 font-semibold"> مسابقات زنده</span>
          <ToggleSwitch />
        </div>
      </div>
    </header>
  );
};

export default HeaderResults;
