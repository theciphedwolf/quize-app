import React from "react";
import { Route, Switch } from "react-router-dom";
import { Layout } from "antd";
import styled from "styled-components";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Subjects from "../pages/Subjects/subjects";
import AddSubjects from "../pages/Subjects/AddSubjects";
import BasicQuizSetting from "../pages/Quiz/GeneralSettings/BasicQuizSetting";
import QuestionManager from "../pages/Quiz/QuestionManager/QuestionManager";
import QuestionOrder from "../pages/Quiz/QuestionOrder/QuestionOrder";
import QuizSharing from "../pages/Quiz/QuestionSharing/QuizSharing";
import QuizGradAndSummary from "../pages/Quiz/QuizGradAndSummary/QuizGradAndSummary";
import QuizInstruction from "../pages/Quiz/QuizInstructions/QuizInstruction";
import TimerSetting from "../pages/Quiz/TimerSettings/TimerSetting";
import Portal from "../pages/Portal/Portal";
import CreateNewQuiz from "../pages/Quiz/CreateNewQuiz/CreateNewQuiz";
import CreateStudentGroup from "../pages/StudentGroup/CreateStudentGroup";
import ViewStudentGroups from "../pages/StudentGroup/ViewStudentGroups";
import ViewStudentGroup from "../pages/StudentGroup/ViewStudentGroup";
import CreateQuestion from "../pages/Question/AddQuestion";
import TakeQuiz from "../pages/TakeQuiz";
import EndQuiz from "../components/EndQuiz";
import StudentQuiz from "../components/StudentQuiz";
import QuizInitiateComponent from "../components/QuizInitiateComponent";

const Dashboard = () => {
  return (
    <StyledLayout>
      <Sidebar />

      <Layout className="site-layout">
        <Header />

        <Layout.Content>
          <Switch>
            <Route path="/" component={Portal} exact />
            <Route path="/addsubject" component={AddSubjects} exact />
            <Route path="/subjects" component={Subjects} exact />
            <Route
              path="/addStudentsGroups"
              component={CreateStudentGroup}
              exact
            />
            <Route path="/studentgroups" component={ViewStudentGroups} exact />
            <Route
              path="/studentgroup/:id"
              component={ViewStudentGroup}
              exact
            />
            <Route path="/studentQuiz" component={StudentQuiz} exact />
            <Route path="/addnewquiz/:id" component={CreateNewQuiz} exact />
            <Route path="/addnewquiz" component={BasicQuizSetting} exact />
            <Route
              path="/addQuizSettings/:id"
              component={BasicQuizSetting}
              exact
            />
            <Route
              path="/questionmanager/:id"
              component={QuestionManager}
              exact
            />
            <Route path="/questionorder/:id" component={QuestionOrder} exact />
            <Route path="/quizsharing/:id" component={QuizSharing} exact />
            <Route path="/addquestions" component={CreateQuestion} exact />
            <Route
              path="/quizgradandsummary/:id"
              component={QuizGradAndSummary}
              exact
            />
            <Route
              path="/quizinstruction/:id"
              component={QuizInstruction}
              exact
            />
            <Route path="/timersettings/:id" component={TimerSetting} exact />

            <Route
              path="/quizinitiate/:id"
              component={QuizInitiateComponent}
              exact
            />
            <Route path="/takequiz" component={TakeQuiz} exact />
            <Route path="/endquiz" component={EndQuiz} exact />
          </Switch>
        </Layout.Content>

        <Layout.Footer>
          {/* Ant Design ©2018 Created by Ant UED */}
        </Layout.Footer>
      </Layout>
    </StyledLayout>
  );
};

const StyledLayout = styled(Layout)`
  min-height: 100vh;
`;

export default Dashboard;
