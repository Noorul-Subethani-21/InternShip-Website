import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import MessageIcon from "@mui/icons-material/Message";
import AppShortcutIcon from "@mui/icons-material/AppShortcut";
import "./Box.css";
const Box = () => {
  return (
    <div className="boxes">
      <div className="box">
        <PersonIcon
          style={{
            width: "18%",
            height: "20%",
            position: "relative",
            left: "5rem",
          }}
          className="icon"
        />
        <h4>24/7 SUPPORT</h4>
        <p>support@maruthiinfotech.com</p>
      </div>
      <div className="box" style={{ position: "relative", top: "0.5rem" }}>
        <MessageIcon
          style={{
            width: "18%",
            height: "15%",
            position: "relative",
            left: "5rem",
          }}
          className="icon"
        />
        <h4 style={{ position: "relative", left: "2rem" }}>ONLINE HELP</h4>
        <p style={{ position: "relative", left: "2rem" }}>
          We provide online help
        </p>
      </div>
      <div className="box" style={{ position: "relative", top: "0.5rem" }}>
        <AppShortcutIcon
          style={{
            width: "18%",
            height: "20%",
            position: "relative",
            left: "5rem",
          }}
          className="icon"
        />
        <h4> CALL +(91) 95000 45128 </h4>
        <p>We are here to answer</p>
      </div>
    </div>
  );
};

export default Box;
