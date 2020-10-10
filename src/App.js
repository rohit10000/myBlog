import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import WebReact from "./pages/WebReact";

function App() {
  return (

      <Router>
          <div className="app">
              <Switch>

                  <Route path="/docs/web-reactjs">
                      <Header/>
                      <WebReact/>
                      <Footer/>
                  </Route>

                <Route path="/">
                  <Header/>
                  <Home/>
                  <Footer/>
                </Route>

              </Switch>
            </div>
      </Router>

  );
}

export default App;
