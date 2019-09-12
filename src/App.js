import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Nav from "./components/nav";
import Home from "./components/home";
import England from "./components/england";
import Spain from "./components/spain";
import Italy from "./components/italy";
import Germany from "./components/germany";
import AboutMe from "./components/aboutMe";
import "materialize-css/dist/css/materialize.min.css";

function App() {
  return (
    <Switch>
      <React.Fragment>
        {/* <Navbar /> */}
        <Nav />
        <Route path="/home" component={Home} />
        <Route path="/england" component={England} />
        <Route path="/spain" component={Spain} />
        <Route path="/italy" component={Italy} />
        <Route path="/germany" component={Germany} />
        <Route path="/aboutMe" component={AboutMe} />
        <Redirect from={"/"} exact to="/home" />
      </React.Fragment>
    </Switch>
  );
}

export default App;
