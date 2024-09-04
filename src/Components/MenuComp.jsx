import axios from 'axios'
import { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const MenuComp = () => {
  const [image1, setImage1] = useState('')
  const [error, setError] = useState(null)

  useEffect(() => {
    axios.get('https://unairweb-design-back-end-production.up.railway.app', { responseType: 'blob' })
      .then(response => {
        const contentType = response.headers['content-type','GET']
        if (contentType.startsWith('image/')) {
          const imageUrl = URL.createObjectURL(response.data)
          console.log(imageUrl)
          console.log(image1)
          setImage1(imageUrl)
        } else {
          setError('Expected an image but received a different content type.')
          console.error('Received content type:', contentType)
        }
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
                <button>Pesan Sekarang!</button>
              </>
            ) : (
              error ? <p>{error}</p> : <p>Loading...</p>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default MenuComp
