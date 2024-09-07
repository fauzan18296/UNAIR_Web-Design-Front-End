import axios from 'axios'
import { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import React from 'react'

const MenuComp = React.forwardRef((props,ref) => {
  const [image1, setImage1] = useState('')
  const [image2, setImage2] = useState('')
  const [image3, setImage3] = useState('')
  const [image4, setImage4] = useState('')
  const [image5, setImage5] = useState('')
  const [image6, setImage6] = useState('')
  const [error, setError] = useState(null)

    // API Gambar Menu
    axios.get('https://affectionate-perfection-production.up.railway.app/image/1', {responseType: 'blob'})
      .then(response => {
        const imageUrl = URL.createObjectURL(response.data);
          setImage1(imageUrl)
      })
      .catch(error => {
        console.error('Error fetching the image:', error)
        setError('Failed to load image')
      })
    
    axios.get('https://affectionate-perfection-production.up.railway.app/image/2', {responseType: 'blob'})
      .then(response => {
        const imageUrl = URL.createObjectURL(response.data);
          setImage2(imageUrl)
      })
      .catch(error => {
        console.error('Error fetching the image:', error)
        setError('Failed to load image')
      })
    
    axios.get('https://affectionate-perfection-production.up.railway.app/image/3', {responseType: 'blob'})
      .then(response => {
        const imageUrl = URL.createObjectURL(response.data);
          setImage3(imageUrl)
      })
      .catch(error => {
        console.error('Error fetching the image:', error)
        setError('Failed to load image')
      })
    
    axios.get('https://affectionate-perfection-production.up.railway.app/image/4', {responseType: 'blob'})
      .then(response => {
        const imageUrl = URL.createObjectURL(response.data);
          setImage4(imageUrl)
      })
      .catch(error => {
        console.error('Error fetching the image:', error)
        setError('Failed to load image')
      })
    
    axios.get('https://affectionate-perfection-production.up.railway.app/image/5', {responseType: 'blob'})
      .then(response => {
        const imageUrl = URL.createObjectURL(response.data);
          setImage5(imageUrl)
      })
      .catch(error => {
        console.error('Error fetching the image:', error)
        setError('Failed to load image')
      })
    
    axios.get('https://affectionate-perfection-production.up.railway.app/image/6', {responseType: 'blob'})
      .then(response => {
        const imageUrl = URL.createObjectURL(response.data);
          setImage6(imageUrl)
      })
      .catch(error => {
        console.error('Error fetching the image:', error)
        setError('Failed to load image')
      })


  return (
    <div ref={ref} className='menu-kuliner' >
      <Container className='d-flex justify-content-center align-items-center'>
        <Row className='d-flex justify-content-center'>
          <h2 className='mt-3'>Menu Food & Drink</h2>
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
        </Row>
      </Container>
    </div>
  )
})

export default MenuComp
