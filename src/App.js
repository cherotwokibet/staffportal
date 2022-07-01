import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";

import Layout from "./components/Layout";
import Login from "./auth/Login";
import { UserProvider } from "./contexts/UserContext";

function App() {
  return (
    <UserProvider>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Layout />} />
          </Routes>
        </Router>
      </div>
    </UserProvider>
  );
}

export default App;
