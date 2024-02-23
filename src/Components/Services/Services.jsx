import React from "react";
import "./Services.css";
import WorkIcon from "@mui/icons-material/Work";
const Services = () => {
  return (
    <div>
      <h2 style={{ marginLeft: "4rem", marginTop: "2rem" }}>
        OUR <span style={{ color: "rgb(26 27 221 / 75%)" }}>PORTFOLIO</span>
      </h2>
      <hr
        style={{
          width: "10rem",
          color: " rgb(26 27 221 / 75%)",
          marginLeft: "4rem",
        }}
      />

      <div className="wrapper">
        <div className="box-1">
          <WorkIcon
            style={{
              height: "2rem",
              width: "2rem",
              position: "relative",
              top: "2rem",
              background: "rgb(26 27 221 / 55%)",
              color: "black",
              borderRadius: "50%",
            }}
          />
          <h4>BANKING</h4>
          <p>We offer Front, Middle &amp; Back Office Solutions.</p>
        </div>

        <div className="box-1">
          <WorkIcon
            style={{
              height: "2rem",
              width: "2rem",
              position: "relative",
              top: "2rem",
              background: "rgb(26 27 221 / 55%)",
              color: "black",
              borderRadius: "50%",
            }}
          />
          <h4>EDUCATION</h4>
          <p>
            Our solutions help educators rethink, reinvent and rewire their
            learning.
          </p>
        </div>

        <div className="box-1">
          <WorkIcon
            style={{
              height: "2rem",
              width: "2rem",
              position: "relative",
              top: "2rem",
              background: "rgb(26 27 221 / 55%)",
              color: "black",
              borderRadius: "50%",
            }}
          />
          <h4>RETAIL</h4>
          <p>
            Our retail solutions turn today's pain points into new business
            opportunities.
          </p>
        </div>
      </div>
      <div className="wrapper">
        <div className="box-1">
          <WorkIcon
            style={{
              height: "2rem",
              width: "2rem",
              position: "relative",
              top: "2rem",
              background: "rgb(26 27 221 / 55%)",
              color: "black",
              borderRadius: "50%",
            }}
          />
          <h4>HEALTHCARE</h4>
          <p>
            Our solutions helps to optimize operations and enabling innovation.
          </p>
        </div>

        <div className="box-1">
          <WorkIcon
            style={{
              height: "2rem",
              width: "2rem",
              position: "relative",
              top: "2rem",
              background: "rgb(26 27 221 / 55%)",
              color: "black",
              borderRadius: "50%",
            }}
          />
          <h4>INSURANCE</h4>
          <p>Our solutions helps to settle the claim faster digitally.</p>
        </div>

        <div className="box-1">
          <WorkIcon
            style={{
              height: "2rem",
              width: "2rem",
              position: "relative",
              top: "2rem",
              background: "rgb(26 27 221 / 55%)",
              color: "black",
              borderRadius: "50%",
            }}
          />
          <h4>LOGISTIC</h4>
          <p>
            We offer cost effective solution to logistics &amp; distribution.
          </p>
        </div>
      </div>

      <div className="wrapper">
        <div className="box-1">
          <WorkIcon
            style={{
              height: "2rem",
              width: "2rem",
              position: "relative",
              top: "2rem",
              background: "rgb(26 27 221 / 55%)",
              color: "black",
              borderRadius: "50%",
            }}
          />
          <h4> MEDIA</h4>
          <p>
            Our practice helps to cross over from legacy technology to digital
            offerings.
          </p>
        </div>

        <div className="box-1">
          <WorkIcon
            style={{
              height: "2rem",
              width: "2rem",
              position: "relative",
              top: "2rem",
              background: "rgb(26 27 221 / 55%)",
              color: "black",
              borderRadius: "50%",
            }}
          />
          <h4>REALESTATE</h4>
          <p>Our practice helps to make the management process smoother.</p>
        </div>

        <div className="box-1">
          <WorkIcon
            style={{
              height: "2rem",
              width: "2rem",
              position: "relative",
              top: "2rem",
              background: "rgb(26 27 221 / 55%)",
              color: "black",
              borderRadius: "50%",
            }}
          />
          <h4>OIL & GAS</h4>
          <p>
            Our Practice align you to people with processor and make it simplier
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
