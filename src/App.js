import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../src/App.css"
import Home from "./pages/home/Home";
import Topbar from "./components/topbar/Topbar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/setting/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
function App() {
  return (
    <>
      <Topbar />
      <Router>
        <Routes>
          <Route path="/" caseSensitive={false} element={<Home />} />
          <Route path="/login" caseSensitive={false} element={<Login />} />
          <Route path="/register" caseSensitive={false} element={<Register />} />
          <Route path="/setting" caseSensitive={false} element={<Settings />} />
          <Route path="/single" caseSensitive={false} element={<Single />} />
          <Route path="/post/:Id" caseSensitive={false} element={<Single />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
