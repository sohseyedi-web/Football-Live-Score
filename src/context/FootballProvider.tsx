import {
  useContext,
  createContext,
  useReducer,
  ReactNode,
  Dispatch,
} from "react";

type initial = {
  liveFootball: boolean;
  activeNavbar: boolean;
  dayTime: number;
};

const FootContext = createContext({
  dayTime: 0 as number,
  liveFootball: false as boolean,
  activeNavbar: true as boolean,
});
const FootContextAction = createContext<Dispatch<any> | null>(null);

const initialState: initial = {
  liveFootball: false,
  dayTime: 0,
  activeNavbar: true,
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
