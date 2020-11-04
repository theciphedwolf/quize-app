import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { AppProvider } from "./contexts/AppContext";
import { UserProvider } from "./contexts/UserContext";

import AuthRoute from "./layouts/AuthRoute";
import PrivateRoute from "./layouts/PrivateRoute";
import Login from "./pages/Login";
import Dashboard from "./layouts/Dashboard";
import Signup from "./pages/Signup";
// import AddSubjects from "./pages/Subjects/AddSubjects";
// import QuizBasicSettings from "./pages/Quiz/GeneralSettings/BasicQuizSetting";
// import QuestionManager from "./pages/Quiz/QuestionManager/QuestionManager";
const App = () => {
  return (
    <AppProvider>
      <UserProvider>
        <Router>
          <Switch>
            <AuthRoute path="/login" component={Login} />
            <AuthRoute path="/signup" component={Signup} />
            <PrivateRoute path="/" component={Dashboard} />
          </Switch>
        </Router>
      </UserProvider>
    </AppProvider>
  );
};

export default App;
