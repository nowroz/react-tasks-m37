import { useState } from "react";

export default function ShowHideText() {
  const [shouldShowText, setShouldShowText] = useState(true);

  return (
    <div className="card">
      <h3>{shouldShowText && "Hello, React Learner!"}</h3>
      <button onClick={() => setShouldShowText(!shouldShowText)}>
        {shouldShowText ? "Hide" : "Show"}
      </button>
    </div>
  );
}
