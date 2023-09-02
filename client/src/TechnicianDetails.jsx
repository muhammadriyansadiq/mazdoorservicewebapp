import React from "react";
import { useParams,Link } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function TechnicianDetails({ registrations }) {
  const { index } = useParams();
  const technician = registrations[index];

  console.log(technician)
 
  return (
    <>
     <div className="headingDetail">
        <Link to="/home" style={{ textDecoration: "none" }}>
            <div className="back" >
            <ArrowBackIcon/>
                </div>
          
        </Link>
        <h2>Technician Details</h2>
      </div>

    <div className="technician-details-container">
     <div className="detailContainer">
      <div className="details-wrapper">
        <div className="image-wrapper">
          <img src={technician.image} alt="mazdoor"  width="200px" className="imgDetails"/>
        </div>
        <div className="info-wrapper">
          <h3>Name: <span>{technician.name}</span></h3>
          <p>Phone: <span>{technician.phoneNumber}</span></p>
          <p>Job Role: <span>{technician.jobRole}</span></p>
          <p>Experience: <span>{technician.exp} years</span></p>
          <p>Location: <span>{technician.location}</span></p>
          <p>About: <span>{technician.desc}</span></p>
          <p>Pay per hour: <span>{technician.payPerHour}/=</span> </p>
        </div>
      </div>
    </div>
    </div>
    </>
  );
}

export default TechnicianDetails;
