// import './App.css'
import Navbar from './components/navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Favourites from './pages/favourites/Favourites'
import Details from './pages/details/Details'


function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route 
      path='/'
      element={<Home />}
      />
      <Route 
      path='/favourites'
      element={<Favourites />}
      />
      <Route 
      path='/recipe-items/:id'
      element={<Details />}
      />
    </Routes>
    </>
  )
}

export default App
