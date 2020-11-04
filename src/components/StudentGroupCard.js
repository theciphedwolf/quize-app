import React from "react";
import { Card } from "antd";
const StudentGroupCard = ({ name, rollNumber, section, id, history }) => {
  return (
    <Card
      style={{ width: 500, marginLeft: 20 }}
      onClick={() => {
        history.push(`../studentgroup/${id}`);
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <p>Name : {name}</p>
        <p>Section:{section}</p>
      </div>
      <p>rollNumber : {rollNumber}</p>
    </Card>
  );
};

export default StudentGroupCard;
