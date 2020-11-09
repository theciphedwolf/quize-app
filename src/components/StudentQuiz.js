import { Button } from "antd";
import React, { useEffect, useState } from "react";
import { Redirect } from "react-router";
import Api from "./../api";
import QuestionBox from "./QuestionBox";
import QuizCard from "./QuizCard";

const StudentQuiz = ({ match, history, id, formData }) => {
  const [questions, setQuestions] = useState([]);
  const [quiz, setQuiz] = useState([]);
  const [score, setScore] = useState(0);
  const [totalScore, setTotalScore] = useState(0);

  useEffect(() => {
    const fetchItem = async () => {
      let response = await Api.getAllWhere("questions", "quiz", id);
      setQuestions(response.data.data);
      const arr = [];

      response.data.data.forEach((element) => {
        arr.push(element.points);
      });

      const total = arr.reduce((a, b) => a + b, 0);
      setTotalScore(total);
      response = await Api.getOne("quizs", id);
      setQuiz(response.data.data);
    };
    fetchItem();
  }, []);

  const computeAnswer = (
    answer,
    correctAns,
    terminate,
    scoreForCorrect,
    scoreForIncorrect
  ) => {
    if (answer === correctAns) {
      setScore(score + scoreForCorrect);
    } else {
      setScore(score + scoreForIncorrect);
      if (terminate) {
        setScore();
        history.push({
          pathname: "/endquiz",
          search: "?query=abc",
          state: {
            endMsg: quiz.quizGradAndSummary.endText,
            passMsg: quiz.quizGradAndSummary.passText,
            failedMsg: quiz.quizGradAndSummary.failText,
            totalScore,
            formData,
            obtainedScore: score,
            quiz,
            questions,
          },
        });
      } else {
      }
    }
    console.log(score);
  };

  return (
    <div className="container">
      {questions.length > 0 &&
        questions.map(
          ({
            title,
            options,
            correctAnswer,
            _id,
            terminateIfWrong,
            points,
            pointsForIncorrect,
          }) => (
            <div>
              <div>
                <QuestionBox
                  question={title}
                  options={options}
                  key={_id}
                  selected={(answer) =>
                    computeAnswer(
                      answer,
                      correctAnswer,
                      terminateIfWrong,
                      points,
                      pointsForIncorrect
                    )
                  }
                />
                <br></br>
              </div>
            </div>
          )
        )}

      <Button
        onClick={() => {
          history.push({
            pathname: "/endquiz",
            search: "?query=abc",
            state: {
              endMsg: quiz.quizGradAndSummary.endText,
              passMsg: quiz.quizGradAndSummary.passText,
              failedMsg: quiz.quizGradAndSummary.failText,
              totalScore,
              obtainedScore: score,
              quiz,
              questions,
            },
          });
        }}
      >
        Submit Quiz
      </Button>
    </div>
  );
};

export default StudentQuiz;
