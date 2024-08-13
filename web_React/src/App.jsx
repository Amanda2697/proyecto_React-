import { useState } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Footer1 from './componentes/footer/Footer1';
import Header from './componentes/header/Header';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Atracciones_layout from './componentes/atracciones_layout/Atracciones_layout';
import Seccion_cultura from './componentes/seccion_cultura/Seccion_cultura';
import Seccion_arquitectura from './componentes/seccion_arquitectura/Seccion_arquitectura';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />

      <Router>

        <div>
          <Routes>
            <Route path='/' element={<Atracciones_layout />} />
            <Route path='/cultura' element={<Seccion_cultura />} />
            <Route path="/arquitectura" element={<Seccion_arquitectura />} />
          </Routes>
        </div>



        <Footer1 />

      </Router>




    </>
  )
}

export default App
