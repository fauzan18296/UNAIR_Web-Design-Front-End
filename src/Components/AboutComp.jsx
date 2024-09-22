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
      const isMediaMobile = window.innerWidth <= 768;
      setIsMobile(isMediaMobile);
    }

    handleResize();
    window.addEventListener('resize', handleResize);
    
    Aos.init({
      duration: 2000,
      delay: 20,
      easing: "ease-in-out-back",
    });
   
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    Aos.refreshHard();
  },[isMobile])

  return (
    <>
      {/* About */}
      <div className="about-page d-flex justify-content-center align-items-center">
        <Container className="d-flex justify-content-center align-items-center">
          <Row className="d-flex justify-content-center align-items-center">
            <img key={isMobile ? 'mobile' : 'desktop'} data-aos={isMobile ? 'fade-down' : 'fade-right'} src={about1} alt="" />
            <Col key={!isMobile ? 'mobile' : 'desktop'}  data-aos={isMobile ? 'fade-up' : 'fade-left'} className="mx-auto mt-3">
              <h2 className="text-center">
                Kenyamanan Anda <span>Kepuasan</span> Kami
              </h2>
              <p className="fs-5">
                Kami menghadirkan makanan dan minuman berkualitas tinggi yang
                dapat menggugah selera anda. Dengan pengalaman service yang
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
          <Row className="d-flex align-items-center row-cols-lg-3 row-cols-md-2 row-cols-sm-1 gx-5">
            <Col className="mx-auto mt-3 about-us-content">
              <img src={abiyan} alt="" />
                  <p><span>Hello!</span> Nama saya <span>Abiyan Samawi Alkindi</span> saya adalah seorang siswa dari <span>SMAN 11 Surabaya.</span></p>
            </Col>
            <Col className="mx-auto mt-3 about-us-content">
              <img src={fauzan} alt="" />
                <p><span>Hello!</span> Nama saya <span>Ahmad Fauzan</span> saya adalah seorang siswa dari <span>SMAN 11 Surabaya</span>, dan saya adalah seorang <span>Web Developer.</span></p>
            </Col>
            <Col className="mx-auto mt-3 about-us-content">
              <img src={yosafat} alt="" />
               <p><span>Hello!</span> nama saya <span>Yosafat Archie Rismaharjo Sarlan</span> saya adalah seorang siswa dari <span>SMAN 11 Surabaya</span>, saya adalah seorang <span>Web Developer.</span></p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default AboutComp;
