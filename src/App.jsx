import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home/HomePage'
import About from './Pages/About/AboutPage'
import Categories from './Pages/Categories/CategoriesPage'


const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/category' element={<Categories />} />
      </Routes>
      </Router>
      </>
  )
}

export default App
