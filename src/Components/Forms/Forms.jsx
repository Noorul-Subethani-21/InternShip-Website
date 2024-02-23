import React from "react";
import { Container, Row, Col, Carousel, Form, Button } from "react-bootstrap";
import { MdPerson, MdStar } from "react-icons/md";
import "./Forms.css";
const clientThoughts = [
  { user: "John Doe", rating: 5, text: "Great service! Highly recommended." },
  {
    user: "Jane Smith",
    rating: 4,
    text: "Very satisfied with the quality of work.",
  },
  {
    user: "Bob Johnson",
    rating: 5,
    text: "Excellent support and communication.",
  },
  {
    user: "Alice Williams",
    rating: 4,
    text: "Professional team, happy with the results.",
  },
];

const App = () => {
  return (
    <Container fluid className="p-0  " style={{ marginTop: "4rem" }}>
      <h2 style={{ marginLeft: "4rem", marginTop: "2rem" }}>
        WHAT <span style={{ color: "rgb(26 27 221 / 75%)" }}>CLIENT SAYS</span>
      </h2>
      <hr
        style={{
          width: "10rem",
          color: " rgb(26 27 221 / 75%)",
          marginLeft: "4rem",
        }}
      />

      <Row className="m-0 ">
        {/* Left Side - Slider with Client Thoughts */}
        <Col
          md={6}
          className=" client text-white py-0 "
          style={{
            marginTop: "1rem",
            background: "rgb(26 27 221 / 75%)",
            height: "15rem",
            width: "28rem",
            marginLeft: "1%",
            borderRadius: "2rem",
          }}
        >
          <Carousel fade>
            {clientThoughts.map((thought, index) => (
              <Carousel.Item key={index}>
                <div
                  className="d-flex flex-column align-items-center "
                  style={{ marginTop: "20px" }}
                >
                  <MdPerson
                    size={30}
                    style={{ width: "10rem", height: "5rem" }}
                  />
                  <p>{thought.user}</p>
                  <div className="d-flex">
                    {Array.from({ length: thought.rating }).map((_, i) => (
                      <MdStar key={i} size={20} className="text-warning" />
                    ))}
                  </div>
                  <p>{thought.text}</p>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>

        {/* Right Side - Contact Form */}
        <Col
          style={{
            marginLeft: "6%",
            marginTop: "0px",
            position: "relative",
            bottom: "50%",
          }}
        >
          <div className="form">
            <h2 style={{ marginLeft: "4rem", marginTop: "2rem" }}>
              INTERESTED{" "}
              <span style={{ color: "rgb(26 27 221 / 75%)" }}>
                IN DISCUSSING
              </span>
            </h2>
            <hr
              style={{
                width: "10rem",
                color: " rgb(26 27 221 / 75%)",
                marginLeft: "4rem",
              }}
            />

            <Form>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>

              <Form.Group controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Enter your message"
                />
              </Form.Group>

              <Button style={{ marginTop: "10px" }} type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
