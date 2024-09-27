import { Container, Row, Col } from 'react-bootstrap'
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'

const HeroComp = ({ scrollPageRef }) => {
  useEffect(() => {
    Aos.init({
      duration: 3000,
      delay: 18,
      easing: 'ease-in-out-back'
    })
  })
  return (
    <div className='hero-section d-flex justify-content-center align-items-center'>
      <Container className='d-flex align-items-center justify-content-center'>
        <Row style={
          {
            maxWidth: "100vw",
          }}>
          <Col>
            <p data-aos='fade-down' className='hero-text'>Bagi Anda pencinta <span>kuliner</span>, kami menawarkan beragam pilihan menu yang menggugah selera.</p>
              <button data-aos='fade-up' onClick={scrollPageRef} className='hero-btn mx-auto px-3 fs-5 fw-semibold'>Lihat Menu &dArr;</button>
          </Col>
        </Row>
      </Container>
     </div>
  )
}

HeroComp.propTypes = {
  scrollPageRef: PropTypes.object.isRequired,  // Validasi tipe object
};

export default HeroComp