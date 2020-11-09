import { Button } from "antd";
import React, { useEffect, useState } from "react";
import Api from "./../api";
const EndQuiz = ({ location }) => {
  const [res, setRes] = useState("pending");

  const processResult = () => {
    const marks =
      (location.state.obtainedScore / location.state.totalScore) * 100;

    if (
      Math.round(marks) >= +location.state.quiz.quizGradAndSummary.passMarks
    ) {
      console.log("passed");
      setRes("passed");
    } else {
      console.log("failed");
      setRes("failed");
    }
  };

  const submitResult = async () => {
    const data = await Api.addOne("results", {
      quiz: location.state.quiz._id,
      info: location.state.formData,
      totalMarks: location.state.totalScore,
      obtainedMarks: location.state.obtainedScore,
      status: res,
    });

    console.log(data);
  };

  return res === "pending" ? (
    <div>
      {location.state.endMsg}
      <Button
        onClick={() => {
          processResult();
        }}
      >
        Process Result
      </Button>
    </div>
  ) : res === "pass" ? (
    <div>
      {location.state.passMsg}{" "}
      <Button
        onClick={() => {
          submitResult();
        }}
      >
        Submit Result
      </Button>
    </div>
  ) : (
    <div>
      {location.state.failedMsg}{" "}
      <Button
        onClick={() => {
          submitResult();
        }}
      >
        Submit Result
      </Button>
    </div>
  );
};

export default EndQuiz;
