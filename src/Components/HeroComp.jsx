import {Container, Row, Col} from 'react-bootstrap'

const HeroComp = () => {
  return (
    <div className='hero-section d-flex justify-content-center align-items-center'>
      <Container className='d-flex align-items-center justify-content-center'>
        <Row style={
          {
            maxWidth: "100%",
          }} className='mx-1 px-4'>
          <Col className='text-center mx-2 px-4'>
            <p className='hero-text fs-4 fw-semibold'>Bagi Anda pencinta <span className='kuliner-text'>kuliner</span>, kami menawarkan beragam pilihan menu yang menggugah selera.</p>
              <button className='hero-btn mx-auto px-3 py-2 fs-5 fw-semibold'>Lihat Menu &dArr;</button>
          </Col>
        </Row>
      </Container>
     </div>
  )
}

export default HeroComp