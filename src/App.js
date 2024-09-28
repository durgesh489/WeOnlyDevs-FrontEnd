import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// Navbar component
import Home from "./components/Home";
import Services from "./components/Work";
import Contact from "./components/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from "./components/CustomNavbar";
import DeveloperList from "./pages/DeveloperList";
import ServiceForm from "./components/MyForm";
import ContactUs from "./components/Contact";
import Calculator from "./components/Calculator";
import CostCalculator from "./components/Calculator";
import Work from "./components/Work";
import WorkDetailsForm from "./components/Work";
import WorkList from "./components/WorkList";

const App = () => {
  return (
    <Router>
      <div>
        <CustomNavbar />
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/works" element={<WorkList />} />
            <Route path="/costing" element={<CostCalculator/>} />
            <Route path="/developers" element={<DeveloperList />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/add-developer" element={<ServiceForm />} />
            <Route path="/post-work" element={<WorkDetailsForm />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
