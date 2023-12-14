import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Halo semuanya, aku <span className="purple">Andika Kurnia Sandi Yuda </span>
            dari <span className="purple"> Depok, Jawa Barat.</span>
            <br />
            Saat ini saya bekerja sebagai pengembang perangkat lunak.
            <br />
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Bermain game
            </li>
            <li className="about-activity">
              <ImPointRight /> UI/UX
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Ex Favilla, Nos Resurgemus"{" "}
          </p>
          <footer className="blockquote-footer">Andika Kurnia Sandi Yuda</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
