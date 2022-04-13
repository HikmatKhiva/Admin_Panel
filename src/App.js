import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import TopBar from "./components/TopBar/TopBar";
import Home from "./Pages/Home/Home";
import UserList from './Pages/UserList/UserList'
import './style.css';
import { Routes,  Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <TopBar />
      <div className="container">
        <Sidebar />
        <Routes>
         <Route path="/" element={<Home />} /> 
         <Route path="/users" element={<UserList />} /> 
        </Routes>
      </div>
    </div>
  );
}

export default App;
