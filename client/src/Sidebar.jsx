import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Technician from "./Technician";


export default function Sidebar({ isOpen, onClose, jobRoles ,setRegistrations }) {
  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    onClose();

  };

   const handleFilterResult = (selectedJobRole) => {
        if (selectedJobRole === "All") {
          setRegistrations(Technician);
        } else {
          const filteredRegistrations = Technician.filter(
            (technician) => technician.jobRole === selectedJobRole
          );
          setRegistrations(filteredRegistrations);
        }
        console.log("yes")
      }


  const list = (
    <Box
      sx={{ width: 250 ,height: "100%", backgroundColor: "black",  color: "white"}}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
     <h3 className="service">What service do you want?</h3>
      <Divider sx={{ backgroundColor: "#fa2828"}}/>
      <List>
  {jobRoles.map((service, index) => (
    <ListItem key={service.text} disablePadding onClick={()=>{handleFilterResult(service.text)}}>
      <ListItemButton sx={{ "&:hover": { backgroundColor: "#fa2828" } }}>
        <ListItemIcon sx={{ color: "inherit" }}>{service.icon}</ListItemIcon>
        <ListItemText
          primary={service.text}
         
        />
      </ListItemButton>
    </ListItem>
  ))}
</List>
    </Box>
  );

  //  const handleFilterResult = (selectedJobRole) => {
  //       if (selectedJobRole === "All") {
  //         setRegistrations(Technician);
  //       } else {
  //         const filteredRegistrations = Technician.filter(
  //           (technician) => technician.jobRole === selectedJobRole
  //         );
  //         setRegistrations(filteredRegistrations);
  //       }
  //       console.log("yes")
  //     }




  return (
    <div>
      <Drawer anchor="left" open={isOpen} onClose={onClose} >
        {list}
      </Drawer>
    </div>
  );
}


// onClick={()=>{handleFilterResult(service.text)}}