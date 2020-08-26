import React from 'react';
import Header from "./Header";
import SideBar from "./SideBar";
import RecommendedVideos from "./RecommendedVideos.js";
import "./App.css";


const App = () => (
  <div className="App">
    <Header/>
    <div className="app__page">
      <SideBar/>
      <RecommendedVideos/>
    </div>
  </div>
);

export default App;
