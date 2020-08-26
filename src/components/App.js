import React from 'react';
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import RecommendedVideos from "../components/RecommendedVideos.js";
import "../css/App.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import SearchPage from "../components/SearchPage";


function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route path="/search/:searchTerm">
            <div className="app__page">
              <SideBar/>
              <SearchPage/>
            </div>
          </Route>
          <Route path="/">
            <div className="app__page">
              <SideBar/>
              <RecommendedVideos/>
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
