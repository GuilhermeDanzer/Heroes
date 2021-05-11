import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './styles/global'
import Home from './pages/Home';
import {Provider as HeroesProvider} from './context/HeroesContext'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
    
    <GlobalStyle />
    <HeroesProvider>

    <Router>
      <Switch>
        <Route path="/" component={Home}exact={true}/>
    </Switch>
    </Router>
    </HeroesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
