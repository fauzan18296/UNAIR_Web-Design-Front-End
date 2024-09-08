import axios from 'axios'
import { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import React from 'react'

const MenuComp = React.forwardRef(({ ref }) => {
  const [image1, setImage1] = useState('')
  const [image2, setImage2] = useState('')
  const [image3, setImage3] = useState('')
  const [image4, setImage4] = useState('')
  const [image5, setImage5] = useState('')
  const [image6, setImage6] = useState('')
  const [image7, setImage7] = useState('')
  const [image8, setImage8] = useState('')
  const [image9, setImage9] = useState('')
  const [image10, setImage10] = useState('')
  const [image11, setImage11] = useState('')
  const [image12, setImage12] = useState('')
  const [error, setError] = useState(null)

  // API Gambar Menu
  useEffect(() => {
     // 1. API gambar dengan pengambilan id 1
    axios.get('https://affectionate-perfection-production.up.railway.app/image/1', {responseType: 'blob'})
      .then(response => {
        const imageUrl = URL.createObjectURL(response.data);
          setImage1(imageUrl)
      })
      .catch(error => {
        console.error('Error fetching the image:', error)
        setError('Failed to load image')
      })
      // 2. API gambar dengan pengambilan id 2
    axios.get('https://affectionate-perfection-production.up.railway.app/image/2', {responseType: 'blob'})
      .then(response => {
        const imageUrl = URL.createObjectURL(response.data);
          setImage2(imageUrl)
      })
      .catch(error => {
        console.error('Error fetching the image:', error)
        setError('Failed to load image')
      })
      // 3. API gambar dengan pengambilan id 3
    axios.get('https://affectionate-perfection-production.up.railway.app/image/3', {responseType: 'blob'})
      .then(response => {
        const imageUrl = URL.createObjectURL(response.data);
          setImage3(imageUrl)
      })
      .catch(error => {
        console.error('Error fetching the image:', error)
        setError('Failed to load image')
      })
      // 4. API gambar dengan pengambilan id 4
    axios.get('https://affectionate-perfection-production.up.railway.app/image/4', {responseType: 'blob'})
      .then(response => {
        const imageUrl = URL.createObjectURL(response.data);
          setImage4(imageUrl)
      })
      .catch(error => {
        console.error('Error fetching the image:', error)
        setError('Failed to load image')
      })
      // 5. API gambar dengan pengambilan id 5
    axios.get('https://affectionate-perfection-production.up.railway.app/image/5', {responseType: 'blob'})
      .then(response => {
        const imageUrl = URL.createObjectURL(response.data);
          setImage5(imageUrl)
      })
      .catch(error => {
        console.error('Error fetching the image:', error)
        setError('Failed to load image')
      })
      // 6. API gambar dengan pengambilan id 6
    axios.get('https://affectionate-perfection-production.up.railway.app/image/6', {responseType: 'blob'})
      .then(response => {
        const imageUrl = URL.createObjectURL(response.data);
          setImage6(imageUrl)
      })
      .catch(error => {
        console.error('Error fetching the image:', error)
        setError('Failed to load image')
      })
      // 7. API gambar dengan pengambilan id 7
    axios.get('https://affectionate-perfection-production.up.railway.app/image/7', {responseType: 'blob'})
      .then(response => {
        const imageUrl = URL.createObjectURL(response.data);
          setImage7(imageUrl)
      })
      .catch(error => {
        console.error('Error fetching the image:', error)
        setError('Failed to load image')
      })
      // 8. API gambar dengan pengambilan id 8
    axios.get('https://affectionate-perfection-production.up.railway.app/image/8', {responseType: 'blob'})
      .then(response => {
        const imageUrl = URL.createObjectURL(response.data);
          setImage8(imageUrl)
      })
      .catch(error => {
        console.error('Error fetching the image:', error)
        setError('Failed to load image')
      })
      // 9. API gambar dengan pengambilan id 9
    axios.get('https://affectionate-perfection-production.up.railway.app/image/9', {responseType: 'blob'})
      .then(response => {
        const imageUrl = URL.createObjectURL(response.data);
          setImage9(imageUrl)
      })
      .catch(error => {
        console.error('Error fetching the image:', error)
        setError('Failed to load image')
      })
      // 10. API gambar dengan pengambilan id 10
    axios.get('https://affectionate-perfection-production.up.railway.app/image/10', {responseType: 'blob'})
      .then(response => {
        const imageUrl = URL.createObjectURL(response.data);
          setImage10(imageUrl)
      })
      .catch(error => {
        console.error('Error fetching the image:', error)
        setError('Failed to load image')
      })
      // 11. API gambar dengan pengambilan id 11
    axios.get('https://affectionate-perfection-production.up.railway.app/image/11', {responseType: 'blob'})
      .then(response => {
        const imageUrl = URL.createObjectURL(response.data);
          setImage11(imageUrl)
      })
      .catch(error => {
        console.error('Error fetching the image:', error)
        setError('Failed to load image')
      })
      // 12. API gambar dengan pengambilan id 12
    axios.get('https://affectionate-perfection-production.up.railway.app/image/12', {responseType: 'blob'})
      .then(response => {
        const imageUrl = URL.createObjectURL(response.data);
          setImage12(imageUrl)
      })
      .catch(error => {
        console.error('Error fetching the image:', error)
        setError('Failed to load image')
      })
  }, [])


  return (
    <div ref={ref} className='menu-kuliner' >
       <h2 className='text-center mt-3'>Menu Food & Drink</h2>
      <Container className='d-flex justify-content-center align-items-center'>
        <Row className='d-flex align-items-center  row-cols-lg-5 row-cols-md-3 row-cols-sm-2 mt-2 g-4'>
          {/* Memunculkan API gambar ke website */}
          <Col className='my-3'>
            {image1 ? (
              <>
                <img src={image1} alt='image1' />
                <p className='menu-name  fw-semibold'>Matcha Pancake</p>
                <button className='btn-menu p-1 fw-semibold'>Pesan Sekarang!</button>
              </>
            ) : (
                error ? <p>{ error }</p>: <p>Loading...</p>
            )}
          </Col>

          <Col className='my-3'>
            {image2 ? (
              <>
                <img src={image2} alt='image2' />
                <p className='menu-name  fw-semibold'>Muffin Cake</p>
                <button className='btn-menu fw-semibold p-1'>Pesan Sekarang!</button>
              </>
            ) : (
                error ? <p>{ error }</p>: <p>Loading...</p>
            )}
          </Col>

          <Col className='my-3'>
            {image3 ? (
              <>
                <img src={image3} alt='image3' />
                <p className='menu-name  fw-semibold'>Potato Balls</p>
                <button className='btn-menu fw-semibold p-1'>Pesan Sekarang!</button>
              </>
            ) : (
                error ? <p>{ error }</p>: <p>Loading...</p>
            )}
          </Col>

          <Col className='my-3'>
            {image4 ? (
              <>
                <img src={image4} alt='image4' />
                <p className='menu-name  fw-semibold'>Pink Macaroons</p>
                <button className='btn-menu fw-semibold p-1'>Pesan Sekarang!</button>
              </>
            ) : (
                error ? <p>{ error }</p>: <p>Loading...</p>
            )}
          </Col>

          <Col className='my-3'>
            {image5 ? (
              <>
                <img src={image5} alt='image5' />
                <p className='menu-name  fw-semibold'>Roast Beef</p>
                <button className='btn-menu fw-semibold p-1'>Pesan Sekarang!</button>
              </>
            ) : (
                error ? <p>{ error }</p>: <p>Loading...</p>
            )}
          </Col>

          <Col className='my-3'>
            {image6 ? (
              <>
                <img src={image6} alt='image6' />
                <p className='menu-name  fw-semibold'>Sourdough Bread</p>
                <button className='btn-menu fw-semibold p-1'>Pesan Sekarang!</button>
              </>
            ) : (
                error ? <p>{ error }</p>: <p>Loading...</p>
            )}
          </Col>

          <Col className='my-3'>
            {image7 ? (
              <>
                <img src={image7} alt='image7' />
                <p className='menu-name  fw-semibold'>Kiwi Mojito</p>
                <button className='btn-menu fw-semibold p-1'>Pesan Sekarang!</button>
              </>
            ) : (
                error ? <p>{ error }</p>: <p>Loading...</p>
            )}
          </Col>

          <Col className='my-3'>
            {image8 ? (
              <>
                <img src={image8} alt='image8' />
                <p className='menu-name  fw-semibold'>Manggo Chia Smootie</p>
                <button className='mt-3 btn-menu fw-semibold p-1'>Pesan Sekarang!</button>
              </>
            ) : (
                error ? <p>{ error }</p>: <p>Loading...</p>
            )}
          </Col>

          <Col className='my-3'>
            {image9 ? (
              <>
                <img src={image9} alt='image9' />
                <p className='menu-name  fw-semibold'>Orange juice</p>
                <button className='btn-menu fw-semibold p-1'>Pesan Sekarang!</button>
              </>
            ) : (
                error ? <p>{ error }</p>: <p>Loading...</p>
            )}
          </Col>

          <Col className='my-3'>
            {image10 ? (
              <>
                <img src={image10} alt='image10' />
                <p className='menu-name  fw-semibold'>Red Cocktail</p>
                <button className='btn-menu fw-semibold p-1'>Pesan Sekarang!</button>
              </>
            ) : (
                error ? <p>{ error }</p>: <p>Loading...</p>
            )}
          </Col>

          <Col className='my-3'>
            {image11 ? (
              <>
                <img src={image11} alt='image11' />
                <p className='menu-name  fw-semibold'>Lemon Tea</p>
                <button className='btn-menu fw-semibold p-1'>Pesan Sekarang!</button>
              </>
            ) : (
                error ? <p>{ error }</p>: <p>Loading...</p>
            )}
          </Col>

          <Col className='my-3'>
            {image12 ? (
              <>
                <img src={image12} alt='image12' />
                <p className='menu-name  fw-semibold'>Spear Mint</p>
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
})

export default MenuComp
