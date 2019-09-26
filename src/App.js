import React, { useEffect } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import AOS from "aos";
import { ToastContainer } from "react-toastify";
import Nav from "./components/nav";
import Home from "./components/home";
import England from "./components/england";
import Spain from "./components/spain";
import Italy from "./components/italy";
import Germany from "./components/germany";
import AboutMe from "./components/aboutMe";
import "materialize-css/dist/css/materialize.min.css";
import "aos/dist/aos.css";
import "./css/style.css";
import "./fonts/icomoon/style.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  useEffect(() => {
    AOS.init();
  });

  return (
    <Switch>
      <React.Fragment>
        <ToastContainer />
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
