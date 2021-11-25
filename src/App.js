import React from "react";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import "./app.css";
import Home from "./pages/home/Home"
import 'bootstrap/dist/css/bootstrap.min.css';
import Notification from "./components/notification/Notification";
import SignUp from "./components/signup/SignUp";
import SignIn from "./components/signin/SignIn";
import Analytics from "./components/analytics/Analytics";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="shadow">
       <Topbar/>
        <div className="container contain">
        <Sidebar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/analytic" element={<Analytics />} />
            <Route  path="/signup" element={<SignUp/>} />
            <Route  path="/signin" element={<SignIn/>} />
          </Routes>
          <Notification />
       </div>
       </div>
    </Router>
  );
}

export default App;
