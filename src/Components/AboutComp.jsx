import { Container, Row, Col } from "react-bootstrap"

const AboutComp = () => {
  return (
    <div className="about-page d-flex align-items-center">
    <h2 className="text-center">About</h2>
      <Container className="about-container d-flex justify-content-center align-items-center">
      <Row className="d-flex justify-content-center align-items-center">
          <Col className="fs-3">
        <p>Kami menghadirkan makanan dan minuman berkualitas tinggi yang dapat menggugah selara anda. Dengan pengalaman service yang menyenankan dan suasana dalam restaurant yang memanjakan. Bahan-bahan makanan dan minuman  yang digunakan halal dan terjamin cita rasanya.</p>
        </Col>
      </Row>
      </Container>
      </div>
  )
}

export default AboutComp