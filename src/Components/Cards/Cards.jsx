import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import cardImg from "../../assets/card.png";
import "./Cards.css";
function Cards() {
  return (
    <div>
      <h2 style={{ marginLeft: "4rem", marginTop: "2rem" }}>
        OUR <span style={{ color: "rgb(26 27 221 / 75%)" }}>SERVICES</span>
      </h2>
      <hr
        style={{
          width: "10rem",
          color: " rgb(26 27 221 / 75%)",
          marginLeft: "4rem",
        }}
      />

      <div
        style={{ display: "flex", flexWrap: "wrap", marginLeft: "3%" }}
        className="cards"
      >
        <Card
          style={{
            width: "25rem",
            marginLeft: "2rem",
            borderBottom: "5px solid rgb(26 27 221 / 75%)",
          }}
          className="card"
        >
          <Card.Img variant="top" src={cardImg} />
          <Card.Body>
            <Card.Title>Software Application</Card.Title>
            <Card.Text>
              Our team of highly-skilled web developers understand your business
              clearly, build a robust application to deliver nothing less than
              excellence.
            </Card.Text>
            <Button style={{ background: "rgb(26 27 221 / 75%)" }}>
              Read More
            </Button>
          </Card.Body>
        </Card>

        <Card
          style={{
            width: "25rem",
            marginLeft: "2rem",
            borderBottom: "5px solid rgb(26 27 221 / 75%)",
          }}
          className="card"
        >
          <Card.Img variant="top" src={cardImg} />
          <Card.Body>
            <Card.Title>Windows Application</Card.Title>
            <Card.Text>
              Our certified developers develop applications after wide study and
              research. Our application reduces the complexity of your business
              process &amp; improve the performance.
            </Card.Text>
            <Button style={{ background: "rgb(26 27 221 / 75%)" }}>
              Read More
            </Button>
          </Card.Body>
        </Card>

        <Card
          style={{
            width: "25rem",
            borderBottom: "5px solid rgb(26 27 221 / 75%)",
            marginLeft: "2rem",
          }}
          className="card"
        >
          <Card.Img variant="top" src={cardImg} />
          <Card.Body>
            <Card.Title>E-Commerce Development</Card.Title>
            <Card.Text>
              Outstanding design services at affodable price without
              compromising on quality.We develope the best in class e-Commerce
              web design solutions, With a team of specialists.
            </Card.Text>
            <Button style={{ background: "rgb(26 27 221 / 75%)" }}>
              Read More
            </Button>
          </Card.Body>
        </Card>

        <Card
          style={{
            width: "25rem",
            marginLeft: "2rem",
            marginTop: "2rem",
            borderBottom: "5px solid rgb(26 27 221 / 75%)",
          }}
          className="card"
        >
          <Card.Img variant="top" src={cardImg} />
          <Card.Body>
            <Card.Title>Android Mobile Application</Card.Title>
            <Card.Text>
              Android is most widely used mobile operating systems across the
              globe. We have excellent android application developers team, who
              have developed a lot of application.
            </Card.Text>
            <Button style={{ background: "rgb(26 27 221 / 75%)" }}>
              Read More
            </Button>
          </Card.Body>
        </Card>

        <Card
          style={{
            width: "25rem",
            marginLeft: "2rem",
            marginTop: "2rem",
            borderBottom: "5px solid rgb(26 27 221 / 75%) ",
          }}
          className="card"
        >
          <Card.Img variant="top" src={cardImg} />
          <Card.Body>
            <Card.Title>Mirigation & ReEngineering</Card.Title>
            <Card.Text>
              Migrations occur for many different reasons including, but not
              limited to, disaster recovery, server hardware/operating system
              upgrades, or to move it to a cloud network.
            </Card.Text>
            <Button style={{ background: "rgb(26 27 221 / 75%)" }}>
              Read More
            </Button>
          </Card.Body>
        </Card>

        <Card
          style={{
            width: "25rem",
            marginLeft: "2rem",
            marginTop: "2rem",
            borderBottom: "5px solid rgb(26 27 221 / 75%) ",
          }}
          className="card"
        >
          <Card.Img variant="top" src={cardImg} />
          <Card.Body>
            <Card.Title>Mirigation & ReEngineering</Card.Title>
            <Card.Text>
              Migrations occur for many different reasons including, but not
              limited to, disaster recovery, server hardware/operating system
              upgrades, or to move it to a cloud network.
            </Card.Text>
            <Button style={{ background: "rgb(26 27 221 / 75%)" }}>
              Read More
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Cards;
