import { useState } from "react";
import './ToggleSwitch.css'

const ToggleSwitch = () => {
  const [value, setValue] = useState("");

  return (
    <label className="toggle">
      <input
        type="checkbox"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <div className="toggle-slider slider">
        <div className="toggle-line line"></div>
      </div>
    </label>
  );
};

export default ToggleSwitch;
