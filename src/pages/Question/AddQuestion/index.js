import { Select } from "antd";
import React, { useState } from "react";
import MCQI from "../../../components/MCQI";
import MCQT from "../../../components/MCQT";
import SCQI from "../../../components/SCQI";
import SCQT from "../../../components/SCQT";
import styled from "styled-components";

const CreateQuestion = () => {
  const [type, setType] = useState("mcqi");

  return (
    <Container>
      <Select
        onChange={(e) => {
          setType(e);
        }}
      >
        <option value="mcqi" defaultValue={type}>
          Multi Choice Question Image
        </option>
        <option value="mcqt">Multi Choice Question Text</option>
      </Select>

      {type === "scqi" ? (
        <SCQI />
      ) : type === "scqt" ? (
        <SCQT />
      ) : type === "mcqi" ? (
        <MCQI />
      ) : (
        <MCQT />
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 16px;
`;

export default CreateQuestion;
