import {
  useContext,
  createContext,
  useReducer,
  ReactNode,
  Dispatch,
} from "react";
import { keyLeagues } from "../utils/types";

type initial = {
  liveFootball: boolean;
  activeNavbar: boolean;
  dayTime: number;
  keyLeagues: keyLeagues[];
};

const FootContext = createContext(null);
const FootContextAction = createContext<Dispatch<any> | null>(null);

const initialState: initial = {
  liveFootball: false,
  dayTime: 0,
  activeNavbar: false,
  keyLeagues: [
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
  ],
};
const footReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "ACTIVE_LIVE":
      return {
        ...state,
        liveFootball: !state.liveFootball,
      };
    case "ACTIVE_DAY":
      return {
        ...state,
        dayTime: action.payload,
      };
    case "ACTIVE_NAVBAR":
      return {
        ...state,
        activeNavbar: !state.activeNavbar,
      };
    case "ADD_LEAGUES":
      return {
        ...state,
        leagues: [...state.keyLeagues, action.payload],
      };
    case "REMOVE_LEAGUES":
      return {
        ...state,
        leagues: state.keyLeagues.filter((item) => item.id !== action.payload),
      };

    default:
      state;
  }
};

const FootballProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch]: any = useReducer(footReducer, initialState);

  return (
    <FootContext.Provider value={state}>
      <FootContextAction.Provider value={dispatch}>
        {children}
      </FootContextAction.Provider>
    </FootContext.Provider>
  );
};

export default FootballProvider;

export const useFootball = () => useContext(FootContext)!;
export const useFootballDispatch = () => useContext(FootContextAction)!;
