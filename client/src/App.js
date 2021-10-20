import "./App.css";

import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";

import AuthenticationPagePage from "./components/Authentication";
import NotFoundPage from "./components/404";
import RegistrationPage from "./components/registration";
import LoginPage from "./components/login";

import StudentList from "./components/student-list";
import AddStudentPage from "./components/add-student";


import { Component } from "react";

class App extends Component {
    render() {
      return <Router>
          <Switch>
              <Route exact path="/" component={AuthenticationPagePage} />
              <Route exact path="/404" component={NotFoundPage} />

              <Route exact path="/registration-page" component={RegistrationPage}/>
              <Route exact path="/login-page" component={LoginPage}/>
              <Route exact path="/student-list" component={StudentList}/>
              <Route exact path="/add-student" component={AddStudentPage}/>

              <Redirect to="/404" />
          </Switch>
      </Router>
    }

}


export default App;
