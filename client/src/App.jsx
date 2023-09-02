import React, { useState, useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./Signup";
import Login from "./Login";
// import Technicia from "./TechnicianData";
import { BrowserRouter, Routes, Route, useLocation, Router } from "react-router-dom";

// =======================editing app.jsx

// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Navbar from "./Navbar";
import Technician from "./Technician";
import Home from "./Home";
import "./App.css";

// import Navbar from './Navbar';
import PlumbingIcon from "@mui/icons-material/Plumbing";
import CarpenterIcon from "@mui/icons-material/Carpenter";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import CarRepairIcon from "@mui/icons-material/CarRepair";
import TireRepairIcon from "@mui/icons-material/TireRepair";
import BuildIcon from "@mui/icons-material/Build";
import ConstructionIcon from "@mui/icons-material/Construction";
import TechnicianDetails from "./TechnicianDetails";

//#fa2828

function App() {
  
  const [registrations, setRegistrations] = useState(Technician);
  // const shouldDisplayNavbar = () => {
  //   return !['/login', '/register'].includes(location.pathname);
  // };
  useEffect(() => {
    const storedRegistrations = localStorage.getItem("registrations");

    if (storedRegistrations) {
      setRegistrations(JSON.parse(storedRegistrations));
    }
  }, []);

  const jobRoles = [
    { text: "All", icon: <ConstructionIcon /> },
    { text: "Ac Technician", icon: <AcUnitIcon /> },
    { text: "Plumber", icon: <PlumbingIcon /> },
    { text: "Electrician", icon: <ElectricBoltIcon /> },
    { text: "Carpenter", icon: <CarpenterIcon /> },
    { text: "Bike Repair", icon: <BuildIcon /> },
    { text: "Car Repair", icon: <CarRepairIcon /> },
    { text: "Tire Repair", icon: <TireRepairIcon /> },
  ];

  // const handleFilterResult = (selectedJobRole) => {
  //   if (selectedJobRole === "All") {
  //     setRegistrations(Technician);
  //   } else {
  //     const filteredRegistrations = Technician.filter(
  //       (technician) => technician.jobRole === selectedJobRole
  //     );
  //     setRegistrations(filteredRegistrations);
  //   }

  return (
    <BrowserRouter>
   
   <div className="App">
      <Routes>



        <Route path="/register" element={<Signup />}></Route>
        <Route path="/" element={<Login />}></Route>
        <Route
          path="/home"
          element={<Home jobRoles={jobRoles} setRegistrations={setRegistrations} registrations={registrations} />}
        ></Route>

<Route path="/technician/:index" element={<TechnicianDetails registrations={registrations}/>}>
           
            </Route>
       
      </Routes>
      </div>
    </BrowserRouter>
  );
}
// }

export default App;





