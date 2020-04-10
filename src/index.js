import React from "react";
import ReactDOM from "react-dom";
import "./Resources/Lib/Normalize/normalize.css";
import "./Styles/main.scss";
import { Home, DetailHellaSlingshots } from "./Containers";
import { Header } from "./Components";
import { UIcontextProvider } from "./Store/UiContext";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <UIcontextProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/hella-slingshot"
            component={DetailHellaSlingshots}
          />
        </Switch>
      </Router>
    </UIcontextProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
