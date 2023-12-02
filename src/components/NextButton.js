import React from "react";

export default function NextButton({ dispatch, answer, index, numQuestions }) {
  if (answer == null) return null;

  if (index < numQuestions - 1)
    return (
      <div
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        NextButton
      </div>
    );

  if (index === numQuestions - 1)
    return (
      <div className="btn btn-ui" onClick={() => dispatch({ type: "finish" })}>
        Finish
      </div>
    );
}
