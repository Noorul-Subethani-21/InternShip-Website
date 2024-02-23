import React from "react";
import "./Content.css";
const Content = () => {
  return (
    <div className="content">
      <h2>
        WELCOME TO{" "}
        <span style={{ color: "rgb(26 27 221 / 75%)" }}>MARUTHI INFOTECH</span>
      </h2>
      <hr style={{ width: "10rem", color: " rgb(26 27 221 / 75%)" }} />
      <p style={{ padding: "1rem", fontSize: "16px", marginLeft: "4rem" }}>
        Maruthi InfoTech is a small but capable Internet consulting company
        located in India, founded in 2013.
        <br /> Working closely with clients over the years, we aspire to develop
        robust solutions that will resist the ever-changing nature of the
        software industry. We provide offshore IT outsourcing solutions to
        businesses across the world.
      </p>
      <p style={{ padding: "0.5rem", fontSize: "15px", marginLeft: "4rem" }}>
        We provide numerous Internet-related services that include web design,
        application development, <br />
        mobile application solutions, business consulting, Desktop application,
        Internet marketing and all kinds of IT services to small and
        medium-sized businesses.
      </p>
      <p style={{ padding: "0.5rem", fontSize: "15px", marginLeft: "4rem" }}>
        we have helped hundreds of businesses be successful by helping them to
        develop goal-driven online marketing strategies which enable them to
        engage and build relationships with new and existing customers, promote
        brand awareness, and meet their business objectives.We've enjoyed steady
        and often rapid growth over the years, bringing us to the present day
        with a staff count of over forty and 40 plus SMB and enterprise clients
        based locally, nationwide and overseas.
      </p>
    </div>
  );
};

export default Content;
