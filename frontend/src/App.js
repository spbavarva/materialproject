import "antd/dist/antd.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import React from "react";
import WebFont from "webfontloader";
import Header from "./components/Layout/header/Header";
import Footer from "./components/Layout/footer/Footer";
import CollegeBranch from "./components/CollegeBranch";
import Paper from "./components/Paper";
import Login from "./components/User/Login";

function App() {
  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"]
      }
    });
  }, []);
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:college/:branch" element={<CollegeBranch />} />
          <Route
            path="/:college/:branch/:semester/Papers"
            element={<Paper />}
          />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
export default App;
