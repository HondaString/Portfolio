import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import VR from "../../Assets/Projects/VR.png";
import Dream from "../../Assets/Projects/Dream.png";
import Jyupitercure from "../../Assets/Projects/Jyupitercure.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Tentang <strong className="purple">Kerjaan </strong>
        </h1>
        <p style={{ color: "white" }}>
        Berikut adalah beberapa proyek yang saya kerjakan baru-baru ini.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Jyupitercure}
              isBlog={false}
              title="Jyupiter Cure Figma"
              description="Jyupiter Cure adalah sebuah aplikasi herbal untuk mengetahui jenis jenis tanaman herbal untuk medis."
              ghLink="https://www.figma.com/file/R2n9IKu5gNHS58tAlxxqyZ/JYUPITER-CURE?type=design&node-id=0%3A1&mode=design&t=qwTtJ9bAmIowPOCC-1"
              demoLink="https://www.figma.com/proto/R2n9IKu5gNHS58tAlxxqyZ/JYUPITER-CURE?type=design&node-id=150-253&t=bnhdGV0da6bxlGxF-1&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=150%3A253&show-proto-sidebar=1&mode=design"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Dream}
              isBlog={false}
              title="Dream Smart Home"
              description="Dream Smart Home sebuah aplikasi cerdas yang menggunakan AI, agar dapat mengkontrol isi rumah, dapat melihat kegiatan anggota rumah beserta sebagai security rumah dari maling"
              ghLink="https://www.figma.com/file/okVAcoTecGPLonTewTjD43/DREAM-TEAM?type=design&node-id=54-88&mode=design&t=G5qqbW2mVkapNVcw-0"
              demoLink="https://www.figma.com/proto/okVAcoTecGPLonTewTjD43/DREAM-TEAM?type=design&node-id=54-88&t=Ge4fbmLzIHLMN2mD-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=54%3A88&mode=design"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={VR}
              isBlog={false}
              title="Virtual Reality"
              description="Sebuah design apliksi VIRTUAL REALITY yang dapat berguna untuk bermain game melalui android."
              ghLink="https://www.figma.com/file/qSuse9kjbr8oeZHhlKhl6f/virtual-reality-honda-chan?type=design&node-id=0%3A1&mode=design&t=G5qqbW2mVkapNVcw-1"
              demoLink="https://www.figma.com/proto/qSuse9kjbr8oeZHhlKhl6f/virtual-reality-honda-chan?type=design&node-id=20-139&t=NmAlWMqtVwHwBVBT-1&scaling=scale-down&page-id=0%3A1&mode=design"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
