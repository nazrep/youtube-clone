import React from 'react';
import Header from "./Header";
import SideBar from "./SideBar";
import Videos from "./Videos";
import "./App.css";


const App = () => (
  <div className="App">
    <Header/>
    <div className="app__page">
      <SideBar/>
      <Videos/>
    </div>
  </div>
);

export default App;
