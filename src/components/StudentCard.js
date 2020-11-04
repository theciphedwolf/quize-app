import React from "react";
import { Card } from "antd";
const StudentCard = ({ name, rollNumber, phoneNo, section }) => {
  return (
    <Card style={{ width: 500, marginLeft: 20 }}>
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

export default StudentCard;
