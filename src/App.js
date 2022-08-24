import './App.css';
import Tabla from './components/Tabla/Tabla';
import 'bootstrap/dist/css/bootstrap.min.css';
import Formulario from './components/Formulario/Formulario';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Navbar from './components/Navbar/Navbar';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Tabla />} />
          <Route path='/formulario' element={<Formulario />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
