import {
  useContext,
  createContext,
  useReducer,
  ReactNode,
  Dispatch,
} from "react";

type initial = {
  liveFootball: boolean;
  dayTime: string;
};

const FootContext = createContext({
  dayTime: "" as string,
  liveFootball: false as any,
});
const FootContextAction = createContext<Dispatch<any> | undefined>(undefined);

const initialState: initial = {
  liveFootball: false,
  dayTime: "1",
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
