import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Api from "../../api";
import StudentCard from "../../components/StudentCard";

const ViewStudentGroup = ({ match, history }) => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchItem = async () => {
      const response = await Api.getOne("studentgroups", match.params.id);
      setStudents(response.data.data.students);
    };
    fetchItem();
  }, students);

  return (
    <div>
      {students.map((item) => (
        <StudentCard
          name={item.name}
          rollNumber={item.rollNumber}
          phoneNumber={item.phoneNo}
          section={item.section}
        />
      ))}
    </div>
  );
};

const PageContent = styled.div`
  margin: 16px;
  padding: 16px 0;
  background-color: #fff;
  > * {
    width: 100%;
  }
  .ant-pagination {
    margin: 16px;
  }
`;

export default ViewStudentGroup;
