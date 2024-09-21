import { Container, Row, Col } from "react-bootstrap";
import about1 from "../assets/IMG/img-about/image1.webp";
import abiyan from "../assets/IMG/img-about/abiyan.webp"
import fauzan from "../assets/IMG/img-about/fauzan.webp"
import yosafat from "../assets/IMG/img-about/yosafat.webp"
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

const AboutComp = () => {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {

    function handleResize() {
      const isMediaMobile = window.innerWidth <= 768
      setIsMobile(isMediaMobile)
          Aos.refresh()
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    
    Aos.init({
      duration: 2000,
      delay: 20,
      easing: "ease-in-out-back",
    });
   
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, []);
  return (
    <>
      {/* About */}
    <div className="about-page d-flex justify-content-center align-items-center">
      <Container className="d-flex justify-content-center align-items-center">
        <Row className="d-flex justify-content-center align-items-center">
          <img key={isMobile ? 'mobile' : 'desktop'} data-aos={isMobile ? 'fade-down' : 'fade-right'} src={about1} alt="" />
          <Col key={isMobile ? 'mobile' : false} data-aos={isMobile ? 'fade-up' : 'fade-left'} className="mx-auto mt-3">
            <h2 className="text-center">
              Kenyamanan Anda <span>Kepuasan</span> Kami
            </h2>
            <p className="fs-5">
              Kami menghadirkan makanan dan minuman berkualitas tinggi yang
              dapat menggugah selara anda. Dengan pengalaman service yang
              menyenangkan dan suasana dalam restaurant yang memanjakan.
              Bahan-bahan makanan dan minuman yang digunakan halal dan terjamin
              cita rasanya.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
{/* About us */}
      <div className="about-us d-flex align-items-center">
         <h2 className="text-center">
              Tentang <span>Kami</span>
              </h2>
      <Container className="d-flex align-items-center">
          <Row className="d-flex align-items-center row-cols-lg-4 gx-5">
          <Col className="mx-auto mt-3">
              <img src={abiyan} alt="" />
          </Col>
          <Col className="mx-auto mt-3">
              <img src={fauzan} alt="" />
          </Col>
          <Col className="mx-auto mt-3">
              <img src={yosafat} alt="" />
          </Col>
        </Row>
      </Container>
      </div>
      </>
  );
};

export default AboutComp;
