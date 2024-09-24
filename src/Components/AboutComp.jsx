import { Container, Row, Col } from "react-bootstrap";
import about1 from "../assets/IMG/img-about/image1.webp";
import abiyan from "../assets/IMG/img-about/abiyan.webp";
import fauzan from "../assets/IMG/img-about/fauzan.webp";
import yosafat from "../assets/IMG/img-about/yosafat.webp";
import Aos from "aos";
import "aos/dist/aos.css";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect } from "react";

const AboutComp = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 1]);
  useEffect(() => {
    Aos.init({
      duration: 2000,
      delay: 18,
      easing: "ease-in-out-back",
    });
  }, []);

  return (
    <>
      {/* About */}
      <div className="about-page d-flex justify-content-center align-items-center">
        <Container className="d-flex justify-content-center align-items-center">
          <Row className="d-flex justify-content-center align-items-center">
            <img data-aos="fade-right" src={about1} alt="" />
            <Col data-aos="fade-left" className="mx-auto mt-3">
              <h2 className="text-center">
                Kenyamanan Anda <span>Kepuasan</span> Kami
              </h2>
              <p className="fs-5">
                Kami menghadirkan makanan dan minuman berkualitas tinggi yang
                dapat menggugah selera anda. Dengan pengalaman service yang
                menyenangkan dan suasana dalam restaurant yang memanjakan.
                Bahan-bahan makanan dan minuman yang digunakan halal dan
                terjamin cita rasanya.
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      {/* About us */}
      <div className="about-us d-flex align-items-center justify-content-center">
        <h2 className="text-center">
          Tentang <span>Kami</span>
        </h2>
        <Container className="d-flex align-items-center justify-content-center">
          <Row className="d-flex align-items-center justify-content-center row-cols-lg-3 row-cols-md-2 row-cols-sm-1 g-5">
            <div>
              <Col className="mx-auto mt-3 about-us-content">
                <motion.img style={{ scale }} src={abiyan} alt="" />
                <p data-aos="fade-up">
                  <span>Hello!</span> Nama saya{" "}
                  <span>Abiyan Samawi Alkindi</span> saya adalah seorang siswa
                  dari <span>SMAN 11 Surabaya,</span> dan saya adalah seorang{" "}
                  <span>Web Developer.</span>
                </p>
              </Col>
            </div>
            <div>
              <Col className="mx-auto mt-3 about-us-content">
                <motion.img style={{ scale }} src={fauzan} alt="" />
                <p data-aos="fade-up">
                  <span>Hello!</span> Nama saya <span>Ahmad Fauzan</span> saya
                  adalah seorang siswa dari <span>SMAN 11 Surabaya,</span> dan
                  saya adalah seorang <span>Web Developer.</span>
                </p>
              </Col>
            </div>
            <div>
              <Col className="mx-auto mt-3 about-us-content">
                <motion.img style={{ scale }} src={yosafat} alt="" />
                <p data-aos="fade-up">
                  <span>Hello!</span> Nama saya{" "}
                  <span>Yosafat Archie Rismaharjo Sarlan</span> saya adalah
                  seorang siswa dari <span>SMAN 11 Surabaya,</span> dan saya
                  adalah seorang <span>Web Developer.</span>
                </p>
              </Col>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default AboutComp;
