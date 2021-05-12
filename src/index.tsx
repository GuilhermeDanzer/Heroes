import React from "react";
import ReactDOM from "react-dom";
import GlobalStyle from "./styles/global";
import Home from "./pages/Home";
import Heroes from "./pages/Heroes";
import { Provider as HeroesProvider } from "./context/HeroesContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Historico from "./pages/Historico";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <HeroesProvider>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact={true} />
          <Route path="/Heroes" component={Heroes} exact={false} />
          <Route path="/historico" component={Historico} exact={false} />
        </Switch>
      </Router>
    </HeroesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
