import React from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";
const QuizCard = ({
  createdDate,
  quizDate,
  quizTitle,
  quizDescription,
  id,
}) => {
  return (
    <Card
      style={{ width: 500, marginLeft: 20 }}
      onClick={() => {
        localStorage.setItem("@quiz", id);
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <p>{createdDate}</p>
        <p>{quizDate}</p>
      </div>
      <p>{quizTitle}</p>
      <p>{quizDescription}</p>
      <p>
        <Link to={`/addnewquiz/${id}`}>Change Quiz Settings</Link>
        <br></br>
        <Link to={`/quizinitiate/${id}`}>Take This Quiz</Link>
      </p>
    </Card>
  );
};

export default QuizCard;
