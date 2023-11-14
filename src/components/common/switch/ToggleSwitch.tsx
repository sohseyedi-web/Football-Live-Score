import { useFootball, useFootballDispatch } from "../../../context/FootballProvider";
import './ToggleSwitch.css'

const ToggleSwitch = () => {
  const {liveFootball} = useFootball();
  const dispatch = useFootballDispatch();


  return (
    <label className="toggle">
      <input
        type="checkbox"
        value={liveFootball}
        checked={liveFootball}
        onChange={() => dispatch({type : "ACTIVE_LIVE"})}
      />

      <div className="toggle-slider slider">
        <div className="toggle-line line"></div>
      </div>
    </label>
  );
};

export default ToggleSwitch;
