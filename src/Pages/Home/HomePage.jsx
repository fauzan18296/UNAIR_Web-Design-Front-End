import NavbarComp from '../../Components/NavbarComp'
import HeroComp from '../../Components/HeroComp'
import MenuComp from '../../Components/MenuComp'
import { useRef } from 'react'

const Home = () => {
  const pageRef = useRef(null)

  const scrollRef = () => {
    if (pageRef.current)
    {
      pageRef.current.scrollIntoView({behavior: 'smooth'})
    }
  }

  return (
    <>
      <NavbarComp />
      <HeroComp scrollPageRef={scrollRef}/>
      <MenuComp ref={pageRef} />
    </>
  )
}

export default Home