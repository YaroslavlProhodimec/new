import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import BaseContainer from "./components/BaseContainer";
import {Login} from "./components/pages/login/Login";
import {BaseNotFound} from "./components/notFound404/BaseNotFound";
import {Sneakers} from "./components/pages/sneakers/Sneakers";
import {LogOut} from "./components/pages/logOut/LogOut";

function App() {
  return (
    <div className={"App"}>
        <Routes>
            <Route path="/" element={<BaseContainer/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/logOut" element={<LogOut/>} />
            <Route path="/sneakers/:id" element={<Sneakers/>} />
            <Route path="*" element={<BaseNotFound/>} />
        </Routes>
    </div>
  );
}

export default App;
