import React from "react";
import bg_app from "../../assets/bg_app.jpg";
import bg_leg from "../../assets/bg_leg.jpg";
import bg_web from "../../assets/bg_web.jpg";
import { Carousel } from "react-bootstrap";
import "./Slide.css"; // Import the CSS file for styling

const Slide = () => {
  return (
    <Carousel style={{ position: "sticky" }}>
      <Carousel.Item>
        <img
          className="d-block w-100 short-image"
          src={bg_app}
          alt="First slide"
        />
        <div className="slide-caption">
          <h1
            style={{
              background: "rgb(26 27 221 / 75%)",
              padding: "10px",
              borderRadius: "5rem",
              fontWeight: "800",
            }}
          >
            THINKING
          </h1>
          <h2 style={{ fontWeight: "600" }}>FOR AN ANDROID</h2>
          <p>
            Enterprises are leveraging Android and creating custom mobile apps{" "}
            <br />
            that solves customer problems and increase value for their business.
          </p>
          <button
            style={{
              background: "transparent",
              padding: "1rem",
              borderRadius: "5rem",
              color: "#fff",
              border: "1px solid #fff",
              transition: "background-color 0.3s ease-in-out",
              // Adding hover effect inline
              ":hover": {
                backgroundColor: "rgb(26 27 221 / 75%)",
              },
            }}
          >
            Contact Now
          </button>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 short-image"
          src={bg_leg}
          alt="Second slide"
        />
        <div className="slide-caption">
          <h2 style={{ fontWeight: "600" }}>
            YOUR LENGENCY SYSTEM NEEDS MODERATION
          </h2>
          <h1
            style={{
              background: "rgb(26 27 221 / 75%)",
              padding: "10px",
              borderRadius: "5rem",
              fontWeight: "800",
            }}
          >
            MAKE BUSSINESS EASY
          </h1>
          <p>
            We offer three options to legacy modernization like Migration and
            enhancements, <br />
            Correction and growth, Complete software reengineering.
          </p>
          <button
            style={{
              background: "transparent",
              padding: "1rem",
              borderRadius: "5rem",
              color: "#fff",
              border: "1px solid #fff",
              transition: "background-color 0.3s ease-in-out",
              // Adding hover effect inline
              ":hover": {
                backgroundColor: "rgb(26 27 221 / 75%)",
              },
            }}
          >
            Contact Now
          </button>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 short-image"
          src={bg_web}
          alt="Third slide"
        />
        <div className="slide-caption">
          <h1
            style={{
              background: "rgb(26 27 221 / 75%)",
              padding: "10px",
              borderRadius: "5rem",
              fontWeight: "800",
            }}
          >
            GO DIGITAL
          </h1>
          <h2 style={{ fontWeight: "600" }}>FOR AN BETTER BUSSINESS</h2>
          <p>
            Modern consumers are dependent on Internet and online research.
            <br />
            Content &amp; Social Media Marketing will expands your audience.
          </p>
          <button
            style={{
              background: "transparent",
              padding: "1rem",
              borderRadius: "5rem",
              color: "#fff",
              border: "1px solid #fff",
              transition: "background-color 0.3s ease-in-out",
            }}
          >
            Contact Now
          </button>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slide;
