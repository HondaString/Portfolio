import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
            BIARKAN SAYA <span className="purple"> MEMPERKENALKAN </span> DIRI
            </h1>
            <p className="home-about-body">
            Saya jatuh cinta dengan pemrograman dan setidaknya saya telah mempelajari sesuatu, menurut saya… 🤷‍♂️
              <br />
              <br />Saya fasih dalam bahasa klasik seperti
              <i>
                <b className="purple"> C++, Javascript dan Html. </b>
              </i>
              <br />
              <br />
              Bidang Minat saya sedang berkembang baru &nbsp;
              <i>
                <b className="purple">Web Technologies </b> and 
              </i>
              <i>
                 <b className="purple"> Android Development </b>
              </i>
              <br />
              <br />
              Kapanpun memungkinkan, saya juga menerapkan passion saya untuk mengembangkan design bersama 
              <b className="purple"> UI</b> and
              <i>
                <b className="purple">
                   UX
                </b>
              </i>
              &nbsp; lalu
              <i>
                <b className="purple"> React.js dan Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>CARI AKU DI</h1>
            <p>
              Merasa bebas untuk <span className="purple">berkenalan </span>dengan ku
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/HondaString"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
                        </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/andika-kurnia-sandi-yuda-b829b1192/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/zxyuan97"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
