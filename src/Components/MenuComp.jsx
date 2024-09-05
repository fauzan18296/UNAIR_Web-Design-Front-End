import axios from 'axios'
import { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const MenuComp = () => {
  const [image1, setImage1] = useState('')
  const [error, setError] = useState(null)

  useEffect(() => {
    axios.get('https://affectionate-perfection-production.up.railway.app/image/1', {responseType: 'blob'})
      .then(response => {
        const imageUrl = URL.createObjectURL(response.data);
          setImage1(imageUrl)
      })
      .catch(error => {
        console.error('Error fetching the image:', error)
        setError('Failed to load image')
      })
  }, [])

  return (
    <div className='menu-kuliner'>
      <Container className='d-flex justify-content-center align-items-center'>
        <Row className='d-flex justify-content-center'>
          <h2 className='mt-3'>Menu Food & Drink</h2>
          <Col className='my-3'>
            {image1 ? (
              <>
                <img src={image1} alt='image1' />
                <p className='fs-4 fw-semibold'>Matcha Pancake</p>
                <button className='btn-menu p-1 fw-semibold'>Pesan Sekarang!</button>
              </>
            ) : (
                error ? <p>{ error }</p>: <p>Loading...</p>
            )}
          </Col>

          <Col className='my-3'>
            {image1 ? (
              <>
                <img src={image1} alt='image1' />
                <p className='fs-4 fw-semibold'>Matcha Pancake</p>
                <button className='btn-menu fw-semibold p-1'>Pesan Sekarang!</button>
              </>
            ) : (
                error ? <p>{ error }</p>: <p>Loading...</p>
            )}
          </Col>

          <Col className='my-3'>
            {image1 ? (
              <>
                <img src={image1} alt='image1' />
                <p className='fs-4 fw-semibold'>Matcha Pancake</p>
                <button className='btn-menu fw-semibold p-1'>Pesan Sekarang!</button>
              </>
            ) : (
                error ? <p>{ error }</p>: <p>Loading...</p>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default MenuComp
