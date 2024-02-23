import React from "react";
import "./Navbar1.css";
import PhoneIcon from "@mui/icons-material/Phone";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MailIcon from "@mui/icons-material/Mail";
const Navbar1 = () => {
  return (
    <div className="nav">
      <div className="left">
        <p>
          <PhoneIcon style={{ position: "relative" }} />
          +91 95000 45128
        </p>
        <p>
          <AccessTimeIcon style={{ position: "relative" }} />
          Mon-Fri 10.00 to 6:00
        </p>
        <p>
          <MailIcon style={{ position: "relative" }} />
          infomaruthitech.com
        </p>
      </div>
      <div className="right">
        <p>FAQ | </p>
        <p>Help Desk |</p>
        <p>Login |</p>
      </div>
    </div>
  );
};

export default Navbar1;
