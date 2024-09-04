import axios from 'axios'
import { useState, useEffect } from 'react'
import {Container, Row, Col} from 'react-bootstrap'

const MenuComp = () => {
  const [image1, setImage1] = useState('')
  const [image2, setImage2] = useState('')
  const [image3, setImage3] = useState('')
  const [image4, setImage4] = useState('')
  const [image5, setImage5] = useState('')
  const [image6, setImage6] = useState('')

  useEffect(() => {
    axios.get('https://railway.app/project/0afdbf53-d991-4eba-b7bc-779e876b4e0b/service/0c929184-2295-49ab-b27d-a757fbadf1ed/image/1', {responseType: 'blob' })
          .then(response => {
        let imageUrl = URL.createObjectURL(response.data)
        setImage1(imageUrl)
          })
  }, [])

  return (
      <div className='menu-kuliner'>
        <Container className='d-flex justify-content-center align-items-center'>
          <Row className='d-flex justify-content-center'>
            <h2 className='mt-3'>Menu Food & Drink</h2>
            <Col className='my-3'>
              {image1 && (<>
                <img src={image1} alt='image1' />
                <p className='fs-4 fw-semibold'>Matcha Pancake</p>
                <button>Pesan Sekarang!</button>
              </>)}
            </Col>
            <Col className='my-3'>
              {image1 && (<>
                <img src={image1} alt='image1' />
                <p className='fs-4 fw-semibold'>Matcha Pancake</p>
                <button>Pesan Sekarang!</button>
              </>)}
            </Col>
            <Col className='my-3'>
              {image1 && (<>
                <img src={image1} alt='image1' />
                <p className='fs-4 fw-semibold'>Matcha Pancake</p>
                <button>Pesan Sekarang!</button>
              </>)}
            </Col>
          </Row>
        </Container>
      </div>
  )
}

export default MenuComp