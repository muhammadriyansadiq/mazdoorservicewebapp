import React from "react";
import { Link } from "react-router-dom"; 
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import PlumbingIcon from "@mui/icons-material/Plumbing";
import CarpenterIcon from "@mui/icons-material/Carpenter";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import CarRepairIcon from "@mui/icons-material/CarRepair";
import TireRepairIcon from "@mui/icons-material/TireRepair";
import BuildIcon from "@mui/icons-material/Build";
import Navbar from "./Navbar";

function Home({ registrations , setRegistrations , jobRoles }) {

  const jobRolesIcon = 
    {
      "Ac Technician": <AcUnitIcon />,
      "Plumber": <PlumbingIcon />,
      "Electrician": <ElectricBoltIcon />,
      "Carpenter": <CarpenterIcon />,
      "Bike Repair": <BuildIcon />,
      "Car Repair": <CarRepairIcon /> ,
    "Tire Repair": <TireRepairIcon />
    };

    // const handleFilterResult = (selectedJobRole) => {
    //     if (selectedJobRole === "All") {
    //       setRegistrations(Technician);
    //     } else {
    //       const filteredRegistrations = Technician.filter(
    //         (technician) => technician.jobRole === selectedJobRole
    //       );
    //       setRegistrations(filteredRegistrations);
    //     }
    

  return (
    <div>
          <Navbar registrations={registrations} setRegistrations={setRegistrations} jobRoles={jobRoles} />
      <div className="filter-wrapper">
        <div className="card-wrapper">
        {/* <Navbar /> */}
          {registrations.map((technician, index) => (
            
                <Link to={`/technician/${index}`} key={index} style={{ textDecoration: 'none' }}>
            <Card
              key={index}
              sx={{
                maxWidth: 345,
                width: 250,
                backgroundColor: "rgb(10, 10, 10)",
                color: "white",
                cursor: "pointer",
                transition: "transform 0.3s ease-in-out", 
                "&:hover": {
                  transform: "scale(1.05)", 
                },
              }}
            >

    <CardMedia component="img" height="190" image={technician.image} />

              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {technician.name}
                </Typography>
                <Typography variant="body2">
                  {jobRolesIcon[technician.jobRole]} {technician.jobRole} | {technician.exp} yrs experience
                </Typography>
              </CardContent>
            </Card>
             </Link>
          ))}
        </div>
      </div>
    </div>
  );
            }
        // }
 export default Home;