import React from "react";
import StudentQuiz from "../components/StudentQuiz";
const TakeQuiz = ({ location, match, history }) => {
  return (
    <StudentQuiz
      history={history}
      id={location.state.id}
      formData={location.state.data}
    />
  );
};

export default TakeQuiz;
