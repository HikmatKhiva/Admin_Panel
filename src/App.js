import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import TopBar from "./components/TopBar/TopBar";
import Home from "./Pages/Home/Home";
import './style.css'
function App() {
  return (
    <div className="App">
      <TopBar />
      <div className="container">
        <Sidebar/>
        <Home/>
      </div>
    </div>
  );
}

export default App;
