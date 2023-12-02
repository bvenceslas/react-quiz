import React from "react";

export default function NextButton({ dispatch, answer }) {
  if (answer == null) return null;
  return (
    <div
      className="btn btn-ui"
      onClick={() => dispatch({ type: "nextQuestion" })}
    >
      NextButton
    </div>
  );
}
