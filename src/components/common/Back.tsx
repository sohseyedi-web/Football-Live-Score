import {
  useFootballDispatch,
  useFootball,
} from "../../context/FootballProvider";

const Back = () => {
  const { activeNavbar } = useFootball();

  const dispatch = useFootballDispatch();

  return (
    activeNavbar && (
      <div
        className="fixed w-full h-full top-0 left-0 bg-[rgba(0,0,0,.5)] z-10 transition-all duration-300"
        onClick={() => dispatch({ type: "ACTIVE_NAVBAR" })}
      ></div>
    )
  );
};

export default Back;
