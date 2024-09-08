import { Container, Row, Col } from 'react-bootstrap'


const HeroComp = ({ scrollPageRef }) => {
  return (
    <div className='hero-section d-flex justify-content-center align-items-center'>
      <Container className='d-flex align-items-center justify-content-center'>
        <Row style={
          {
            maxWidth: "100vw",
          }}>
          <Col className='text-center'>
            <p className='hero-text fs-3 fw-semibold'>Bagi Anda pencinta <span className='kuliner-text'>kuliner</span>, kami menawarkan beragam pilihan menu yang menggugah selera.</p>
              <button onClick={scrollPageRef} className='hero-btn mx-auto px-3 fs-5 fw-semibold'>Lihat Menu &dArr;</button>
          </Col>
        </Row>
      </Container>
     </div>
  )
}

export default HeroComp