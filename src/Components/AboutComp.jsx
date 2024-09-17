import { Container, Row, Col } from "react-bootstrap";
<<<<<<< HEAD
import about from "../assets/IMG/img-about/image1.webp";
=======
import about1 from "../assets/IMG/img-about/image1.webp";
>>>>>>> staging

const AboutComp = () => {
  return (
    <div className="about-page d-flex justify-content-center align-items-center">
<<<<<<< HEAD
      <img src={about} alt="" />
      <h2>
        Kenyamanan anda <span>kepuasan</span> kami
      </h2>
      <Container className="about-container d-flex align-items-center">
        <Row className="d-flex align-items-center">
          <Col className="fs-3">
            <p>
=======
      <Container className="d-flex justify-content-center align-items-center">
        <Row className="d-flex justify-content-center align-items-center">
             <img src={about1} alt="" />
          <Col className="mx-auto mt-3">
      <h2 className="text-center">
        Kenyamanan anda <span>kepuasan</span> kami
      </h2>
            <p className="fs-5">
>>>>>>> staging
              Kami menghadirkan makanan dan minuman berkualitas tinggi yang
              dapat menggugah selara anda. Dengan pengalaman service yang
              menyenankan dan suasana dalam restaurant yang memanjakan.
              Bahan-bahan makanan dan minuman yang digunakan halal dan terjamin
              cita rasanya.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutComp;
